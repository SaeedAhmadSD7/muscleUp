@extends('layouts.backend-main')

@section('title','Health Stats')

@section('sidebar_content')
    @include('includes.backend._adminLeftBar')
@stop

@section('page-heading')
    <h2>Record Health Stats</h2>
    <p>Please fill in the relevant information if any.</p>
@stop
@section('content')
    <div class="panel">

        <div class="panel-body">
            <h3 class="content-box-header bg-google">Basic Info</h3>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST"
                      action="{{route('health_stats_save')}}" id="questions_form">
                    {{csrf_field()}}
                    <input type="hidden" id="trainee_id" name="trainee_id" value="{{$Trainee->id}}"/>
                    <div class="clear"></div>
                    @foreach($TraineeStats as $HealthStats)

                        <div class="form-group col-sm-8">
                            <div class="col-sm-4 taR">
                                {{$HealthStats->question}}
                            </div>
                            <div class="col-sm-4 taR">
                                <input type="checkbox" name="health_stat[]" class="checkbox"
                                       value="{{$HealthStats->id}}"
                                       @if(isset($MedicalHistories))
                                       @foreach($MedicalHistories as $MedicalHistory)
                                       @if($MedicalHistory->health_question_id == $HealthStats->id)
                                       @if($MedicalHistory->status == 'Yes')
                                       checked="checked"
                                        @endif
                                        @endif
                                        @endforeach

                                        @endif

                                >
                            </div>
                        </div>
                    @endforeach
                    <div class="form-group" id="checkBoxes">
                    </div>
                    <div class="form-group col-sm-8">
                        <div class="col-sm-8 taR">
                            <button type="button" class="btn btn-primary" id="save_form_btn">Record Stats</button>
                            <button type="button" class="btn btn-primary" onclick="goTo({{''}})">Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script>
        window.previewImage = "{{url('/resources/app/images/default.jpg')}}";
        window.uploadProfilePic = "{{route('uploadProfilePic')}}";
        window.removeUploadedProfilePic = "{{route('removeUploadedProfilePic')}}";
        $(document).ready(function () {
            $("#save_form_btn").on('click', function () {
                $("input[name='health_stat[]']").each(function () {
                    var condition = $(this).is(':checked');
                    var value = $(this).val();
                    var checkBox = '';
                    if (condition == true) {
                        checkBox = 'Yes';
                    } else {
                        checkBox = 'No';
                    }
                    $('#checkBoxes').append('<input type="hidden" name="stat[' + value + ']" value="' + checkBox + '">');
                });
                $("#questions_form").submit();
            });
        });

    </script>
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
@stop
