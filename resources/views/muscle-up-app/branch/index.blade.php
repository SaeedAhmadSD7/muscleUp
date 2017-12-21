@extends('layouts.backend-main')

@section('title','Branches list')

@section('style-sheet')
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/modal/modal.css')}}" rel="stylesheet" type="text/css">
@stop

@section('sidebar_content')
    @include('includes.backend._leftBarAdmin')
@stop

@section('page-heading')
    <h2>Branches List</h2>
    <p>List of Branches Added</p>
@stop



{{--{{ dd($gyms) }}--}}

@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">
                <div class="mail-header clearfix">
                    <span class="mail-title">List</span>
                </div>


                <div class="panel"><div class="panel-body"><h3 class="title-hero">Size</h3><div class="example-box-wrapper"><button class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal<div class="ripple-wrapper"></div></button><div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>Large modal content here ...</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close<div class="ripple-wrapper"><div class="ripple ripple-on ripple-out" style="left: 26.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);"></div><div class="ripple ripple-on ripple-out" style="left: 27.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);"></div><div class="ripple ripple-on ripple-out" style="left: 36.3375px; top: 20.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);"></div></div></button> <button type="button" class="btn btn-primary">Save changes<div class="ripple-wrapper"></div></button></div></div></div></div><button class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal<div class="ripple-wrapper"></div></button><div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>Small modal content here ...</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button></div></div></div></div></div></div></div>





                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-body">Name</th>
                        {{--<th class="email-title">Company</th>--}}
                        {{--<th class="email-title">Admin</th>--}}
                        <th>Date Added</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($gyms as $gym)
                        {{--<tr id="{{$gym->id}}">--}}
                            <td sty>{{$counter}}</td>
                            <td class="email-title">{{$gym->title}}</td>
                            {{--{{dd($gym->gym)}}--}}
{{--                            <td class="email-body">{{$gym->gym->title}}</td>--}}
                            <td class="date">{{$gym->created_at}}</td>
{{--                            <td class="date">{{$gym->updated_at}}</td>--}}
                            {{--<td><a href="{{route('message-detail',$gym->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>--}}
{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                            <td>
                            {!! Form::open(array('route' => array('branch.destroy', $gym->id), 'method' => 'delete')) !!}
                            <button class='btn btn-danger btn-xs' type="submit">Delete</button>
                            {!! Form::close() !!}
                            </td>

{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                        </tr>
                        <?php $counter++ ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/modal/modal.js')}}" type="text/javascript"></script>
@stop
