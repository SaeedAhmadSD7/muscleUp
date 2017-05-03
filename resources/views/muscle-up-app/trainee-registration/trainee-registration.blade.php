<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">

    <title>Marco - Bootstrap Landing Page</title><!-- CSS -->
    <link href="{{url('https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic')}}" rel="stylesheet">
    <link href="{{url('css/bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{url('css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{url('css/jquery.dateselect.css')}}" rel="stylesheet">
    <link href="{{url('css/intlTelInput.css')}}" rel="stylesheet">
    <link href="{{url('css/registration-forms.css')}}" rel="stylesheet">
</head>

<body>
<div class="tr-form-container section-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3 tr-form-box">

                <form action="" class="registration-form" method="post" role="form">

                    <fieldset class="basic-information">

                        <div class="tr-form-top">
                            <div class="tr-form-top-left">
                                <h3>Step 1</h3>
                                <p>Please enter the required information and click Next.</p></div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i></div>
                        </div>


                        <div class="tr-form-bottom">
                            <div class="form-group">
                                <input class="first-name form-control" id="first-name" name="first-name" placeholder="First name..." type="text">
                            </div>


                            <div class="form-group">
                                <input class="last-name form-control" id="last-name" name="last-name" placeholder="Last name..." type="text">
                            </div>


                            <div class="form-group">
                                <input class="email form-control" id="email" name="email" placeholder="Email..." type="text">
                            </div>


                            <div class="form-group">
                                <input class="password form-control" id="password" name="password" placeholder="Password..." type="password">
                            </div>


                            <div class="form-group">
                                <input class="repeat-password form-control" id="repeat-password" name="repeat-password" placeholder="Repeat password..." type="password">
                            </div>


                            <div class="form-group">
                                <input class="date-birth form-control" disabled id="date-birth" name="date-birth" placeholder="Date of Birth..." type="text"> <button class="btn btn-primary btn-date" type="button"><i class="fa fa-calendar"></i></button>
                            </div>


                            <div class="form-group sex">
                                <label>Sex :</label>

                                <div class="sex-options">
                                    <label class="radio-inline"><input name="sex-options" type="radio" value="Male"> Male</label> <label class="radio-inline"><input name="sex-options" type="radio" value="Female"> Female</label>
                                </div>
                            </div>


                            <div class="form-group">
                                <input class="form-control p-number" id="p-number" name="p-number" placeholder="Phone Number..." type="text">
                            </div>


                            <div class="form-group">
                                <textarea class="address form-control" id="address" name="address" placeholder="Address..."></textarea>
                            </div>


                            <div class="form-elements-divider">
                            </div>


                            <div class="tr-form-buttons">
                                <button class="btn next-btn" type="button">Next</button>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset class="medical-history-1">

                        <div class="tr-form-top">
                            <div class="tr-form-top-left">
                                <h3>Step 2</h3>
                                <p>Now we will learn about your medical history.</p>
                            </div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i></div>
                        </div>


                        <div class="tr-form-bottom">

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Asthama?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="asthama-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="asthama-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Cancer?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="cancer-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="cancer-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have or had any Spinal Injury?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="spinal-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="spinal-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Blood Pressure issues?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="bp-options" type="radio" value="Yes">Yes</label>
                                    <label class="radio-inline"><input name="bp-options" type="radio" value="No">No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have any kind of Knee problem?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="knee-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="knee-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Diabetes?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="diabetes-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="diabetes-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Athritis?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="athritis-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="athritis-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="tr-form-buttons">
                                <button class="btn previous-btn" type="button">Previous</button>
                                <button class="btn next-btn" type="button">Next</button>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset class="medical-history-2">
                        <div class="tr-form-top">
                            <div class="tr-form-top-left"><h3>Step 3</h3>
                                <p>Just a little bit more...</p></div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i></div>
                        </div>

                        <div class="tr-form-bottom">
                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Fibromyalgia?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="fibromyalgia-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="fibromyalgia-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Varicose Veins issue?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="varicose-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="varicose-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you suffer from Rheumatic Fever?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="rheumatic-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="rheumatic-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left">
                                    <label>Do you suffer from Glandular Fever?</label>
                                </div>

                                <div class="options">
                                    <label class="radio-inline"><input name="glandualr-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="glandular-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have Hemia?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="hemia-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="hemia-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left">
                                    <label>Do you have Stomach or Duodenal Ulcer?</label>
                                </div>
                                <div class="options">
                                    <label class="radio-inline"><input name="duodenal-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="duodenal-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left">
                                    <label>Have you had any kind of Surgery in the Past?</label>
                                </div>


                                <div class="options">
                                    <label class="radio-inline"><input name="surgery-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="surgery-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="tr-form-buttons">
                                <button class="btn previous-btn" type="button">Previous</button>
                                <button class="btn next-btn" type="button">Next</button>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset class="medical-history-3">

                        <div class="tr-form-top">
                            <div class="tr-form-top-left">
                                <h3>Step 3</h3>
                                <p>Just a little bit more...</p></div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i>
                            </div>
                        </div>


                        <div class="tr-form-bottom">
                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you suffer from Dizziness or Fainting?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="dizziness-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="dizziness-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have any kind of Kidney or Liver Condition?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="kidney-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="kidney-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you have any kind of Heart Condition?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="heart-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="heart-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do have suffer from any kind of Heart or Chest Pain?</label></div>


                                <div class="options">
                                    <label class="radio-inline"><input name="chest-options" type="radio" value="Yes"> Yes</label> <label class="radio-inline">
                                        <input name="chest-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you any kind of Joints Pain?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="joints-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="joints-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you Smoke?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="smoke-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="smoke-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do you Drink?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="drink-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="drink-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Do suffer from Depression or Insomnia?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="insomnia-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="insomnia-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="tr-form-buttons">
                                <button class="btn previous-btn" type="button">Previous</button>
                                <button class="btn next-btn" type="button">Next</button>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset class="food-allergies">

                        <div class="tr-form-top">
                            <div class="tr-form-top-left">
                                <h3>Step 4</h3>
                                <p>Now we will learn about your Food Allergies</p>
                            </div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i></div>
                        </div>


                        <div class="tr-form-bottom">
                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you Lactose Intolerant?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="lactose-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="lactose-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Eggs?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="egg-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="egg-options" type="radio" value="No"> No</label>
                                </div>
                            </div>


                            <div class="form-elements-divider"></div>


                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Fish?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="fish-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="fish-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Meat?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="meat-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="meat-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to ShellFish?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="shell-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="shell-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Peanuts?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="peanuts-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="peanuts-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Wheat?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="wheat-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="wheat-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Soy?</label></div>
                                <div class="options">
                                    <label class="radio-inline"><input name="soy-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="soy-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Tree Nuts?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="tree-nuts-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="tree-nuts-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="form-group medical-history">
                                <div class="q-left"><label>Are you allergic to Seeds?</label></div>

                                <div class="options">
                                    <label class="radio-inline"><input name="seeds-options" type="radio" value="Yes"> Yes</label>
                                    <label class="radio-inline"><input name="seeds-options" type="radio" value="No"> No</label>
                                </div>
                            </div>

                            <div class="form-elements-divider"></div>

                            <div class="tr-form-buttons">
                                <button class="btn previous-btn" type="button">Previous</button>
                                <button class="btn next-btn" type="button">Next</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

<!--[if lt IE 9]>
<script src="{{url('https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js')}}"></script>
<script src="{{url('https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js')}}"></script>
<![endif]-->

<!-- Script Files-->
<script src="{{url('js/jquery-3.2.1.js')}}"></script>
<script src="{{url('bootstrap/js/bootstrap.js')}}"></script>
<script src="{{url('js/jquery.backstretch.js')}}"></script>
<script src="{{url('js/jquery.dateselect.js')}}"></script>
<script src="{{url('js/intlTelInput.js')}}"></script>
<script src="{{url('js/registration-forms.js')}}"></script>
<script src="{{url('js/jquery.easing.1.3.js')}}"></script>

{{--<!--[if lt IE 10]>--}}
{{--<script src="{{url('js/placeholder.js')}}"></script>--}}
{{--<![endif]-->--}}

</body>
</html>