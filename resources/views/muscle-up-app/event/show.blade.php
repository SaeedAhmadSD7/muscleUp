@extends('muscle-up-app.layouts.frontend-main')
@section('title','| view event')

@section('content')
    <div class="container-fluid " style="padding-top: 50px; padding-bottom: 50px;">
        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label>Event Name: </label>
            </div>
            <div class="col-sm-6">
                {{$event->name}}
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label>Event Type: </label>
            </div>
            <div class="col-sm-6">
                {{$event->type}}
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label>Event Start Date: </label>
            </div>
            <div class="col-sm-6">
                {{$event->start_date}}
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label>Event End Name: </label>
            </div>
            <div class="col-sm-6">
                {{$event->end_date}}
            </div>
        </div>

        {{--<div  class="row col-sm-12" >--}}
            {{--<div class="col-sm-2 col-sm-offset-2">--}}
                {{--<a class="btn btn-primary" href="{{route()}}" >Update</a>--}}
            {{--</div>--}}
            {{--<div class="col-sm-2">--}}
                {{--<a class="btn btn-danger" href="{{route()}}" >Delete</a>--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
@endsection