<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

class BlogController extends Controller{

    /**
     * @var DeliveryClient
     */
    private $client;

    public function __construct(DeliveryClient $client){

        $this->client = $client;
    }

    public function showPost(){

        $query = (new Query())->setContentType('post');
        $posts = $this->client->getEntries($query);

        if(!count($posts)){

            abort(404);
        }

        return $posts->getItems();
    }

    public function showAbout(){

        $about = $this->client->getEntry('yEhFzr4taKciuWY2UUsk0');

        return $about;
    }
}