@extends('layouts.backend-main')

@section('title','Make Program')

@section('title')
    Gym Dashboard
@stop

@section('content')

    <table id="templete">
        <tfoot>
        <div class="tab-content">
            <tr style="display: none;"  id="tmpRow" class="fieldR">
                <td style='width:20px;text-align:center;'><span class="sr"></span></td>
                <td>
                    <select class="form-control" name="phase_id[]" id="">
                        <option value="0">Select phase:</option>
                        @foreach($phases as $phase)
                            <option value="{{$phase->id}}">{{$phase->title}}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <button class="remove_row btn btn-danger" type="button"><span class="glyphicon icon-typicons-cancel"></span></button>
                </td>
            </tr>
        </div>
        </tfoot>
    </table>



    <div id="page-title">
        <h2>Add Program</h2>
        <p>Create Program</p>
        <div id="errors">
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('program_store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Program Title</label>
                                <div class="col-sm-6">
                                    <input class="form-control" type="text" name="title" value="" placeholder="Program Title... ">
                                    {{--<input type="hidden" name="gym_id" >--}}
                                </div>
                            </div>

                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="5" cols="20" class="form-control" id="description" name="description"></textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>Program Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Serial </th>
                                    <th>Phase Number</th>
                                    {{--<th width="20px">Action</th>--}}
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td style='width:20px;text-align:center;'><span class="sr">1</span></td>
                                    <td>
                                            <select  class="selectpicker" multiple title="Select Phase"  name="phase_id[]" id="">
                                                {{--<option value="0">Select phase:</option>--}}
                                                @foreach($phases as $phase)
                                                <option value="{{$phase->id}}">{{$phase->title}}</option>
                                                @endforeach
                                            </select>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th colspan="7">
                                        {{--<div class="create">--}}
                                            {{--<button type="button" id="assign" class="btn btn-primary"><span class=" glyphicon icon-typicons-plus"></span></button>--}}
                                        {{--</div>--}}
                                    </th>
                                </tr>
                                </tfoot>
                            </table>
                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Submit" class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
    <link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet"/>
    <script>
        $(".selectpicker").chosen({
            no_results_text: "Oops, nothing found!"
        })

    </script>


@stop