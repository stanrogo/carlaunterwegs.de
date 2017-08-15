<div id="categories" class="white">


    <h1 class="categories--heading">Categories</h1>
    <hr class="categories--break">

    <ul>
        @foreach($categories as $category)
            <li><a href="/categories/{{$category}}" class="categories-category-link">{{$category}}</a></li>
        @endforeach
    </ul>
</div>