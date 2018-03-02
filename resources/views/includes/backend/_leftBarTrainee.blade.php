<li class="menu-element">
    <a href="{{route('traineeDashboard')}}" title="Trainee Dashboard"><i class="glyph-icon icon-linecons-tv"></i><span>Trainee Dashboard</span></a>
</li>
{!! $id = get_trainee_id() !!}

<li class="header"><span>Members Area</span></li>
<li class="menu-element"><a href="{{route('trainee-personal-detail-edit',$id)}}"><i class="glyph-icon icon-linecons-tv"></i><span>Edit</span></a></li>
<li class="menu-element"><a href="{{route('dietprogram-view')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Diet Program</span></a></li>
<li class="menu-element"><a href="{{route('workoutprogram-view')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Workout Program</span></a></li>
<li class="menu-element"><a href="{{route('trainee-activity')}}"><i class="glyph-icon icon-linecons-tv"></i><span>Progress</span></a></li>