<div id="about-me" class="white">
    <img class='profile-photo' src="{{ URL::secure_asset('images/carla.jpg')}}">
    <h1 class="about-me--heading center-align">{{$about->getTitle()}}</h1>
    <hr class="about-me--break">
    <div class="about-me--text">{{$about->getSummary()}}</div>
</div>