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
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="POST" action="{{route('save-gym')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name" value="" placeholder="Gym Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="" placeholder="Email Address...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="country_list" name="country">
                                        <option></option>
                                        @foreach($countries as $country)
                                             <option value= {{$country['code']}} data-dialcode={{$country['dial-code']}}>{{$country['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial-code" type="text" name="dial-code" value="" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="p-number" type="text" name="p-number" value="" placeholder="Phone Number...">
                                </div>
                            </div>

                            <div class="address-field">
                                <textarea name="address" placeholder="Address" maxlength="250"></textarea>
                            </div>

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Submit Request</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
    @stop

@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/js/request-gym.js')}}"></script>
@stop