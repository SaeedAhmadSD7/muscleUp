@component('mail::message')
# Welcome to MuscleUP Family.

Your Request have been approved by us, Here are your credentials for loggin in. Please change your password after loggin in.

<b>Email: </b> {{$email}} <br>
<b>Password: </b> {{$password}}

@component('mail::button', ['url' => './Login'])
Login Now
@endcomponent

Thank you for becoming a part of us,<br>
{{ config('app.name') }}
@endcomponent
