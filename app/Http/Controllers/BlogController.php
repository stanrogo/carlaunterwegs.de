<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class BlogController extends Controller{

    /**
     * @var DeliveryClient
     */
    private $client;
    private $locale;

    public function __construct(DeliveryClient $client){

        $this->client = $client;
        $this->locale = LaravelLocalization::getCurrentLocale();
        setlocale(LC_TIME, $this->locale);
    }

    private static function _sortByDate($a, $b){

        if($a->getDate()->getTimestamp() === $b->getDate()->getTimestamp()) {

            return 0;
        }
        return ($a->getDate()->getTimestamp() > $b->getDate()->getTimestamp()) ? -1 : 1;
    }

    public function showPost(){

        $query = (new Query())->setContentType('post')->setLocale($this->locale);
        $posts = $this->client->getEntries($query);

        if(!count($posts)){

            abort(404);
        }

        $items = $posts->getItems();

        uasort($items, Array($this, '_sortByDate'));

        return $items;
    }

    public function showAbout(){

        $query = (new Query())->setContentType('about')->setLocale($this->locale);
        $about = $this->client->getEntries($query);

        if(!count($about)){

            abort(404);
        }

        return $about->getItems()[0];
    }
}