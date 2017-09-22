@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')
@section('title','Phase of program')
@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/elusive/elusive.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')

    <div id="page-title">
        <h2>Phase Program List</h2>
    </div>

    <div class="panel">
        <form method="get" action="{{route('phase')}}">
            <button class="btn btn-success" type="submit">New Phase<span class="glyphicon glyphicon-plus"></span></button>
        </form>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="20px">No.</th>
                        <th style="text-align:center;" width="140px">Phase Name</th>
                        <th style="text-align:center;">Description</th>
                        <th width="20px">Edit</th>
                        <th width="20px">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $count = 1 ; ?>
                    @foreach($phases as $phase)
                        <tr>
                            <td width="20px" style="text-align:center;"><h5> <?php echo $count; ?> </h5></td>
                            <td width="140px" style="text-align:center;"><h5>{{$phase->title}}</h5></td>
                            <td><h5>{{$phase->description}}</h5></td>
                            <td width="20px">
                                <form method="get" action="{{route('edit-phase',['id'=>$phase->id])}}">
                                    <button class="btn btn-primary" type="submit"><span class="glyphicon icon-elusive-pencil"></span></button>
                                </form>
                            </td>
                            <td width="20px">
                                <form method="get" action="{{route('delete-phase',['id'=>$phase->id])}}">
                                    <button class="btn btn-danger" type="submit"><span class="glyphicon icon-typicons-cancel"></span></button>
                                </form>
                            </td>
                        </tr>
                        <?php $count++; ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
@stop
