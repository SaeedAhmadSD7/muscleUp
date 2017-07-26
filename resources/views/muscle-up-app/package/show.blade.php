@extends('layouts.frontend-main')
@section('title','| view package')

@section('content')

    <div class="auto-container">
        <div class="row">
            <div class="col-md-8">
                <h1>Package Name:</h1>
                <h3>{{$package->package_name}}</h3>

                <h1>Package Type:</h1>
                <h3>{{$package->package_type}}</h3>

                <h1>Package Price:</h1>
                <h3>{{$package->package_price}}</h3>
            </div>
            <div class="col-md-4">
                <div class="well">
                    <dl class="dl-horizontal">
                        <dt>Created At:</dt>
                        <dd>{{ date('M j, Y h:ia', strtotime($package->created_at)) }}</dd>
                    </dl>

                    <dl class="dl-horizontal">
                        <dt>Last Updated:</dt>
                        <dd>{{ date('M j, Y h:ia', strtotime($package->updated_at)) }}</dd>
                    </dl>
                    <hr>
                    <div class="row">
                        <div class="col-sm-6">
                            {!! Html::linkRoute('package.edit', 'Edit', array($package->id), array('class' => 'btn btn-primary btn-block')) !!}
                        </div>
                           {!! Form::open(['route'=>['package.destroy',$package->id],'method'=>'DELETE']) !!}

                            <div class="col-sm-6">
                            {!! Form::submit('Delete',['class'=>'btn btn-danger btn-block']) !!}

                            {!! Form::close() !!}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>








@endsection