@component('mail::message')
# Welcome to MuscleUp Family

Your Request has been processed by us and your account have been created. Credentials are provided below.
<b>Email: </b>{{$email}}
<b>Password: </b>{{$password}}

Please keep them safe and don't share them with anyone.

@component('mail::button', ['url' => '/Login'])
Login Now
@endcomponent

We hope you will be happy with us.<br>
{{ config('app.name') }}
@endcomponent
