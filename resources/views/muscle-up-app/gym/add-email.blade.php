@component('mail::message')
    # Welcome to MuscleUP Family.

    Your Request have been approved by us, You are scheduled to be contacted on following date via the number you provided.
    #Date: 2017-12-21
    #Time: 19:17
    #Your Contact Number: {{$phone_number}}


    Your Account Has been created and credentials are provided below please keep them in safe place.
    #Email: {{$email}}
    #Password: {{$password}}


    It will be activated once we finish processing your data.


    For any query please click on link below,
    @component('mail::button', ['url' => './contactus'])
        Contact Us
    @endcomponent

    {{ config('app.name') }} Family.
@endcomponent

