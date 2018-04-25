
/*
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
        attach a click event listener to all the img tags when the document is ready
            $('img').click(function(){
                $(this).hide();
            });
        });
    </script>
</head>
<body>
    <img src="image1.jpg" />
    <img src="image2.jpg" />
    <img src="image3.jpg" />
    <img src="image4.jpg" />
    <img src="image5.jpg" />
</body>

*/

/*
            a great way to not duplicate a method which basically will only hide the image that you clicked without needing
            to set a bunch of id's 

*/