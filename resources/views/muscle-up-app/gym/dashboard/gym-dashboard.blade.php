@extends('layouts.backend-main')

@section('title')
    Gym Dashboard
@stop

@section('user_type')
    Gym
@stop

@section('sidebar_content')
    <li class="header"><span>Members Area</span></li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Trainees</span></a>
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
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Instructors</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('instructor-add')}}" title="Inbox"><span>Add Instructor</span></a>
                </li>
                <li>
                    <a href="{{route('show-instructor')}}" title="Inbox"><span>View Instructor List</span></a>
                </li>
            </ul>
        </div>
    </li>
@stop
