<header id="header" class="js-header">

    <div class="image-wrapper js-header--cover">
        <img src="{{ asset('images/background1.jpg', \App::environment() == 'production')}}">
    </div>

    <div class="container header--text-container flex-vertical-center js-container-header">
        <div class="row center">
            <h5 class="header--text col s12 light white-text">
                Travels, experiences, thoughts and more...
            </h5>
        </div>
    </div>

    <div class="container js-header--nav-bar--container">
        <div class="row nav-row">
            <div class="col s12">
                <nav class="transparent z-depth-0">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo left">
                            <i class="material-icons">dashboard</i>
                            <span class="light">Carla Unterwegs</span>
                        </a>

                        <ul class="right hide-on-med-and-down">
                            <li class="btn-english">
                                <a href="/en-GB/"
                                   class="light js-btn-language"
                                >
                                    English
                                </a>
                            </li>
                            <li class="btn-german">
                                <a href="/de/"
                                   class="light js-btn-language"
                                >
                                    Deutsch
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    </div>
</header>
