<div id="mobile-navigation">
            <button class="collapsed" data-target="#page-sidebar" data-toggle="collapse" id="nav-toggle"><span></span>
            </button>
        </div>
<div id="page-sidebar">
            <div class="logo-bg" id="header-logo">
                <a href="#" id="close-sidebar" title="Close sidebar"><i class="glyph-icon icon-outdent"></i></a>
            </div>

            <div class="scroll-sidebar">
                <ul id="sidebar-menu">
                    <li class="header"><span>Overview</span></li>
                    <li class="menu-element">
                        <a class="col-md-10 col-md-offset-2"><i class="glyph-icon icon-linecons-tv"></i><span> @yield('user_type') Dashboard</span></a>
                    </li>
                    @yield('sidebar_content')
                </ul>
            </div>
        </div>
