@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Deal')

@section('content')
   <div class="row">
    <h1>Deals</h1>
   </div>
    <div class="row">
        <div class="col-md-12">
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
@endsection
