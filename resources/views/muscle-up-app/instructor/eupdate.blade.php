@extends('layouts.frontend-main')

@section('title','Update Exercise')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Update Exercised</h2>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="post" action="{{route('update-exercise', $exercise->id)}}">
                            {{csrf_field()}}
                            {{ method_field('POST') }}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="id" value="{{$exercise->id}}" placeholder="Id ...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name" value="{{$exercise->name}}" placeholder="Name...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name_original" value="{{$exercise->name_original}}" placeholder="Name_original...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="category" value="{{$exercise->category}}" placeholder="Category...">
                                </div>
                                {{--<div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">--}}
                                    {{--<input type="text" name="muscles" value="{{$exercise->muscles}}" placeholder="Muscles...">--}}
                                {{--</div>--}}
                                {{--<div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">--}}
                                    {{--<input type="text" name="muscles_secondary" value="{{$exercise->muscles_secondary}}" placeholder="Muscles_secondary...">--}}
                                {{--</div>--}}
                                {{--<div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">--}}
                                    {{--<input type="text" name="equipment" value="{{$exercise->equipment}}" placeholder="Equipment...">--}}
                                {{--</div>--}}
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="description" value="{{$exercise->description}}" placeholder="Description...">
                                </div>
                            </div>

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Update Exercise</button></div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@stop