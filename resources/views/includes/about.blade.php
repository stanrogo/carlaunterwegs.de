<div id="about-me" class="card-wrapper sidebar-module">
    <img class='about-me--photo'
         src="{{ asset('images/carla.jpg', \App::environment() == 'production')}}"
    >
    <h1 class="center-align">{{$about->getTitle()}}</h1>
    <hr class="about-me--break">
    <p>{{$about->getSummary()}}</p>
</div>