@if(!empty($posts))
    <div class="container">
        <div class="row">
                <div class="col-2">
                    <h3>Filtro</h3>
                    <ul>
                        <li>Hola</li>
                        <li>Hola</li>
                        <li>Hola</li>
                    </ul>
                </div>
                <div class="col">
                    @foreach($posts->chunk(3) as $chunk)
                        <div class="row">
                            @foreach($chunk as $post)
                                <div class="col-md-4 mb-4">
                                    <article class="article">
                                        <a href="{{ route('blog.show', ['post' => $post->slug]) }}" class="article__cover">
                                            <img src="{{ image_template_url('large', $post->featured_image_path) }}" alt="{{ $post->title }}">
                                        </a>
                                        <div class="article__infos">
                                            <h5 class="article__title">
                                                <a href="{{ route('blog.show', ['post' => $post->slug]) }}">{{ $post->title }}</a>
                                            </h5>
                                            <p class="article__published">
                                                @include('frontend.blog.partials.publication-infos')
                                            </p>
                                            <p class="article__summary">
                                                {{ $post->summary }}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </div>
        </div>
    </div>
@endif

<div class="row justify-content-center">
    {{ $posts->links() }}
</div>
