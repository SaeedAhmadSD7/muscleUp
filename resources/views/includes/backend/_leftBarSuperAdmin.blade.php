<li class="menu-element">
    <a href="{{route('adminDashboard')}}" title="Super Admin Dashboard"><i class="glyph-icon icon-linecons-tv"></i><span>Admin Dashboard</span></a>
</li>
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
                <a href="{{route('grm.create')}}" title="Create a New Company"><span>Add New</span></a>
            </li>
            <li>
                <a href="{{route('grm.index')}}" title="Create a New Company"><span>List of Gyms</span></a>
            </li>
        </ul>
    </div>
</li>
<li class="menu-element">
    <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Branches</span></a>
    <div class="sidebar-submenu">
        <ul>
            <li>
                <a href="{{route('branch.create')}}" title="Create a New Branch"><span>Add New</span></a>
            </li>
            <li>
                <a href="{{route('branch.index')}}" title="List of Branches"><span>List of Branches</span></a>
            </li>
        </ul>
    </div>
</li>