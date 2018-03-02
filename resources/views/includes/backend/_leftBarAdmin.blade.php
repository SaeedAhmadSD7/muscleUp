<li class="menu-element">
    <a href="{{route('gymDashboard')}}" title="Admin Dashboard"><i class="glyph-icon icon-linecons-tv"></i><span>Admin Dashboard</span></a>
</li>
<li class="header"><span>Members Area</span></li>
<li class="menu-element">
    <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Trainees</span></a>
    <div class="sidebar-submenu">
        <ul>
            <li><a href="{{route('trainee-create')}}" title="Inbox"><span>Add Trainee</span></a></li>
            <li><a href="{{route('trainee-list')}}" title="Inbox"><span>View Trainee List</span></a></li>
        </ul>
    </div>
</li>
<li class="menu-element">
    <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Instructors</span></a>
    <div class="sidebar-submenu">
        <ul>
            <li><a href="{{route('instructor-add')}}" title="Inbox"><span>Add Instructor</span></a></li>
            <li><a href="{{route('instructor-show')}}" title="Inbox"><span>View Instructor List</span></a></li>
        </ul>
    </div>
</li>
{{--<li class="menu-element">--}}
    {{--<a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Allocate Trainee</span></a>--}}
    {{--<div class="sidebar-submenu">--}}
        {{--<ul>--}}
            {{--<li><a href="{{route('ta')}}" title="Inbox"><span>Allocation</span></a></li>--}}
            {{--<li><a href="{{route('show-trainee-allocation')}}" title="Inbox"><span>View Allocation List</span></a></li>--}}
        {{--</ul>--}}
    {{--</div>--}}
{{--</li>--}}
<li class="menu-element">
    <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Branches</span></a>
    <div class="sidebar-submenu">
        <ul>
            <li>
                {{--                    <a href="{{route('branch')}}" title="Inbox"><span>Make branch</span></a>--}}
                <a href="{{route('branch.create')}}" title="Create a New Branch"><span>Create</span></a>
            </li>
            <li>
                <a href="{{route('branch.index')}}" title="List of Branches"><span>List of Branches</span></a>
            </li>
            <li>
                <a href="{{route('branch.edit',0)}}" title="Update my Branch Info"><span>My Branch</span></a>
            </li>
        </ul>
    </div>
</li>