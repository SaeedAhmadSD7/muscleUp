@extends('muscle-up-app.layouts.frontend-main')

@section('title','Show Exercise')

@section('style-sheet')
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>See Exercise</h2>
                        {{--<h3><span class="space"></span> Please fill in all the information and then click Show Instructor.</h3>--}}
                    </div>
                    {{--@if(Session::has('Success'))--}}
                    {{--<div class="alert alert-success" role="alert">--}}
                    {{--<strong>Success:</strong>{{Session::get('Success')}}--}}
                    {{--</div>--}}
                    {{--@endif--}}
                    {{--@if($errors->any())--}}
                    {{--<div class="alert alert-danger">--}}
                    {{--@foreach($errors->all() as $error)--}}
                    {{--<p>{{ $error }}</p>--}}
                    {{--@endforeach--}}
                    {{--</div>--}}
                    {{--@endif--}}
                    <div class="reg-form">

                        <div class="fields clearfix">

                            <table class="table table-hover text-center">
                                <tbody>
                                @foreach($exercise as $exercise)
                                    <tr id="{{$exercise->id}}">
                                        {{--<td><input class="custom-checkbox" id="mail-checkbox-1" type="checkbox"></td>--}}
                                        <td><i class="glyph-icon icon-star"></i></td>
                                        <td class="email-title">{{$exercise->id}}</td>
                                        <td class="email-body">{{$exercise->name}}</td>
                                        <td><i class="glyph-icon icon-paperclip"></i></td>
                                        <td>{{$exercise->updated_at}}</td>
                                        <td><a type="submit" href="{{URL::to('update-exercise',array('id'=>$exercise->id))}}"><span class="fa fa-angle-right"></span>Edit</a></td>
                                        <td><a type="submit" href="{{URL::to('delete-exercise',array('id'=>$exercise->id))}}"><span class="fa fa-angle-right"></span>Delete</a></td>

                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/t-reg.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>

@stop

