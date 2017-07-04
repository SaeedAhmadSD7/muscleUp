@extends('muscle-up-app.layouts.main')
@section('title','Events')
{{--<div class="row">
    <h1>Deals</h1>
</div>--}}
@section('content')
    <section class="features-services">
        <div class="auto-container">
                <div class="row">
                    <div class="col-md-6">
                        @foreach($Events as $Event)
                             <H1> {{$Event->name}}</H1>
                                <P CLASS="lead">{{$Event->type}}</P>
                                {{--<a href="{{ route('show-deal', $Deal->id) }}" class="btn btn-default btn-sm">View</a>--}}
                                {{--<a href="{{ route('deals.edit', $Deal->id) }}" class="btn btn-default btn-sm">Edit</a>--}}
                        @endforeach
                    </div>

                </div>
        </div>
    </section>


@endsection
