@extends('muscle-up-app.layouts.main')
@section('title','| Edit Deal')

@section('content')

        <div class="auto-container">
            <div class="row">
                {!! Form::model($deal, ['route' => ['deals.update', $deal->id],'method'=>'PUT']) !!}
                <div class="col-md-8">
                      <h1> Edit Deals</h1>
                    {{ Form::label('dealType', 'DealType:') }}
                    {{ Form::text('dealType', null, ["class" => 'form-control input-lg']) }}

                    {{ Form::label('duration', "Duration:", ['class' => 'form-spacing-top']) }}
                    {{ Form::text('duration', null, ['class' => 'form-control']) }}



                    {{--<H1> {{$deal->dealType}}</H1>--}}
                    {{--<P class="lead">{{$deal->duration}}</P>--}}
                </div>
                <div class="col-md-8">
                    <div class="well">
                        <div class="row">
                            <div class="col-sm-6">
                                {!! Html::linkRoute('deals.show', 'Cancel', array($deal->id), array('class' => 'btn btn-danger btn-block')) !!}
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