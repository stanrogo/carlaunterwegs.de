<div id="fb-root"></div>
<script>
    (function(d, s, id) {

        window.setTimeout(function(){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            var locale = "{{LaravelLocalization::getCurrentLocale()}}" === 'de' ? 'de_DE' : 'en_GB';
            js.src = `//connect.facebook.net/${locale}/sdk.js#xfbml=1&version=v2.10&appId=299472643852520`;
            fjs.parentNode.insertBefore(js, fjs);
        }, 2000);
    }(document, 'script', 'facebook-jssdk'));
</script>