@extends('muscle-up-app.layouts.frontend-main')
@section('title','| contact')
@section('contant')


    <div class="c-form-7-container section-container section-container-gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 c-form-7 section-description wow fadeIn">
                    <h2>Form 7</h2>
                    <div class="divider-1 wow fadeInUp"><span></span></div>
                    <p>A contact form with light colors, white background and antispam question.</p>
                </div>
            </div>
            <div class="row">

                <div class="col-sm-6 col-sm-offset-3 c-form-7-box wow fadeInUp">

                    <div class="c-form-7-top">
                        <div class="c-form-7-top-left">
                            <h3>Send us a message</h3>
                            <p>Fill in the form below to send a message:</p>
                        </div>
                        <div class="c-form-7-top-right">
                            <i class="fa fa-paper-plane"></i>
                        </div>
                    </div>
                    <div class="c-form-7-bottom">
                        <form role="form" action="http://azmind.com/premium/marco/v2-0/forms/assets/contact-with-antispam.php" method="post">
                            <div class="form-group">
                                <label class="sr-only" for="c-form-7-email">Email</label>
                                <input type="text" name="email" placeholder="Email..." class="c-form-7-email form-control" id="c-form-7-email">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="c-form-7-subject">Subject</label>
                                <input type="text" name="subject" placeholder="Subject..." class="c-form-7-subject form-control" id="c-form-7-subject">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="c-form-7-message">Message</label>
                                <textarea name="message" placeholder="Message..." class="c-form-7-message form-control" id="c-form-7-message"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="c-form-7-antispam">Antispam question: 7 + 5 = ?</label>
                                <input type="text" name="antispam" placeholder="Your answer..." class="c-form-7-antispam form-control" id="c-form-7-antispam">
                            </div>
                            <button type="submit" class="btn">Send message</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>



@endsection
