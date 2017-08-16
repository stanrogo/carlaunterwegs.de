<div id="categories" class="card-wrapper sidebar-module module-spacing">

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