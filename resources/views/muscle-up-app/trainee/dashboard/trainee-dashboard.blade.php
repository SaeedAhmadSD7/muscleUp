@extends('layouts.backend-main')
@section('title')
    Trainee Dashboard
@stop

@section('user_type')
    Trainee
@stop

@section('dashboard_link')
    {{route('traineeDashboard')}}
@stop


