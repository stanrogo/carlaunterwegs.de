<div id="categories" class="white">


    <h1 class="categories--heading">Categories</h1>
    <hr class="categories--break">

    <ul>
        @foreach($categories as $category)
            <li><a href="/categories/{{$category->getName()}}" class="categories-category-link">{{$category->getName()}}</a></li>
        @endforeach
    </ul>
</div>