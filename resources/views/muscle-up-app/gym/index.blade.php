@extends('muscle-up-app.layouts.backend-main')
@section('title')
    Gym Dashboard
@stop

@section('user_type')
    Admin
@stop

@section('sidebar_content')
    <li class="header"><span>Members Area</span></li>
    <li class="menu-element">
        <a class="col-md-10 col-md-offset-2" href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Trainees</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('trainee-add')}}" title="Inbox"><span>Add Trainee</span></a>
                </li>
                <li>
                    <a href="{{route('trainee-list')}}" title="Inbox"><span>View Trainee List</span></a>
                </li>
            </ul>
        </div>
    </li>
@stop
