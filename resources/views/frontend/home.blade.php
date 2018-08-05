@extends('layouts.frontend')

@section('body_class', 'page-home')

@section('highlight')
    <div class="jumbotron">
        <div class="content-script">
           <!--  @include('frontend.partials.slider') -->
           <div class="search-script">
               <div><input type="text" placeholder="Ciudad de origen"></div>
               <div><input type="text" placeholder="Ciudad de destino"></div>
               <div><input type="text" placeholder="dd/mm/yy"></div>
               <div><input type="text" placeholder="dd/mm/yy"></div>
               <div><button>BUSCAR</button></div> 
           </div>
        </div>
    </div>
@endsection

@section('content')
<!-- 
    <div class="card mb-3">
        <div class="card-header">
            @lang('labels.frontend.titles.home')
        </div>
        <div class="card-body">
            <p>
                Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus suscipit tortor
                eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere
                cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet
                nisl
                tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                sem.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
        </div>
    </div>    
-->
    <div class="content-package">
        <div class="card-package">
            <div class="card-header">CANCUN 5D/ 4N</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
        <div class="card-package">
            <div class="card-header">CUZCO 4D/3N Vuelos+ Hotel +Tours</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
        <div class="card-package">
            <div class="card-header">CARTAGENA 4D/3N</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
        <div class="card-package">
            <div class="card-header">BUENOS AIRES ARGENTINA 4D/3N</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
        <div class="card-package">
            <div class="card-header">BAHAMAS DE LUJO 4D/3N</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
        <div class="card-package">
            <div class="card-header">Arequipa 4D/3N VUELO+ HOTEL+ TOURS</div>
            <div class="card-body">
                <span>Mínimo</span>
                <p><span>$</span>299</p>
                <span>Máximo $348</span>
            </div>
            <div class="card-footer">footer</div>
        </div>
    </div>  
    <!--  
    <div class="card mb-3">
        <div class="card-header"></i> Font Awesome</div>

        <div class="card-body">
            <i class="fa fa-home"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-pinterest"></i>
        </div>
    </div>
    -->
@endsection
