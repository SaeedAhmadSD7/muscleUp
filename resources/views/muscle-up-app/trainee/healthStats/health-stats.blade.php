@extends('layouts.backend-main')

@section('title','Health Stats')

@section('sidebar_content')
    @include('includes.backend._leftBarAdmin')
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
                      action="{{route('trainee-store')}}">
                    {{csrf_field()}}
                    <input type="hidden" id="trainee_id" name="trainee_id"/>
                    <div class="clear"></div>
                    @foreach($TraineeStats as $HealthStats)

                        <div class="form-group col-sm-8">
                            <div class="col-sm-4 taR">
                                {{$HealthStats->question}}
                            </div>
                            <div class="col-sm-4 taR">
                                <input type="checkbox" name="health_stat[]"
                                       {{--@if($HealthStats->id == "Yes") checked="checked"@endif--}}
                                >
                            </div>
                        </div>
                    @endforeach
                    <div class="form-group col-sm-12">
                        <div class="col-sm-12 taR">
                            <button type="submit" class="btn btn-primary">Record Stats</button>
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
    </script>
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
@stop
