<?php

Breadcrumbs::register('home', function($breadcrumbs){

    $breadcrumbs->push('Home', route('home'));
});

// Home > Blog > [Category]
Breadcrumbs::register('categories', function($breadcrumbs, $category)
{
    $breadcrumbs->parent('home');
    $breadcrumbs->push($category, route('categories', $category));
});