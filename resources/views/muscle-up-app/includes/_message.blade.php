@if (\Illuminate\Support\Facades\Session::has('success'))
    <div class="alert alert-success" role="alert">
        <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success! </strong>{{\Illuminate\Support\Facades\Session::get('success')}}
    </div>
@endif
