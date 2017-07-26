@extends('layouts.backend-main')
@section('title')
    Trainee Dashboard
@stop

@section('user_type')
    Trainee
@stop

@section('sidebar_content')
    <li class="header"><span>Profile Box</span></li>
    <li class="menu-element">
        <a class="col-md-10 col-md-offset-2" href="{{route('trainee-profile')}}"><i class="glyph-icon icon-linecons-tv"></i><span>View Profile</span></a>
    </li>


@stop
