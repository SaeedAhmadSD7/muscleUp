@extends('layouts.backend-main')
@section('title')
    Trainee Dashboard
@stop

@section('user-name')
    {{\Auth::user()->first_name}}
@stop


@section('user_type')
    Trainee
@stop

@section('dashboard_link')
    {{route('trainee-dashboard')}}
@stop

@section('sidebar_content')
    <li class="header"><span>Memebers Area</span></li>
    <li class="menu-element"><a href="{{route('dietprogram-view')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Diet Program</span></a></li>
    <li class="menu-element"><a href="{{route('workoutprogram-view')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Workout Program</span></a></li>
    <li class="menu-element"><a href="{{route('trainee-activity')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Progress</span></a></li>
@stop
