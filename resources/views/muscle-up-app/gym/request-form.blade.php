@extends('muscle-up-app.layouts.main')

@section('title','Gym Request')

@section('style-sheet')
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
@stop

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="gym-req clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Gym Request Form</h2>
                        <h3><span class="space"></span> Please fill in all the information and click Submit Request</h3>
                        <p class="note"><span class="space"></span>Please correct your location if inaccurate.</p>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="POST" action="{{route('save-request')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name" value="" placeholder="Gym Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="num_branches" type="number" name="num_branches" value="" placeholder="Number of Branches...">
                                </div>
                                <div class="form-group col-md-6 col-md-offset-4 col-sm-12 col-xs-12">
                                    <button class="geo-location" type="button"><span class="fa fa-angle-up"></span>Detect My Location</button>
                                </div>

                                <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                    <input type="text" class="address" name="address" placeholder="Address" maxlength="250">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="country_list" name="country">
                                        <option></option>
                                        @foreach($countries as $country)
                                             <option data-code="{{$country['code']}}" value= "{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="city" value="" placeholder="City...">
                                </div>
                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial_code" type="text" name="dial_code" value="" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_number" value="" placeholder="Phone Number...">
                                </div>
                                <input class="latitude" name="latitude" type="hidden" >
                                <input class="longitude" name="longitude" type="hidden">
                            </div>

                            {{--<div class="address-field">--}}
                                {{--<textarea class="address" name="address" placeholder="Address" maxlength="250"></textarea>--}}
                            {{--</div>--}}

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Submit Request</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
    @stop

@section('script')
    <script async defer src ="{{url('https://maps.googleapis.com/maps/api/js?key=AIzaSyCSqyKO68gVk7RCkuYKRJhM8ayeT_MznpI')}}"></script>
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/js/request-gym.js')}}"></script>
@stop