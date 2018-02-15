<div class="content-box">
    <div class="content-box-wrapper">
        <form action="{{route('addDetails-phase')}}" method="post" id="form-field">

            <div class="form-group">
                {{--<label class="col-sm-4 control-label">Select Trainee</label>--}}

                <div class="col-sm-6"><select name="wbs_id" class="form-control" id="wbsId">


                        <option value="0">Select Work BreakDown:</option>
                        @foreach($wbs as $wbs_list)
                            <option value="{{$wbs_list->id}}">{{$wbs_list->title}}</option>
                        @endforeach

                    </select>
                </div>

                {{--<div class="form-group">--}}
                {{--<label class="col-sm-4 control-label">Select Type</label>--}}
                <div class="col-sm-4"><select name="day_id" class="form-control" id="dayId">
                        <option>Select Day:</option>
                        @foreach($days as $day)
                            <option value="{{$day->id}}">{{$day->title}}</option>
                        @endforeach
                    </select></div>
                {{--</div>--}}

                <div class="col-sm-2">
                    <button type="submit" id="allocate" class="btn btn-primary ">Add
                        <div class="ripple-wrapper"></div>
                    </button>
                </div>
            </div>

            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <br>
            <input type="hidden" name="phase_id" id="phase_id" value="{{$phase->id}}"> </input>
        </form>
    </div>
</div>
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
<div class="panel">
    <div class="panel-body">
        <div class="example-box-wrapper">

            <table border="0" cellpadding="0" cellspacing="0"
                   class="table table-striped table-bordered" id="datatable-example">
                <thead>
                <tr>
                    <th>Wbs Exercise</th>
                    <th>Day</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                @if($allocatedPhases == null)
                    <tr class="odd gradeA">
                        <td colspan="6"> There is no record found.</td>
                    </tr>
                @else
                    @if($allocatedPhases->count() == 0)
                        <tr class="odd gradeX">
                            <td colspan="6"> There is no record found.</td>
                        </tr>
                    @else
                        {{--                                {{$allocatedPhases->count()}}--}}
                        @foreach($allocatedPhases as $i=>$allocatedPhase)
                            <tr>
                                <td>{{$allocatedPhase->wbs->first()->title}}</td>
                                <td>{{$allocatedPhase->title}}</td>
                                <td>
                                    <ul class="">
                                        <li class="dropdown">
                                            <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                                <i class="glyphicon glyphicon-th-list"></i>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a class="create_modal_btn" href=""><i
                                                                class="glyphicon glyphicon-eye-open"></i> Detail
                                                    </a></li>
                                                <li><a class="btnEdit" href=""><i
                                                                class="glyphicon glyphicon-question-sign"></i>
                                                        Health FAQs </a></li>
                                                <li><a class="btnEdit" href=""><i
                                                                class="glyphicon glyphicon-dashboard"></i>
                                                        Health Statistics </a></li>
                                                {{--                                            <li><a class="btnDelete" href="javascript:detachTrainee({{$phase->id}},{{$allocatedPhase->id}},{{$allocatedPhase->wbs->first()->id}})"> <i--}}
                                                <li><a class="btnDelete" href="javascript:detachTrainee({{$phase->id}},{{$allocatedPhase->id}},{{$allocatedPhase->wbs->first()->id}})"> <i
                                                                class="glyphicon glyphicon-ban-circle"></i>
                                                        Deactivate </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        @endforeach
                    @endif
                @endif
                </tbody>
            </table>

        </div>
    </div>
</div>


<script>

    function detachPhase(phase_id,day_id,wbs_id){

        token = $('input[name=_token]').val();
        var type,url,params,success;
        type='POST';
        url='/phase/delete/details';
        params={
            '_token': token,
            'phase_id': phase_id,
            'day_id': day_id,
            'wbs_id': wbs_id
        };
        success= function (data) {

            $('#PhaseList').innerHTML = '';
            $('#PhaseList').html(data);
        };
        if(confirm('Are you sure to remove this record ?')) {
            ajaxCallMethod(type, url, params, success);
        }

    }
    $("#form-field").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        var $form = $(this);
        id = $("#phase_id").val();
        wbsId = $('#wbsId').val();
        dayId = $('#dayId').val();
        token = $('input[name=_token]').val();
        var type,url,params,success;
        type='POST';
        url = $form.attr('action');
        params={
            '_token': token,
            'phase_id': id,
            'day_id': dayId,
            'wbs_id': wbsId
        };
        success= function (data) {
            $('#PhaseList').innerHTML = '';
            $('#PhaseList').html(data);
        };
        ajaxCallMethod(type,url,params,success);
    });
</script>
