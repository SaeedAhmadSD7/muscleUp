@extends('muscle-up-app.layouts.frontend-main')
@section('title','| Edit TrainPackage')

@section('content')

    <div class="auto-container">
        <div class="row">
            {!! Form::model($trainpackage, ['route' => ['update-trpackage', $trainpackage->id],'method'=>'POST']) !!}
            <div class="col-md-8" style="margin-top: 20px">
                <h1> Edit Train Packages</h1>
                {{ Form::label('fitness_plan', 'FitnessPlan:') }}
                {{ Form::text('fitness_plan', null, ["class" => 'form-control input-lg']) }}

                {{ Form::label('personal_training', "PersonalTraining:", ['class' => 'form-spacing-top']) }}
                {{ Form::text('personal_training', null, ['class' => 'form-control']) }}

                {{ Form::label('Duration', "Duration:", ['class' => 'form-spacing-top']) }}
                {{ Form::text('Duration', null, ['class' => 'form-control']) }}


            </div>

               <div class="col-md-8">
                   <div class="well">
                      <div class="row">
                        {{--<div class="col-sm-6">--}}
                            {{--{!! Html::linkRoute('edit.show', 'Cancel', array($trainpackage->id), array('class' => 'btn btn-danger btn-block')) !!}--}}
                        {{--</div>--}}
                        <div class="col-sm-6 col-lg-offset-3">
                            {{ Form::submit('Updare',['class'=>'btn btn-success btn-block']) }}
                        </div>
                    </div>

                  </div>
              </div>
              {!! Form::close() !!}
        </div>
    </div>

@endsection