// add support for affiliate id missing php
$(document).ready(function() {
    
    
    //set atr for capen play
    

    var fullURL = document.URL;

    var lastPart = fullURL.split("=").pop();

    $('capen-play').attr("affiliate-id", lastPart);
        
    //end....

    
});
