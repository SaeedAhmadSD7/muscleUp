@extends('muscle-up-app.layouts.frontend-main')
@section('title','|homepage')

<!-- Main Slider -->
@include('muscle-up-app.includes.frondends._mainSlider')

@section('content')
    <section class="features-services">
        <div class="auto-container">
            <div class="row clearfix">

                <!-- Style-One -->
                <article class="col-md-4 col-sm-6 col-xs-12">
                    <div class="post style-one wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="title-box">
                            <h2 class="clearfix"><span class="big-text pull-left">6</span><span class="pull-left"><span class="med-text">WEEKS </span><br><span class="small-text">BODY PERFORMANCE</span></span></h2>
                        </div>
                        <div class="post-text">
                            Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme.
                            <a class="more" href="#"><span class="fa fa-angle-right"></span> START TODAY</a>
                        </div>
                    </div>
                </article>

                <!-- Style Two -->
                <article class="col-md-4 col-sm-6 col-xs-12">
                    <div class="post style-two wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <img src="images/resource/image-1.png" alt="">
                        <div class="title-box">
                            <h2 class="clearfix">
                                <span class="pull-left"><span class="med-text">INDOOR </span><br><span class="small-text">CARDIO WORKOUTS</span></span>
                                <span class="pull-right price">
                                	<sub>From</sub>$19<sup>99</sup>
                                </span>
                            </h2>
                        </div>
                    </div>
                </article>

                <!-- Style Three -->
                <article class="col-md-4 col-sm-12 col-xs-12">
                    <div class="post style-three wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <img src="images/resource/image-2.png" alt="">
                        <div class="post-cont">
                            <div class="post-text">
                                <div><span class="med-text">PERSONAL</span><br><span class="small-text">TRAINING</span></div>
                                We are an independent gym that is committed to working with you to gain the results you want.
                                <a class="more" href="#"><span class="fa fa-angle-right"></span> HIRE US</a>
                            </div>
                        </div>
                    </div>
                </article>


            </div>
        </div>
    </section>

    <!--Two Column-->
    <section class="two-column">
        <div class="auto-container">
            <div class="row clearfix">

                <!--Workout Sessions-->
                <div class="col-md-7 col-sm-6 col-xs-12">

                    <div class="workout-sessions">
                        <div class="sec-title">
                            <h3>THE BEST WORKOUTS FOR YOU</h3>
                            <h2>TOP WORKOUTS SESSIONS</h2>
                        </div>
                        <div class="sec-text clearfix">
                            <p>If you don’t want to commit to being a member you can still use all of our facilities but you will need to have an induction session before using the facilities to ensure that Health and Safety! </p>

                            <div class="clearfix"></div>
                            <a href="#" class="read-more"><span class="fa fa-angle-right"></span> SEE ALL WORKOUTS</a>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s" data-wow-offset="0">
                            <div class="small-title">
                                <span class="med-text">STAY FIT</span><br>
                                <span class="small-text">ONLY FOR MEN</span>
                            </div>
                            <div class="desc">
                                <p><strong>6 weeks</strong> / 2 hours a day / workout plan / nutrition plan.</p>
                                <a href="#" class="price">19,99$</a>
                            </div>
                            <div class="images clearfix">
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-3.jpg" alt="" title=""></div>
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-4.jpg" alt="" title=""></div>
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-5.jpg" alt="" title=""></div>
                            </div>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s" data-wow-offset="0">
                            <div class="small-title">
                                <span class="med-text">BEACH BODY</span><br>
                                <span class="small-text">WOMEN PERFORMANCE</span>
                            </div>
                            <div class="desc">
                                <p><strong>6 weeks</strong> / 2 hours a day / workout plan / nutrition plan.</p>
                                <a href="#" class="price">19,99$</a>
                            </div>
                            <div class="images clearfix">
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-6.jpg" alt="" title=""></div>
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-7.jpg" alt="" title=""></div>
                                <div class="col-md-4 col-sm-4 col-xs-12"><img src="images/resource/image-8.jpg" alt="" title=""></div>
                            </div>
                        </div>

                    </div>

                </div>

                <!--Featured Courses-->
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="featured-courses">

                        <div class="sec-title">
                            <h3>OUR FEATURED</h3>
                            <h2>COURSES &amp; TRAININGS</h2>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                            <h3>Cardio Spinning &amp; Cycling</h3>
                            <div class="desc">Every Monday 7 PM / 2 hours  / StayFit Cycling Room</div>
                            <div class="info">
                                Johnny Galecki - Fitness Coach <span class="icon flaticon-cycling"></span>
                                <a href="#" class="join">Join</a>
                            </div>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                            <h3>Running Wild for Freaks</h3>
                            <div class="desc">Every Tuesday 6 PM / 2 hours  / Outdoor</div>
                            <div class="info">
                                Marvin Jackson - Cardio Coach <span class="icon flaticon-sprint"></span>
                                <a href="#" class="join">Join</a>
                            </div>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                            <h3>Body Challenge </h3>
                            <div class="desc">Every Monday and Friday 6 PM / 1 hour  / Fitness Room</div>
                            <div class="info">
                                Marvin Jackson - Cardio Coach<span class="icon flaticon-sprint"></span>
                                <a href="#" class="join">Join</a>
                            </div>
                        </div>

                        <div class="post wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                            <h3>Fit with Water </h3>
                            <div class="desc">Every Thursday 6 PM / 2 hours  / Swim Area</div>
                            <div class="info">
                                Janette Bomhilde - Fitness Coach<span class="icon flaticon-swimming18"></span>
                                <a href="#" class="join">Join</a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>

    <!--Curved Section-->
    <section class="successfull-stories curved-carousel">
        <div class="slider">

            <article class="slide-item">
                <div class="auto-container">
                    <div class="text-side">
                        <div class="sec-title">
                            <h3>PERSONAL TRAINING</h3>
                            <h2>Start a personal training session with one of our fitness trainers</h2>
                        </div>
                        <div class="sec-text">
                            <p>Jenna Jameson had set herself the goal of losing 1 stone and running the Great South Run the year after she gave birth to her little girl. With the help of our personal training sessions she achieved her goal and her little girl was there to watch her cross the finishing line.</p>
                        </div>
                    </div>

                    <figure class="image-box">
                        <div class="image-layer" style="background-image:url(images/resource/image-11.jpg);"></div>
                        <div class="text-layer">
                            <ul class="text">
                                <li>Jenna Jameson</li>
                                <li>Age: 26 Years old</li>
                                <li>Weight: 55 kg</li>
                                <li>New York City, StayFit Gym</li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </article>

            <article class="slide-item">
                <div class="auto-container">
                    <div class="text-side">
                        <div class="sec-title">
                            <h3>PERSONAL TRAINING</h3>
                            <h2>Start a personal training session with one of our fitness trainers</h2>
                        </div>
                        <div class="sec-text">
                            <p>Liza Boye had set herself the goal of losing 1 stone and running the Great South Run the year after she gave birth to her little girl. With the help of our personal training sessions she achieved her goal and her little girl was there to watch her cross the finishing line.</p>
                        </div>
                    </div>

                    <figure class="image-box">
                        <div class="image-layer" style="background-image:url(images/resource/image-12.jpg);"></div>
                        <div class="text-layer">
                            <ul class="text">
                                <li>Liza Boye</li>
                                <li>Age: 29 Years old</li>
                                <li>Weight: 52 kg</li>
                                <li>New York City, StayFit Gym</li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </article>

            <article class="slide-item">
                <div class="auto-container">
                    <div class="text-side">
                        <div class="sec-title">
                            <h3>PERSONAL TRAINING</h3>
                            <h2>Start a personal training session with one of our fitness trainers</h2>
                        </div>
                        <div class="sec-text">
                            <p>Jenna Jameson had set herself the goal of losing 1 stone and running the Great South Run the year after she gave birth to her little girl. With the help of our personal training sessions she achieved her goal and her little girl was there to watch her cross the finishing line.</p>
                        </div>
                    </div>

                    <figure class="image-box">
                        <div class="image-layer" style="background-image:url(images/resource/image-11.jpg);"></div>
                        <div class="text-layer">
                            <ul class="text">
                                <li>Jenna Jameson</li>
                                <li>Age: 26 Years old</li>
                                <li>Weight: 55 kg</li>
                                <li>New York City, StayFit Gym</li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </article>

            <article class="slide-item">
                <div class="auto-container">
                    <div class="text-side">
                        <div class="sec-title">
                            <h3>PERSONAL TRAINING</h3>
                            <h2>Start a personal training session with one of our fitness trainers</h2>
                        </div>
                        <div class="sec-text">
                            <p>Liza Boye had set herself the goal of losing 1 stone and running the Great South Run the year after she gave birth to her little girl. With the help of our personal training sessions she achieved her goal and her little girl was there to watch her cross the finishing line.</p>
                        </div>
                    </div>

                    <figure class="image-box">
                        <div class="image-layer" style="background-image:url(images/resource/image-12.jpg);"></div>
                        <div class="text-layer">
                            <ul class="text">
                                <li>Liza Boye</li>
                                <li>Age: 29 Years old</li>
                                <li>Weight: 52 kg</li>
                                <li>New York City, StayFit Gym</li>
                            </ul>
                        </div>
                    </figure>
                </div>
            </article>

        </div>
    </section>

    <!--Availabilty / Four Column-->
    <section class="availability four-column">
        <div class="auto-container">
            <div class="row clearfix">

                <article class="col-md-3 col-sm-6 col-xs-12">
                    <div class="block wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="upper-rounds">
                            <div class="img-circle small-circle"><span class="icon flaticon-dumbbells10"></span></div>
                            <div class="img-circle big-circle">GAIN<br>MUSCLES</div>
                            <div class="img-circle medium-circle">$19<sup>99</sup></div>
                        </div>
                        <h3>Workout for more mass</h3>
                        <p>Our members benefit from a free gym programme and review every month, free studio classes and price reductions on our personal training sessions.</p>
                    </div>
                </article>

                <article class="col-md-3 col-sm-6 col-xs-12">
                    <div class="block wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="upper-rounds">
                            <div class="img-circle small-circle"><span class="icon flaticon-shoes18"></span></div>
                            <div class="img-circle big-circle">Burn<br>Weights</div>
                            <div class="img-circle medium-circle">$17<sup>99</sup></div>
                        </div>
                        <h3>Workout for more mass</h3>
                        <p>As a member you can also access our pool and tennis courts for free and have priority for booking any of the pre-book activities, classes or sessions that we run. </p>
                    </div>
                </article>

                <article class="col-md-3 col-sm-6 col-xs-12">
                    <div class="block wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="upper-rounds">
                            <div class="img-circle bigger-circle"><div class="inner img-circle"><span>ORDER</span><br>HITT WORKOUT</div></div>
                        </div>
                        <h3>High Intensity Training</h3>
                        <p>Our members benefit from a free gym programme and review every month, free studio classes and price reductions on our personal training sessions.</p>
                    </div>
                </article>

                <article class="col-md-3 col-sm-6 col-xs-12">
                    <div class="block wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="1.5s" data-wow-offset="0">
                        <div class="upper-rounds">
                            <div class="img-circle small-circle"><span class="icon flaticon-heart92"></span></div>
                            <div class="img-circle big-circle">Stay<br>Healthy</div>
                            <div class="img-circle medium-circle">$15<sup>99</sup></div>
                        </div>
                        <h3>Eat clean, train hard</h3>
                        <p>If you don’t want to commit to being a member you can still use all of our facilities but you will need to have an induction session before using the facilities to ensure that.</p>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!--Tweets Scroller-->
    <section class="tweets-scroller">

        <!--Tweets-->
        <div class="tweets-slider-container">
            <ul class="tweets-slider">
                <li class="slide-item">
                    <span class="icon fa fa-twitter"></span>
                    <div class="text">"Rob was told for health reasons that he needed to lose 5 stone. He started swimming 3 times a week, when he felt ready, started going to Boxercise."</div>
                    <span class="tweet-author">Jackson Martinez via twitter</span>
                </li>
                <li class="slide-item">
                    <span class="icon fa fa-twitter"></span>
                    <div class="text">"Rob was told for health reasons that he needed to lose 5 stone. He started swimming 3 times a week and then, when he felt ready, started going to Boxercise."</div>
                    <span class="tweet-author">Julia Martinez via twitter</span>
                </li>
                <li class="slide-item">
                    <span class="icon fa fa-twitter"></span>
                    <div class="text">"Rob was told for health reasons that he needed to lose 5 stone. He started swimming 3 times a week and then, when he started going to Boxercise."</div>
                    <span class="tweet-author">Ruby Kartz via twitter</span>
                </li>
            </ul>
        </div>

        <!--Image Scroller-->
        <div class="image-scroller-container">
            <ul class="image-scroller">
                <li class="slide-item"><span class="image" style="background-image:url(images/resource/scroller-image-4.png);"></span></li>
                <li class="slide-item"><span class="image" style="background-image:url(images/resource/scroller-image-5.png);"></span></li>
                <li class="slide-item"><span class="image" style="background-image:url(images/resource/scroller-image-6.png);"></span></li>
            </ul>
        </div>

    </section>

    <!--Products-->
    <section class="products">
        <div class="auto-container">
            <div class="row clearfix">

                <article class="col-md-6 col-sm-6 col-xs-12 product">
                    <div class="title-box">
                        <h3 class="dark-blue">SPORTS WEAR</h3><br>
                        <h3 class="light-blue">LIVE FITNESS TRACKER</h3>
                    </div>
                    <div class="text">We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend the right classes for you to attend in our studios.</div>
                    <figure class="image">
                        <div class="img-circle light-blue">$19<sup>99</sup></div>
                        <img src="images/resource/image-9.jpg" alt="" title="">
                    </figure>
                </article>

                <article class="col-md-6 col-sm-6 col-xs-12 product">
                    <div class="title-box">
                        <h3 class="dark-blue">HEALTHY LIFE</h3><br>
                        <h3 class="light-pink">Jawbone UP24</h3>
                    </div>
                    <div class="text">Our members benefit from a free gym programme and review every month, free studio classes and price reductions on our personal training sessions. As a member you can also access our pool and tennis courts for free and have priority for booking any of the pre-book activities, classes or sessions that we run.</div>
                    <figure class="image">
                        <div class="img-circle light-pink">$19<sup>99</sup></div>
                        <img src="images/resource/image-10.jpg" alt="" title="">
                    </figure>
                </article>

            </div>
        </div>
    </section>
@endsection
