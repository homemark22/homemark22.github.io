
// This is an "event handler" runs right after the
// browser loads your page, which is just when the page
// is "ready" for your javascript to interact with
// the HTML content.
$(document).ready(function(){

    // Everything inside this function (look up, see the word function?)
    // runs as soon as that "ready" event happens. Everything
    // between that curly bracket above and the one way down at the
    // bottom is inside this function.
    
    // Note that we indent everything inside the function.
    // It makes it easier for us to read and understand what 
    // is inside the function, and what is outside.
    
    // Your browser doesn't care about indentation, it only cares
    // about those curly brackets to tell it where the function
    // starts and ends. So watch your typing carefully!
    


    // Here's another "event handler" with a function inside. 
    // This looks for the element with CSS ID "orb" and runs the
    // function every time "orb" is clicked. 
    $('#orb').click(function() {
        
        // Note that we're indenting another level here.
        // It helps you see that this code is inside the
        // #orb click handler function.
        
        // Once "orb" is clicked it runs this if/else statement
        // which first looks to see if the orb has the ".sun" class.       
        if ($('#orb').hasClass('sun')) {
            // If it does, then let's remove the sun class and add
            // the moon class instead.
            $('#orb').removeClass('sun').addClass('moon');
        } else {
            // If it doesn't have the sun class, it must have the
            // moon class already. We should remove moon and add sun.
            $('#orb').removeClass('moon').addClass('sun');
        }
            
        // Let's do the same thing for the #sky div.
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }
            
    
        // This is similar, but instead of toggling between two classes
        // we just need to adds or removes the "visible" class to mulitple objects.
        if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
        } else {
            $('#moonspot1').addClass('visible');
        }
        
        if ($('#moonspot2').hasClass('visible')) {
            $('#moonspot2').removeClass('visible');
        } else {
            $('#moonspot2').addClass('visible');
        }
        
        if ($('#moonspot3').hasClass('visible')) {
            $('#moonspot3').removeClass('visible');
        } else {
            $('#moonspot3').addClass('visible');
        }
        
    }); // End of #orb click handler
    
}); // End of document ready handler








