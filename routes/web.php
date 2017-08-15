<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::group([
    'prefix' => LaravelLocalization::setLocale(),
    'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]
], function(){

    Route::get('/', function(\App\Http\Controllers\BlogController $controller){
        return view(
            'base',
            [
                'posts' => $controller->showPost(),
                'about' => $controller->showAbout(),
                'categories' => $controller->showCategories(),
                'name' => 'home'
            ]
        );
    })->name('home');

    Route::get('/categories/{category}', function($category, \App\Http\Controllers\BlogController $controller){

        return view(
            'base',
            [
                'posts' => $controller->showPost($category),
                'about' => $controller->showAbout(),
                'categories' => $controller->showCategories(),
                'name' => 'categories',
                'param' => $category
            ]
        );
    })->name('categories');
});
