@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Deal')
{{--<div class="row">
    <h1>Deals</h1>
</div>--}}
@section('content')
    <section class="features-services">
        <div class="auto-container">
                <div class="row">
                    <div class="col-md-6">
                     <h1>DEAL</h1>
                        @foreach($Deals as $Deal)

                                {{--{{$Deal->id}}--}}
                               <H1> {{$Deal->dealType}}</H1>
                                <P CLASS="lead">{{$Deal->duration}}</P>

                                <a href="{{ route('show-deal', $Deal->id) }}" class="btn btn-default btn-sm">View</a>
                                <a href="{{ route('deals.edit', $Deal->id) }}" class="btn btn-default btn-sm">Edit</a>


                        @endforeach
                    </div>

                </div>
        </div>
    </section>


@endsection
