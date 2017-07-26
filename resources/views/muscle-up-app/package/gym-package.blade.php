@extends('layouts.frontend-main')
@section('title','|Gym Package')
@section('content')


    <section class="plans-pricing no-padd-top">
        <div class="auto-container">
            <div class="sec-title">
                <h1>CHECK OUT OUR PLANS</h1>
                <h3>PLANS AND PRICINGS</h3>
            </div>
            <div class="row clearfix">

                @foreach( $packages = App\Utils\Globals\AppGlobal::gymPackages() as $package)
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="price-table wow zoomIn" data-wow-delay="0s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="title">
                            <h3>{{$package->package_name}}</h3>
                            <div class="curve"></div>
                        </div>
                        <div class="table-inner">
                            <div class="price">
                                <span class="big-text">{{$package->package_price}}<sup>Rs</sup></span>
                                <br>
                                <span class="duration">/month</span>
                            </div>

                            <ul>
                                <li>{{$package->package_type}}</li>
                                {{--<li>2 days personal training</li>--}}
                                {{--<li>5 weeks gym pass</li>--}}
                                {{--<li>1 fitness course</li>--}}
                                {{--<li>unlimited gym entrance</li>--}}
                            </ul>

                            <a href="#" class="order-now"><span class="fa fa-angle-right"></span> Order Now</a>
                        </div>
                    </div>
                </div>
                @endforeach

            </div>
        </div>
    </section>


@endsection