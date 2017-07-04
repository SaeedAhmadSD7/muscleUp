@extends('muscle-up-app.layouts.main')

@section('title','Showtrainpakage')

@section('content')

    <section class="plans-pricing no-padd-top" style="margin-top: 20px">
        <div class="auto-container">
            <div class="sec-title">
                <h3>PLANS AND PRICINGS</h3>
                <h2>CHECK OUT OUR PLANS</h2>
            </div>
            <div class="row clearfix">

                <div class="col-md-3 col-sm-6 col-xs-12 col-lg-offset-5">
                    <div class="price-table wow zoomIn" data-wow-delay="0s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="title">
                            <h3>{{ $trainpackage->fitness_plan }}</h3>
                            <div class="curve"></div>
                        </div>
                        <div class="table-inner">
                            <div class="price">
                                <span class="big-text">{{ $trainpackage->personal_training }}<sup>RS</sup></span>
                                <br>
                                <span class="duration">/{{ $trainpackage->Duration }}</span>
                            </div>

                            <ul>

                                {{--<li>1x fitness plan</li>--}}
                                {{--<li>2 days personal training</li>--}}
                                {{--<li>5 weeks gym pass</li>--}}
                                {{--<li>1 fitness course</li>--}}
                                {{--<li>unlimited gym entrance</li>--}}
                            </ul>

                            <a href="{{ route('delete.package', $trainpackage->id ) }}" class="order-now"><span class="fa fa-angle-right"></span> Delete</a>
                        </div>
                        {{--<div class="row">--}}
                            {{--<div class="col-sm-6">--}}
                                {{--{!! Html::linkRoute('trainpackage.edit', 'Edit', array($trainpackage->id), array('class' => 'btn btn-primary btn-block')) !!}--}}
                            {{--</div>--}}
                            {{--{!! Form::open(['route'=>['trainpackage.destroy', $trainpackage->id],'method'=>'DELETE'])!!}--}}

                            {{--<div class="col-sm-6">--}}
                                {{--{!! Form::submit('Delete',['class'=>'btn btn-danger btn-block']) !!}--}}

                                {{--{!! Form::close() !!}--}}

                            {{--</div>--}}
                        {{--</div>--}}

                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection