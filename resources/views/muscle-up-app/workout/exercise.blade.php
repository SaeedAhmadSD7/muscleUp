@extends('layouts.frontend-main')

@section('title','Exercise')

@section('content')

    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="gym-req clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                    </div>

                    <div class="reg-form">
                        <form class="gym-reuqest-form" role="form" method="POST" action="">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="exercise_list" name="exercise">
                                        <option></option>
                                        @foreach($exercises as $exercise)
                                            <option  value="{{$exercise['name']}}" >{{$exercise['name']}}</option>

                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop