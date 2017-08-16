<div id="categories" class="card-wrapper sidebar-module">

    <h1>Categories</h1>
    <hr>
    <ul>
        @foreach($categories as $category)
            <li>
                <a href="/categories/{{$category->getName()}}">
                    {{$category->getName()}}
                </a>
            </li>
        @endforeach
    </ul>
</div>