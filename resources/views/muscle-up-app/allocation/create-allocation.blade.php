@extends('layouts.backend-main')

@section('title','Instructor List')

@section('title')
    Gym Dashboard
@stop

@section('content')


    <div id="page-title">
        <h2> Allocate Workout Program </h2>

        <p> Create Diet Allocation</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group allocate-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('diet-allocation-store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <hr>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select trainee</th>
                                    <th>Select Program</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control dropdownSelect2" name="trainee_id" id="">
                                            <option value="0">Select Trainee:</option>

                                        @foreach($trainees as $trainee)
                                                <option value="{{$trainee->id}}">{{$trainee->user->first_name}} {{$trainee->user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control dropdownSelect2" name="program_id" id="">
                                            <option value="0">Select Program:</option>
                                            @foreach($programs as $program)
                                                <option value="{{$program->id}}">{{$program->title}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>


                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Diet Plan</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control dropdownSelect2" name="diet_program_id" id="">
                                            <option value="0">Diet Plan:</option>
                                            @foreach($diets as $diet)
                                                <option value="{{$diet->id}}">{{$diet->title}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>

                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Enter Start Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="start_date" value="" placeholder="Enter start date" readonly>
                                        <div class="btn-date"></div>

                                    </td>

                                </tr>
                                </tbody>
                            </table>



                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Allocate" class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop


@section('script')

    <script>
        $(document).ready(function() {
            $('.btn-date').DateTimePicker();
            $('.dropdownSelect2').select2();

        });
    </script>

@stop