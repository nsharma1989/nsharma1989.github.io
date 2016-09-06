<!DOCTYPE html>
<html>
    <head>   
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />        
        <title>KnowRoaming</title>        
        <link rel="stylesheet" type="text/css" href="styles.css" />    
    </head>
    
    <body>   	
    	<section id="page">   
     <?php
            include('header.php');
     ?>
            <section class="banner text-center" id="sec1">
        <div class="container">
            <div class="row">              
                <h1></h1>
                <p>Save Big On International Roaming and Long Distances </p>
            </div>
        </div>
    </section>
            
            <section id="articles">  
                
                <?php include('aboutUs.php'); ?>
				<!-- About Us end -->

                <div class="line"></div>
                
                <?php include('contactUs.php'); ?>               
				<!-- Contact Us end -->

                <div class="line"></div>
                
                <?php include('applynow.php'); ?>
				<!-- Apply Now end -->
            </section>
            
            <?php
            include('footer.php');
            ?>

            
		</section> <!-- Closing the #page section -->
        
        <!-- JavaScript Includes -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/script.js"></script>
        <script src="js/cscript.js"></script>
    </body>
</html>
