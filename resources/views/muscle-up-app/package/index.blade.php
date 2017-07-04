@extends('muscle-up-app.layouts.main')
@section('title','|Dashboard Gym Package')

@section('content')


    <div class="auto-container">
        <div class="row clearfix">
            <div class="row">
                <div class="col-md-6">
                    <h1>Package</h1>
                    @foreach($package as $packages)

                        {{--{{$Deal->id}}--}}
                        <H1> {{$packages->package_name}}</H1>
                        <P CLASS="lead">{{$packages->package_type}}</P>
                        <h3>{{$packages->package_price}}</h3>

                        <a href="{{ route('show-package', $packages->id) }}" class="btn btn-default btn-sm">View</a>
                        <a href="{{ route('package.edit', $packages->id) }}" class="btn btn-default btn-sm">Edit</a>


                    @endforeach
                </div>
            </div>
        </div>
    </div>



@endsection
