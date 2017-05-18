@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Create new package')
@section('content')
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Create New Gym Packages:</h1>
            <hr>
            <form action="{{ route('package.store') }}" method="POST">
                {{ csrf_field() }}
                {!! Form::label('package_name', 'PackageName:') !!}
                {!! Form ::text ('package_name',null ,array('class' => 'form-control')) !!}

                {!! Form::label('package_type', 'PackageType:') !!}
                {!! Form ::text ('package_type',null ,array('class' => 'form-control')) !!}

                {!! Form::submit('submit package' , array('class' => 'btn btn-success btn-lg ', 'style' =>'margin-top:20px')) !!}

            </form>

        </div>
    </div>
@endsection