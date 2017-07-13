@extends('muscle-up-app.layouts.main')

@section('title','Gym Request')

@section('style-sheet')
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
@stop
@section('content')
    @if ($errors->any())
        <div class="alert alert-danger" role="alert">
            <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Error.</strong><br>
            @foreach($errors->all() as $error_message)
                {{$error_message}}<br>
            @endforeach
        </div>
    @endif

    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="gym-req clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Gym Request Form</h2>
                        <h3><span class="space"></span> Please fill in all the information and click Submit Request</h3>
                    </div>

                    <div class="reg-form">
                        <form class="gym-reuqest-form" role="form" method="POST" action="{{route('save-request')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name" value="{{old('name')}}" placeholder="Gym Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="{{old('email')}}" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="num_branches" type="number" name="num_branches" value="{{old('num_branches')}}" placeholder="Number of Branches...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="country_list" name="country">
                                        <option></option>
                                        @foreach($countries as $country)
                                            <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="city" type="text" name="city" value="{{old('city')}}" placeholder="City...">
                                </div>
                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial_code" type="text" name="dial_code" value="{{old('dial_code')}}" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_number" value="{{old('phone_number')}}" placeholder="Phone Number..." maxlength="15">
                                </div>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                    <input class="address" name="address" type="text" value="{{old('address')}}" placeholder="Address..." maxlength="255">
                                </div>

                            </div>


                            <div class="text-right col-md-12">
                                <button type="submit"><span class="fa fa-angle-right"></span> Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}"
            type="text/javascript"></script>
    <script src="{{url('/assets/js/request-gym.js')}}"></script>
@stop