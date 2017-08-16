<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @include('includes.head')
        @yield('head')
    </head>
    <body>

        <div id="app" class="language-{{LaravelLocalization::getCurrentLocale()}}">

            @yield('template')

        </div>

        <script src="{{ URL::asset('js/app.js')}}" type="application/javascript"></script>
    </body>
</html>
