<div id="about-me" class="white">
    <img class='profile-photo' src="{{ asset('images/carla.jpg', \App::environment() == 'production')}}">
    <h1 class="about-me--heading center-align">{{$about->getTitle()}}</h1>
    <hr class="about-me--break">
    <div class="about-me--text">{{$about->getSummary()}}</div>
</div>