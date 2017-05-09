@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Deal')
{{--<div class="row">
    <h1>Deals</h1>
</div>--}}
@section('content')
    <section class="features-services">
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-md-12">
                     <h1>DEAL</h1>

                    <table>
                        <thead>
                        <th>#</th>
                        <th>DealType</th>
                        <th>Duration</th>
                        </thead>

                        <tbody>
                        @foreach($Deals as $Deal)
                            <tr>
                                <th>{{$Deal->id}}</th>
                                <th>{{$Deal->dealType}}</th>
                                <th>{{$Deal->duration}}</th>

                            </tr>
                        @endforeach


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>


@endsection
