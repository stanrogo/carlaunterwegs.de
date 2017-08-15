<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Carla Unterwegs</title>

        <!------- Start GA Tracking code --------->

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-68184328-5', 'auto');
            ga('send', 'pageview');

        </script>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="{{ URL::asset('css/materialize.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="{{ URL::asset('css/app.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>

        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-9066939875282995",
                enable_page_level_ads: true
            });
        </script>
    </head>
    <body>
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                var locale = "{{LaravelLocalization::getCurrentLocale()}}" === 'de' ? 'de_DE' : 'en_GB';
                js.src = `//connect.facebook.net/${locale}/sdk.js#xfbml=1&version=v2.10&appId=299472643852520`;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

        <div id="app" class="language-{{LaravelLocalization::getCurrentLocale()}}">
            @include('header')

            <main class="container container--main">
                <div class="row">

                    <div class="col s12">
                        @include('breadcrumbs')
                    </div>

                    <div class="col s12 l9">

                        @include('posts')

                    </div>
                    <div class="col s12 l3">

                        <div class="row">

                            <div class="col s12">

                                @include('about')

                            </div>

                            <div class="col s12">
                                <div class="section">

                                    @include('categories')

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <footer class="page-footer white">
                <div class="container">
                    <div class="row">
                        <div class="col s12 page-footer-column">
                            <i class="material-icons black-text">dashboard</i>
                            <span class="black-text">
                        Made by&nbsp;<a class="brown-text text-lighten-3" href="https://stanrogo.com" target="_blank">stanrogo</a>
                    </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <script src="{{ URL::asset('js/app.js')}}" type="application/javascript"></script>
    </body>
</html>
