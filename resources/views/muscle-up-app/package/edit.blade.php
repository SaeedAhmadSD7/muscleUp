@extends('layouts.frontend-main')
@section('title','| Edit Package')

@section('content')

    <div class="auto-container">
        <div class="row">
            {!! Form::model($package, ['route' => ['package.update', $package->id],'method'=>'PUT']) !!}
            <div class="col-md-8">
                <h1> Edit Packages</h1>
                {{ Form::label('package_name', 'packageName:') }}
                {{ Form::text('package_name', null, ["class" => 'form-control input-lg']) }}

                {{ Form::label('package_type', "PackageType:", ['class' => 'form-spacing-top']) }}
                {{ Form::text('package_type', null, ['class' => 'form-control']) }}

                {{ Form::label('package_price', "PackagePrice:", ['class' => 'form-spacing-top']) }}
                {{ Form::text('package_price', null, ['class' => 'form-control']) }}



                {{--<H1> {{$deal->dealType}}</H1>--}}
                {{--<P class="lead">{{$deal->duration}}</P>--}}
            </div>
            <div class="col-md-8">
                <div class="well">
                    <div class="row">
                        <div class="col-sm-6">
                            {!! Html::linkRoute('package.show', 'Cancel', array($package->id), array('class' => 'btn btn-danger btn-block')) !!}
                        </div>
                        <div class="col-sm-6">
                            {{ Form::submit('save changes',['class'=>'btn btn-success btn-block']) }}
                        </div>
                    </div>

                </div>
            </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection