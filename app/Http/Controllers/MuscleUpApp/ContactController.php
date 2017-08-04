<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Routing\Controller;
use Mail;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function contact()
    {
        return view('muscle-up-app.instructor.contact-us');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postContact(Request $request)
    {
        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        );
        Mail::send('muscle-up-app.mail.message' , $data, function ($message) use ($data){
            $message->from($data['email']);
            $message->to('bs130201376@vu.edu.pk');
            $message->subject('Contact with muscle up app');
        });
    }
    public function store(Request $request)
    {
//        $value =  array(
//            'name'=>'wajahat',
//            'email'=>'wajaht@gmail.com',
//            'body'=>'hello'
//        );


        //validate the data
//        $this->validate($request,array(
//            'name' => 'required|max:255',
//            'email'=>'required',
//            'body' => 'required'
//        ));
        //store data in database



        $contact = new Contact();
        $contact->name= $request['name'];
        $contact->email= $request['email'];
        $contact->body= $request['body'];
        $contact->save();

        //redirect to other page

        return redirect()->route('home-page',$contact->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */




    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
