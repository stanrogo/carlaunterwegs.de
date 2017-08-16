@extends('layouts.base')

@section('template')

    @include('includes.facebook')

    @include('includes.header')

    @yield('main')

    <main class="container container--main">
        <div class="row">
            <div class="col s12">
                @include('includes.breadcrumbs')
            </div>
            <div class="col s12 l9">
                @yield('column1')
            </div>
            <div class="col s12 l3">
                @yield('column2')
            </div>
        </div>
    </main>

    @include('includes.footer')

@endsection