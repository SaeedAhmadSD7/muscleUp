@extends('muscle-up-app.layouts.frontend-main')

@section('title','Trainee Package')

@section('content')
    <section class="trainee-reg clearfix">
        <div class="inner">

            <div class="bg-img"></div>
            <div class="t-reg-form">
                <div class="t-reg-top">
                    <h2><span class="space"></span>Plans and Pricings</h2>
                    <h3><span class="space"></span>Check out our plan</h3>
                </div>

                <dive class="col-md-6">
                <select>
              @foreach($services as $service)
                      <option value='{{$service->id}}'>{{$service->serviceName}}</option>
              @endforeach
                </select>
                </dive>
                <br></br>

                <div class="reg-form">
                    <form class="form" action="{{route('Save-tpackage')}}" method="POST" >
                        {{csrf_field()}}
                        <div class="fields clearfix">
                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="fitness_plan" value="" placeholder="Fitness Plan ...">

                            </div>

                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="personal_training" value="" placeholder="Personal Training...">
                            </div>

                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="Duration" value="" placeholder="Duration...">
                            </div>

                        </div>

                        <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Save Now</button></div>
                    </form>

                </div>
            </div>

        </div>
    </section>
@stop
@section('scripts')
    <script src="{{url('/assets/plugins/TelInput/js/intlTelInput.js')}}"></script>
    <script src="{{url('/assets/plugins/dateselect/js/jquery.dateselect.js')}}"></script>
    <script src="{{url('add-traineeadd-trainee.js></script>
@stop