<section id="posts" class="row">

    @foreach ($posts as $post)

        <div class="col s12 module-spacing">
            <div class="posts--date flex-vertical-center black white-text">
                <i class="material-icons ">date_range</i>
                <span>
                    {{strftime("%A, %B %d, %Y", $post->getDate()->getTimestamp())}}
                </span>
            </div>
            <article class="card-wrapper">

                <h1 class="posts--title">{{$post->getTitle()}}</h1>


                <div class="flex-vertical-center posts--meta grey-text">

                    <i class="material-icons posts--meta--icon ">create</i>
                    <span class="posts--meta--text">Carla Demmering</span>

                    <i class="material-icons posts--meta--icon ">label</i>
                    @foreach ($post->getTags() as $tag)
                        <span>{{$tag->getName()}}@if ($loop->remaining > 0),&nbsp;@endif</span>
                    @endforeach

                </div>

                <div class="posts--content light">{!! \GrahamCampbell\Markdown\Facades\Markdown::convertToHtml($post->getContent()) !!}</div>
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