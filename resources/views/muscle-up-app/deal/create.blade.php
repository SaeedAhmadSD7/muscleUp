@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Create new Deal')
@section('content')
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Create New Deal</h1>
            <hr>
            <form action="{{ route('save-deal') }}" method="POST">
                {{ csrf_field() }}
            {!! Form::label('dealType', 'DealType:') !!}
            {!! Form ::text ('dealType',null ,array('class' => 'form-control')) !!}

            {!! Form::label('duration', 'Duration:') !!}
            {!! Form ::text ('duration',null ,array('class' => 'form-control')) !!}

            {!! Form::submit('submit Deal' , array('class' => 'btn btn-success btn-lg ', 'style' =>'margin-top:20px')) !!}

            </form>

        </div>
    </div>
@endsection