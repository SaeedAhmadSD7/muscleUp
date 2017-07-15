@extends('muscle-up-app.layouts.frontend-main')
@section('title','| view Deal')

@section('content')

        <div class="auto-container">
          <div class="row">
           <div class="col-md-8">
               <h1>Deal Type:</h1>
               <h3>{{$deal->dealType}}</h3>

               <h1>Deal Duration:</h1>
               <h3>{{$deal->duration}}</h3>
             </div>
              <div class="col-md-4">
                  <div class="well">
                      <dl class="dl-horizontal">
                          <dt>Created At:</dt>
                          <dd>{{ date('M j, Y h:ia', strtotime($deal->created_at)) }}</dd>
                      </dl>

                      <dl class="dl-horizontal">
                          <dt>Last Updated:</dt>
                          <dd>{{ date('M j, Y h:ia', strtotime($deal->updated_at)) }}</dd>
                      </dl>
                      <hr>
                      <div class="row">
                          <div class="col-sm-6">
                              {!! Html::linkRoute('deals.edit', 'Edit', array($deal->id), array('class' => 'btn btn-primary btn-block')) !!}
                          </div>
                          <div class="col-sm-6">
                              {!! Form::open(['route'=>['deals.destroy',$deal->id],'method'=>'DELETE']) !!}

                               {!! Form::submit('Delete',['class'=>'btn btn-danger btn-block']) !!}

                              {!! Form::close() !!}

                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>








   @endsection