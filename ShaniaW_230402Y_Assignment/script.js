function view() {
    alert("You are currently viewing this page")
}


function time() {
    timeslot = document.querySelector(".hidden");
    timeslot.classList.remove("hidden");
    timeslot.classList.add("display");
}


function submit() {
        alert("Thank you for volunteering for our Event!");
}

function rec() {
    var formData = window.location.search;  
    formData = formData.substring(1, formData.length);
    while (formData.indexOf("+") != -1) {   
        formData = formData.replace("+", " ");  
    } 

    while(formData.indexOf("=") != -1) {
        formData = formData.replace("=", ": ");
    }

    document.write('<table border="0">')
    formData = unescape(formData);
    var formArray = formData.split("&");


    for (var i=0; i < formArray.length; ++i) {  
        document.writeln("<tr>" + "<td>" + formArray[i] + "<td>" + "<tr>");
    }
    document.write("<table>" + "<br>" + "<br>" + "<br>");
}








