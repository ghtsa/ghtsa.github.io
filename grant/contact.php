<?php include 'includes/header.php';?>


    <body>
        <section id="navbar">
            <nav class="navbar navbar-fixed-top navbar-custom" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle cmn-toggle-switch cmn-toggle-switch__htx" data-toggle="collapse" data-target=".navbar-main-collapse">
                            <span>toggle menu</span>
                        </button>
                        <a class="navbar-brand" href="index.php">
                            <svg  height="100%" viewBox="0 0 60 60" preserveAspectRatio="none">
                                <g class="icon icon--grid">
                                    <path d="M39.1272,7.88616L19.7801,7.88616L24.6169,0.433013L34.2904,0.433013L39.1272,7.88616Z" style="fill:none;stroke-width:1px;stroke:white;"/>
                                    <path d="M38.2068,18.6123L58.4742,18.6123L58.4742,42.9052L0.433013,42.9052L0.433013,18.6123L20.9455,18.6123C19.1002,20.6113 17.9886,23.314 17.9886,26.2763C17.9886,32.6759 23.1765,37.8638 29.5762,37.8638C35.9758,37.8638 41.1637,32.6759 41.1637,26.2763C41.1637,23.314 40.0521,20.6113 38.2068,18.6123ZM21.7935,17.7436L0.433013,17.7436L0.433013,9.89242L58.4742,9.89242L58.4742,17.7436L37.3588,17.7436C35.3096,15.8287 32.576,14.6888 29.5762,14.6888C26.5763,14.6888 23.8428,15.8287 21.7935,17.7436ZM53.5975,11.634C54.8407,11.634 55.8486,12.6006 55.8486,13.793C55.8486,14.9854 54.8407,15.9521 53.5975,15.9521C52.3542,15.9521 51.3464,14.9854 51.3464,13.793C51.3464,12.6006 52.3542,11.634 53.5975,11.634Z" style="fill:none;stroke-width:1px;stroke:white;"/>
                                    <circle cx="29.4536" cy="26.3988" r="9.67354" style="fill:none;stroke-width:1px;stroke:white;"/>

                                </g>
                            </svg>
                        </a>
                    </div><!-- navbar-header -->



                    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="natural.php">Natural</a></li>
                            <li class=""><a href="portraits.php">Portraits</a></li>
                            <li class=""><a href="bw.php">B &amp; W</a></li>
                            <li class=""><a href="contrived.php">Contrived</a></li>
                        </ul>
                    </div><!-- navbar-collapse -->
                </div><!-- container -->
            </nav>
        </section>
        
        <section class="module parallax parallax-1">
            <div class="container">
                <h1>Contact</h1>
            </div>
        </section>


        <div class="row">
            <div class="container">
                <div class="col-sm-6 about">
                    <h1>About</h1>
                    <img src="assets/img/CEnS928UUAEzazE.jpg" alt="">
                    <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Alias non consequatur eligendi neque vero eos dolor repellendus dolore maxime quisquam quibusdam unde error, tempore deserunt delectus aliquid eum fugit! Eveniet.</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non consequatur eligendi neque vero eos dolor repellendus dolore maxime quisquam quibusdam unde error, tempore deserunt delectus aliquid eum fugit! Eveniet.</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non consequatur eligendi neque vero eos dolor repellendus dolore maxime quisquam quibusdam unde error, tempore deserunt delectus aliquid eum fugit! Eveniet.</p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non consequatur eligendi neque vero eos dolor repellendus dolore maxime quisquam quibusdam unde error, tempore deserunt delectus aliquid eum fugit! Eveniet.</p>
                </div>
                <div class="col-sm-6">
                    <div class="contact">


                        <h1>Write Me</h1>

                        <?php 

// Check for header injections
function has_header_injection($str) {
    return preg_match ( "/[\r\n]/", $str );
}

if(isset ($_POST['contact_submit'])) {

    $name	= trim($_POST['name']);
    $email	= trim($_POST['email']);
    $msg	= $_POST['message'];

    // check to see if name or email have header injections
    if (has_header_injection($name) || has_header_injection($email)){

        die();			

    } ?>

                    </div> <!-- end contact -->

                    <?php 

    if ( !$name || !$email || !$msg ) {

        echo '<br><h3 class="error">All fields are required</h3><br><p align="center">Are you sure you filled out each field?</p><h1 class="text-center"><a href="contact.php" class="button-contact text-center">&laquo Go back and try again</a></h1><br>

';
        exit;

    }	?>

                    <div class="contact">

                        <?php

    // add the recipient email to a variable
    $to = "levi@leviv.co";

    // Create a subject
    $subject = "$name sent you an email via your contact form";

    // construct your message
    $message .= "Name: $name\r\n";
    $message .= "Email: $email\r\n\r\n";
    $message .= "Message:\r\n$msg";



    $message = wordwrap(message, 72);

    // set the mail header
    $headers = "MIME=Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "\r\n\r\nFrom: " . $name . "\r\n\r\n " . $msg . "\r\n\r\n <" . $email . "> \r\n\r\n";
    $headers .=	"X-Priority: 1\r\n";
    $headers .=	"X-MSMail-Priority: high\r\n\r\n";

    // Send the Email
    mail( $to, $subject, $message, $headers );			

                        ?>

                        <!-- Show Success message -->
                        <h2>Thanks for contacting Me!</h2><br><br><br>
                        <p align="center">Please allow 24 hours for a response</p><br><br>
                        <p><a href="index.html" class="button-contact block">&laquo; Go to Home Page</a></p>

                        <?php } else { ?>

                        <form method="post" action="" id="contact-form">

                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Johnny Appleseed">

                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Johnny@example.com">

                            <label for="message">and your message</label>
                            <textarea id="message" name="message" placeholder="Nice Photos!!"></textarea>
                            <br>

                            <input type="submit" class="button-contact next" name="contact_submit" value="Send!">




                        </form>

                        <?php } ?>

                        <br>
                        <br>
                        <br>


                    </div><!-- end contact -->
                </div>
            </div>
        </div>

<section id="map-section">
        <script src='https://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js'></script> 

        <script> 
            google.maps.event.addDomListener(window, 'load', init);
            var map;
            function init() {
                var mapOptions = {
                    center: new google.maps.LatLng(32.392138,-96.845056),
                    zoom: 13,
                    zoomControl: false,
                    disableDoubleClickZoom: true,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    },
                    scaleControl: false,
                    scrollwheel: false,
                    panControl: false,
                    streetViewControl: true,
                    draggable : true,
                    overviewMapControl: true,
                    overviewMapControlOptions: {
                        opened: false,
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
                }
                var mapElement = document.getElementById('map');
                var map = new google.maps.Map(mapElement, mapOptions);
                var locations = [

                ];
                for (i = 0; i < locations.length; i++) {
                    if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                    if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
                    if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
                    if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
                    if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                    marker = new google.maps.Marker({
                        icon: markericon,
                        position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                        map: map,
                        title: locations[i][0],
                        desc: description,
                        tel: telephone,
                        email: email,
                        web: web
                    });
                    link = '';     }

            }
        </script>
        <style>
            #map {
                height:400px;
                width:100%;
            }
            .gm-style-iw * {
                display: block;
                width: 100%;
            }
            .gm-style-iw h4, .gm-style-iw p {
                margin: 0;
                padding: 0;
            }
            .gm-style-iw a {
                color: #4272db;
            }
        </style>

        <div id='map'></div>
        </section>
        
        <?php include 'includes/footer.php';?>
