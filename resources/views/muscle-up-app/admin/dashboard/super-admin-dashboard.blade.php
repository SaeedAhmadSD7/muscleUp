@extends('layouts.backend-main')
@section('title')
    Admin Dashboard
@stop

@section('user-name')
    {{\Auth::user()->first_name}}
@stop

@section('dashboard_link')
    {{route('adminDashboard')}}
@stop
@section('user_type')
    Admin
@stop

@section('dashboard_link')
    {{route('adminDashboard')}}
@stop

@section('sidebar_content')
    <li class="header"><span>Request Box</span></li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Requests</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('Admin-Inbox')}}" title="Inbox"><span>Inbox</span></a>
                </li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Gyms</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    {{--<a href="{{route('company.create')}}" title="Create a New Company"><span>Create</span></a>--}}
                </li>
                <li>
                    {{--<a href="{{route('company.index')}}" title="Create a New Company"><span>List of Companies</span></a>--}}
                </li>
            </ul>
        </div>
    </li>

    {{-- Trainees --}}
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Trainees</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('trainee-create')}}" title="Create a New Company"><span> Add New</span></a>
                </li>
                <li>
                    {{--<a href="{{route('company.index')}}" title="Create a New Company"><span>List of Trainees</span></a>--}}
                </li>
            </ul>
        </div>
    </li>

@stop
