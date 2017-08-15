<section id="posts-container" class="row">

    @foreach ($posts as $post)

        <div class="col s12 post-block">
            <div class="date-container black">
                <i class="material-icons white-text">date_range</i>
                <span class="date-container--date white-text">{{$post->getDate()->format('Y-m-d')}}</span>
            </div>
            <article class="post-block--article white">

                <h1 class="post-block--title">{{$post->getTitle()}}</h1>

                <hr/>

                <div class="flex-vertical-center">
                    <span class="post-block--tagged-in">Tagged in: </span>

                    @foreach ($post->getTags() as $tag)

                    <span class="flex-vertical-center">
                            <i class="material-icons post-block--tag-icon">label</i>
                            <span class="post-block--tag-text">{{$tag}}</span>
                        </span>

                    @endforeach
                </div>

                <hr/>

                <div class="post-block--content light">{!! \GrahamCampbell\Markdown\Facades\Markdown::convertToHtml($post->getContent()) !!}</div>
            </article>

        </div>

    @endforeach
</section>