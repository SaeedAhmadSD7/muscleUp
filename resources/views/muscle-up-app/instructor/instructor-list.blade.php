@extends('layouts.backend-main')

@section('title','Instructor List')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop


@section('page-heading')
    <h2>Instructor List</h2>
    <p>List of Instructors added</p>
@stop



@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">
                <div class="mail-header clearfix">
                    <span class="mail-title">List</span>
                </div>
                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-body">Name</th>
                        <th class="email-title">Email</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1?>
                    @foreach($instructors as $instructor)
                        <tr id="{{$instructor->id}}">
                            <td>{{$counter}}</td>
                            <td class="email-title">{{$instructor->user->first_name}}</td>
                            <td class="email-body">{{$instructor->user->email}}</td>
                            <td class="date">{{$instructor->user->updated_at}}</td>
                            <td><a href="{{route('instructor-edit',$instructor->id)}}" class="glyph-icon icon-iconic-right-circle">edit</a></td>
                            <td><a href="{{route('instructor-delete',$instructor->id)}}" class="glyph-icon icon-iconic-cancel-circle">delete</a></td>
                        </tr>
                        <?php $counter++ ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>
@stop