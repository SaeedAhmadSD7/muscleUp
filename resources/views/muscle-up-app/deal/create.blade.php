
@extends('muscle-up-app.layouts.main')
@section('title','Create Deal')

@section('content')

<section class="contact-us clearfix">

    <div class="inner">

        <div class="contact-area">
            <div class="contact-title col-md-12 col-sm-12">
                <h2 class="col-md-6"><span class="space"></span>Make New DEAL </h2>
            </div>
            <div class="contact-form">

                <form id="contact-form" role="form" method="post" action="{{route('save-deal')}}">
                    {{csrf_field()}}

                    <div class="fields clearfix">
                        <div class="form-group col-md-6 col-md-offset-3 offs col-sm-12 col-xs-12  text-field">
                            <input type="text" name="dealType" value="" placeholder="Deal Type.....">
                        </div>

                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                            <input type="text" name="duration" value="" placeholder="Deal Duration">
                        </div>

                    </div>
                    <div class="col-md-6 col-md-offset-3">
                        <div class="col-md-5 col-xs-7 col-sm-7">
                            <button type="submit"><span class="fa fa-angle-right"></span> Submit </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>

</section>
@endsection