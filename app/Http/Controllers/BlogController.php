<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use Contentful\ResourceArray;
use LaravelLocalization;

class BlogController extends Controller{

    private $client;
    private $locale;

    const CT_POST = 'post';
    const CT_ABOUT = 'about';
    const CT_CATEGORY = 'categories';

    /**
     * BlogController constructor.
     *
     * @param DeliveryClient $client - the contentful delivery client
     */

    public function __construct(DeliveryClient $client){

        $this->client = $client;
        $this->locale = LaravelLocalization::getCurrentLocale();
        setlocale(LC_TIME, $this->locale);
    }

    /**
     * Retrieve a view containing every piece of available content
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */

    public function showIndex(){

        $posts = $this->_retrievePosts();
        $about = $this->_retrieveAbout();
        $categories = $this->_retrieveCategories();

        return view('pages.home', [
            'posts' => $posts,
            'about' => $about[0],
            'categories' => $categories,
            'showPrevious' => $posts->getSkip() > 0,
            'showNext' => count($posts) + $posts->getSkip() > $posts->getTotal(),
            'name' => 'home',
        ]);
    }

    /**
     * Get the view for when a category has been selected
     *
     * @param [String} $categoryName -  the name of the category to filter on
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */

    public function showCategory($categoryName){

        $posts = $this->_retrievePosts();
        $about = $this->_retrieveAbout();
        $categories = $this->_retrieveCategories();

        // Do manual filtering and object reconstruction

        $postsArray = [];

        foreach($posts->getIterator() as $post_key => $post){

            foreach($post->getTags() as $tag){

                if($tag->getName() === $categoryName){

                    array_push($postsArray, $post);
                    break;
                }
            }
        }

        $posts = new ResourceArray($postsArray, sizeof($postsArray), 10, 0);

        return view('pages.home', [
            'posts' => $posts,
            'about' => $about[0],
            'categories' => $categories,
            'showPrevious' => $posts->getSkip() > 0,
            'showNext' => count($posts) + $posts->getSkip() > $posts->getTotal(),
            'name' => 'categories',
            'param' => $categoryName
        ]);
   }

    private function _retrievePosts(){

        $query = (new Query())
            ->setContentType(self::CT_POST)
            ->setLocale($this->locale)
            ->where('order', '-fields.date');
        return $this->client->getEntries($query);
    }

   private function _retrieveAbout(){

       $query = (new Query())
           ->setContentType(self::CT_ABOUT)
           ->setLocale($this->locale);
       return $this->client->getEntries($query);
   }

    private function _retrieveCategories(){

        $query = (new Query())
            ->setContentType(self::CT_CATEGORY)
            ->setLocale($this->locale);
        return $this->client->getEntries($query);
    }
}