@component('mail::message')
# Welcome to MuscleUP Family.

 Your Request have been approved by us, You will be contacted on this email and number you provided.
<br><b>Your Contact Number:</b> {{$dial_code}}-{{$phone_number}}
<br><b>Your Login Email:</b> {{$email}}
<br><b>Your Login Password:</b> {{$password}}

For any query please click on link below,
@component('mail::button', ['url' => './contactus'])
    Contact Us
@endcomponent

{{ config('app.name') }} Family.
@endcomponent

