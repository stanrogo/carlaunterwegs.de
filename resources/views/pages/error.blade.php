@extends('layouts.simple')

<!-- implement own stylesheets for the page -->

@section('head')
    @parent
    <link href="{{ URL::asset('css/error.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>
@endsection

@section('main')
    <img src="{{asset('images/error.svg', \App::environment() == 'production')}}" class="cartoon-image"/>

    <div class="main-message js-main-message">
        <h1 class="js-">
            Oops. We couldn't find that place you're looking for!
        </h1>
        <a href="/">Click here</a> to go back to the homepage.
    </div>

    <script type="text/javascript">
        const container = document.querySelector('.js-main-message');
        let html = '';

        if('{{LaravelLocalization::getCurrentLocale()}}' === 'en-GB'){

            html = `
            <h1 class="error-call-out">Oops. We couldn't find that place you're looking for!</h1>
            <a href="/en-GB/">Click here</a> to go back to the homepage.
        `;
        }
        else{

            html = `
            <h1 class="error-call-out">Oops. Wir konnen das nicht finden!</h1>
            <a href="/de/">Kliken Sie hier</a> nach Hause zu gehen.
        `;
        }

        container.innerHTML = html;
    </script>
@endsection