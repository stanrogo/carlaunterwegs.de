<?php

use DaveJamesMiller\Breadcrumbs\Generator;

Breadcrumbs::register('home', function(Generator $breadcrumbs){

    $breadcrumbs->push('Home', route('home'));
});

Breadcrumbs::register('categories', function(Generator $breadcrumbs, $category)
{
    $breadcrumbs->parent('home');
    $breadcrumbs->push($category, route('categories', $category));
});