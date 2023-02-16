
function toggleDarkMode() {
    var elements = document.getElementsByClassName("container");
    for( var i=0; i< elements.length; i++ ) 
    {
        elements[i].classList.toggle("dark-mode");
    };
    
    var elements = document.getElementsByTagName("nav");
    for( var i=0; i< elements.length; i++ ) 
    {
        elements[i].classList.toggle("dark-mode");
    };

    var elements = document.getElementsByClassName("offcanvas");
    for( var i=0; i< elements.length; i++ ) 
    {
        elements[i].classList.toggle("dark-mode");
    };

    var elements = document.getElementsByTagName("li");
    for( var i=0; i< elements.length; i++ ) 
    {
        elements[i].classList.toggle("dark-mode");
    };
    
    document.body.classList.toggle("dark-mode");
}


function ShowMenu(){
    var offCanvas = document.getElementById("offcanvasExample");
    offCanvas.classList.toggle("show");
}