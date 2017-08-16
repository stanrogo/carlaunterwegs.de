<section id="posts-container" class="row">

    @foreach ($posts as $post)

        <div class="col s12 post-block">
            <div class="date-container black">
                <i class="material-icons white-text">date_range</i>
                <span class="date-container--date white-text">{{strftime("%A, %B %d, %Y", $post->getDate()->getTimestamp())}}</span>
            </div>
            <article class="post-block--article white">

                <h1 class="post-block--title">{{$post->getTitle()}}</h1>


                <div class="flex-vertical-center post-block--meta">

                    <i class="material-icons post-block--tag-icon grey-text">create</i>
                    <span class="post-block--author-name">Carla Demmering</span>

                    <i class="material-icons post-block--tag-icon grey-text">label</i>
                    @foreach ($post->getTags() as $tag)
                        <span class="post-block--tag-text">{{$tag->getName()}}@if ($loop->remaining > 0),@endif</span>
                    @endforeach

                </div>

                <div class="post-block--content light">{!! \GrahamCampbell\Markdown\Facades\Markdown::convertToHtml($post->getContent()) !!}</div>
            </article>

            <div class="fb-comments"
                 data-href="https://developers.facebook.com/docs/plugins/comments#{{str_replace(' ', '-', $post->getTitle())}}"
                 data-numposts="5"
                 data-width="100%"
            >
            </div>
        </div>

    @endforeach
</section>