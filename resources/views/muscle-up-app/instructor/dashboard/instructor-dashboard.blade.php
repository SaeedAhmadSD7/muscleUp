@extends('layouts.backend-main')
@section('title')
    Instructor Dashboard
@stop

@section('dashboard_link')
    {{route('employeeDashboard')}}
@stop
@section('user_type')
    Instructor
@stop

@section('sidebar_content')
    <li class="header"><span>Members Area</span></li>
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
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Diet Program</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('diet-create')}}" title="Inbox"><span>Add Diet Program</span></a></li>
                <li><a href="{{route('diet-list')}}" title="Inbox"><span>View Diet Program List</span></a></li>
            </ul>
        </div>
    </li>
<li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Diet Allocation</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('diet-allocation')}}" title="Inbox"><span>Allocate Diet Plan</span></a></li>
                <li><a href="{{route('show-diet-allocation')}}" title="Inbox"><span>View List</span></a></li>
            </ul>
        </div>
    </li>

@stop

@section('content')
@stop
