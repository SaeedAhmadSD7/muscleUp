@extends('muscle-up-app.layouts.frontend-main')

@section('title','Workout program')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <div class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span> WorkOut Program</h2>

                    </div>

                    <div class="reg-form">
                        <form class="medical-form" role="form" method="POST" action="">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <section>

                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>
\>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
@stop
@section('script')

@stop