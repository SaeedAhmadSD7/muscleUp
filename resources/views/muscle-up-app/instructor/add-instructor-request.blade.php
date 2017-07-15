@component('mail::message')
    Your email  : {{$email }}
    <br>your Password  : {{$password}}


@component('mail::button', ['url' => './contactus'])
    Contact Us
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
