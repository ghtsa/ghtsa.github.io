<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <title></title>

        <!-- Bootstrap CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome Icons -->
        <link href="assets/css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
       
        <!-- Custom CSS -->
        <link href="assets/css/custom.css" rel="stylesheet">
        
        <!-- Animation CSS -->
        <link rel="stylesheet" href="assets/css/animate.css">
 
        <!-- HTML5 shiv and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

    </head>

    <body id="home"> 
        
        <section id="homepage">
           
            <a href="drones.html"><div class="homepage-left">
                   <div class="home-heading heading-drones">
                       <h6>Drones</h6>
                   </div><!-- home-heading -->
                    <video width="" height="100%" muted loop id="video1" onmouseover="this.play()" onmouseout="this.pause()">
                        <source src="assets/img/moustrap.mp4" type="video/mp4" >
                        Your browser does not support the video tag.
                    </video>
                    
                </div><!-- homepage-left --></a>
            
            
            
            <a href="tsa.html"><div class="homepage-right">
                <div class="home-heading heading-ghtsa">
                   <h6>GHTSA</h6>
                </div><!-- home-heading-->
                    <video width="" height="100%" muted loop id="video2" onmouseover="this.play()" onmouseout="this.pause()">
                        <source src="assets/img/moustrap.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>   
            </div><!-- homepage-right --></a>
                    
        </section><!-- homepage -->
        
        <section id="mobile-homepage">
            <a href="drones.html">
                <div class="col-sm-6 mobile-section mobile-drones">
                    <h1>Drones</h1>
                </div><!-- mobile-section -->
            </a>
            <a href="tsa.html">
                <div class="col-sm-6 mobile-section mobile-ghtsa">
                    <h1>GHTSA</h1>
                </div><!-- mobile-section -->
            </a>
        </section><!-- mobile-homepage -->
        
        
        <div class="relative">
            <div class="home-slider">
                <h2>About / Contact</h2>
            </div>
        </div>
        <footer class="homepage-footer">
            <div class="about-footer">
                <div class="row">
                    <div class="col-sm-7 about-info">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor praesentium dolorum, ipsam hic sed maiores veritatis doloremque nihil recusandae enim distinctio obcaecati cupiditate optio eos quia natus sequi accusantium ut.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione cupiditate doloribus maiores, quisquam quae voluptate incidunt, ab officia, magnam labore, alias itaque quam. Dolorum quam, vel magni maiores tenetur.</p>
                        <h2>Sources</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor praesentium dolorum, ipsam hic sed maiores veritatis doloremque nihil recusandae enim distinctio obcaecati cupiditate optio eos quia natus sequi accusantium ut.</p>
                    </div>
                    <div class="footer-close">
                        <h6 class="footer-close-x"><i class="fa fa-times"></i></h6>
                    </div>
                    <div class="col-sm-5 about-contact">
                        <section id="contact">
                            <h1>Contact Us </h1>
                            <br>

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

                            <?php 

                                if ( !$name || !$email || !$msg ) {

                                    echo '<h3 class="error">All fields are required</h3><br><br><h2 align="center">Are you sure you filled out each field?</h2><br><h1><a href="example.php" class="button">Go back and try again</a></h1><br><br><br><br><br><br>



    ';
                                    exit;

                                }	?>

                            <?php

                                // add the recipient email to a variable
                                $to = "levi@leviv.co";

                                // Create a subject
                                $subject = "$name sent you an email via your webmaster contact form";

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
                            <h2>Thanks for contacting Us!</h2><br><br><br>
                            <h2 align="center" class="second-h2">Please allow 24 hours for a response</h2><br><br>
                            <h2><a href="example.php" class="button block third-h2">Go back</a></h2>

                            <?php } else { ?>

                            <form method="post" action="" id="contact-form">

                                <section class="content bgcolor-4">
                                    <span class="input input--kuro">
                                        <input class="input__field input__field--kuro" type="text" id="name" name="name" />
                                        <label class="input__label input__label--kuro" for="name">
                                            <span class="input__label-content input__label-content--kuro">Name</span>
                                        </label>
                                    </span>

                                    <span class="input input--kuro">
                                        <input class="input__field input__field--kuro" type="email" id="email" name="email" />
                                        <label class="input__label input__label--kuro" for="email">
                                            <span class="input__label-content input__label-content--kuro">Email</span>
                                        </label>
                                    </span>

                                    <div class="textarea">
                                        <span class="input input--kuro">
                                            <textarea class="input__field input__field--kuro" type="text" id="message" name="message"></textarea>
                                            <label class="input__label input__label--kuro" for="message">
                                                <span class="input__label-content input__label-content--kuro">Message</span>
                                            </label>
                                        </span>
                                    </div>

                                    <input type="submit" class="button2 next" name="contact_submit" value="Send!">
                                </section>

                            </form>
                            <?php } ?>

                        </section><!-- contact -->
                    </div>
                </div>
            </div><!-- about-footer -->
        </footer>

       
        <!-- JavaScript -->
        <script src="assets/js/jquery-2.1.3.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/classie.js"></script>
        <script src="assets/js/main.js"></script>
    </body>
</html>