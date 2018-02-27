@extends('layouts.backend-main')

@section('title','List of Trainees')

@section('page-heading')
    <h2>List of Trainees</h2>
    <p>Please fill in all the information and then click Add Trainee.</p>
@stop


@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Trainees</h3>
            <div id="ajx" class="example-box-wrapper">

            </div>
        </div>
        {{--<div class="dataTables_paginate paging_bootstrap" id="datatable-example_paginate">--}}
        {{--<ul class="pagination">--}}
        {{--<li class="previous disabled"><a href="#">Previous</a></li>--}}
        {{--<li class="active"><a href="#">1</a></li>--}}
        {{--<li><a href="#">2</a></li>--}}
        {{--<li class="next"><a href="#">Next</a></li>--}}
        {{--</ul>--}}
        {{--</div>--}}
        {{--{{$trainees->links()}}--}}
        <select id="issueinput5" name="limit">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    </div>
@stop

@section('script')
    <script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>

    <script>
        $(document).ready(function(){
            var url,success,params;
            var type='GET';
            url='/ajax/trainee/list?page=' + 1;
            params='';
            success=function(data){
                $('#pg').css("display", "none");
                $('#ajx').html(data);
            };
            ajaxCallMethod(type,url,params,success);

        });

        /*==================== PAGINATION =========================*/
        $(window).on('hashchange',function(){
            page = window.location.hash.replace('#','');
            getProducts(page);
        });
        $(document).on('click','.pagination a', function(e){
            e.preventDefault();
            var page = $(this).attr('href').split('page=')[1];
            // getProducts(page);
            location.hash = page;
        });
        function getProducts(page){
            var url,success,params;
            var type='GET';
            url='/ajax/trainee/list?page=' + page;
            params={'pageinateData':$('#issueinput5').val()};
            success=function(data){
                $('#ajx').html(data);
            };
            ajaxCallMethod(type,url,params,success);
        }
        $('#issueinput5').on('change', function() {
            page = window.location.hash.replace('#','');
            getProducts(page);
        });



    </script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/trainee-inbox.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>

    <script>


    $(document).ready(function () {
    /* Datatables basic */
//    $('#datatable-example').dataTable();

    //*** trainee table detail action dropdown
    $('.dropdown-toggle').click(function (e) {
    e.preventDefault();
    $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
    e.stopImmediatePropagation();
    })
    });


    </script>
@stop