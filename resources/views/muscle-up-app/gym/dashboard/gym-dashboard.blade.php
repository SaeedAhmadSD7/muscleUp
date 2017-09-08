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
                <li><a href="{{route('trainee-add')}}" title="Inbox"><span>Add Trainee</span></a></li>
                <li><a href="{{route('trainee-list')}}" title="Inbox"><span>View Trainee List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Instructors</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('instructor-add')}}" title="Inbox"><span>Add Instructor</span></a></li>
                <li><a href="{{route('show-instructor')}}" title="Inbox"><span>View Instructor List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Program</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('program')}}" title="Inbox"><span>Add Program</span></a></li>
                <li><a href="{{route('show-program')}}" title="Inbox"><span>View Program List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Phase</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('phase')}}" title="Inbox"><span>Add Phase</span></a></li>
                <li><a href="{{route('show-phase')}}" title="Inbox"><span>View Phase List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>WBS</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('wbs-add')}}" title="Inbox"><span>Add WBS</span></a></li>
                <li><a href="{{route('wbs-list')}}" title="Inbox"><span>View WBS List</span></a></li>
            </ul>
        </div>
    </li>
@stop
