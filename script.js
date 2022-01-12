function ChangeClassName()
{
    // console.log("Clicked on div");

    var btnContainer = document.getElementById("myDIV");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("tab");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) 
    {
        btns[i].addEventListener("click", function() 
        {
            var current_div = document.getElementsByClassName("active");
            current_div[0].className = current_div[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}