@extends('muscle-up-app.layouts.frontend-main')

@section('title','Exercise')

@section('style-sheet')
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
@stop
@section('content')

    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="gym-req clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                    </div>

                    <div class="reg-form">
                        <form class="gym-reuqest-form" role="form" method="POST" action="{{route('save-request')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="exercise_list" name="exercise" multiple="multiple">
                                        <option></option>
                                        @foreach($exercises as $exercise)
                                            <option  value="{{$exercise['name']}}" >{{$exercise['name']}}</option>
                                            {{--<option  value="" >{{$exercise['name']}}</option>--}}
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/js/exercise.js')}}"> </script>
@stop