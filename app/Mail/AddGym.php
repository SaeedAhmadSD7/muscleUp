<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\User;

class AddGym extends Mailable
{
    use Queueable, SerializesModels;
    protected $dial_code;
    protected $phone_number;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($dial_code, $phone_number)
    {
        $this->phone_number = $phone_number;
        $this->dial_code = $dial_code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */

    public function build()
    {
         return $this->from('admin@muscleup.com')->markdown('muscle-up-app.gym.add-email')->with(['dial_code'=>$this->dial_code,'phone_number'=>$this->phone_number]);
    }
}
