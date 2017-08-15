<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Carla Unterwegs</title>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-68184328-5', 'auto');
        ga('send', 'pageview');

    </script>

    <!---------------- CSS ------------------>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="{{ URL::asset('css/materialize.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="{{ URL::asset('css/app.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="{{ URL::asset('css/error.css')}}" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>

<div id="app" class="language-{{LaravelLocalization::getCurrentLocale()}}">
    <!----------------- Header ------------------>

    <header id="header">

        <div class="container">
            <nav class="nav-wrapper transparent z-depth-0">
                <a href="#" class="brand-logo left">
                    <i class="material-icons black-text">dashboard</i>
                    <span class="light black-text">Carla Unterwegs</span>
                </a>

                <ul class="right hide-on-med-and-down">
                    <li class="btn-english"><a href="/en-GB/error/" class="light js-btn-language black-text" data-locale="english">English</a></li>
                    <li class="btn-german"><a href="/de/error/" class="light js-btn-language black-text" data-locale="german">Deutsch</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!----------------- Main Content ------------------>

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

    <!----------------- Page Footer ------------------>

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



</body>
</html>