@extends('layouts.frontend-main')
@section('title','| Update Event')

@section('content')
    <div class="container-fluid " style="padding-top: 50px; padding-bottom: 50px;">

        <form action="{{ route('update-event', $event->id)}}" method="POST">
            {{ csrf_field() }}

            <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label for="name">Event Name: </label>
            </div>
            <div class="col-sm-6">
                <input type="text" value="{{$event->name}}" name="name">
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label for="name">Event Type: </label>
            </div>
            <div class="col-sm-6">
                <input type="text" value="{{$event->type}}" name="type">
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label for="name">Start Date: </label>
            </div>
            <div class="col-sm-6">
                <input type="date" value="{{$event->start_date}}" name="start_date">
            </div>
        </div>

        <div  class="row col-sm-12" >
            <div class="col-sm-4">
                <label for="name">End Date: </label>
            </div>
            <div class="col-sm-6">
                <input type="date" value="{{$event->end_date}}" name="end_date">
            </div>
        </div>
            <button type="submit">Submit</button>
        </form>

    </div>
@endsection