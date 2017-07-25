@extends('layouts.frontend-main')
@section('title','Create new Event')
@section('content')
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Create New Deal</h1>
            <hr>
            <form action="{{route('save-event')}}" method="POST">
                {{ csrf_field() }}

                <input type="text" class="form-group" placeholder="Please enter Event Name..." name="name">
                <input type="text" class="form-group" placeholder="Please enter Event Type..." name="type">
                <input type="date" class="form-group" placeholder="Please enter Event Start Date..." name="start_date">
                <input type="date" class="form-group" placeholder="Please enter Event End Date..." name="end_date">
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
@endsection