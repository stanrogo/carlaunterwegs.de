@extends('layouts.twocolumn')

<!-- implement own stylesheets for the page -->

@section('column1')
    @include('includes.posts')
@endsection

@section('column2')
    <div class="row">
        <div class="col s12">
            @include('includes.about')
        </div>
        <div class="col s12">
            @include('includes.categories')
        </div>
    </div>
@endsection