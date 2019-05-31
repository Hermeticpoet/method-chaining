$(document).ready(function() {
    
    $("button").mouseover(function() {
        $("button").removeClass("makeRed").addClass("makeBorder");
    });
    
    $("button").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });
    
    $("#button1").click(function() {
        $("#para1").hide(1000);
    });
    
    $("#button2").click(function() {
        $("#para2").fadeOut(1000);
    });
});


/****************************
    find and alter 'a' href
    **************************/
$("a[href='http://www.google.com/']").attr('href', 'http://www.live.com/')

$("a[href^='http://stackoverflow.com']")
   .each(function()
   { 
      this.href = this.href.replace(/^http:\/\/beta\.stackoverflow\.com/, 
         "http://stackoverflow.com");
   });

The first part selects only links where the href starts with http://stackoverflow.com. 
Then, a function is defined that uses a simple regular expression to replace this part of the URL with a new one. 
Note the flexibility this gives you - any sort of modification to the link could be done here.