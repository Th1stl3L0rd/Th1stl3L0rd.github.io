

function animateTitle() {
    document.getElementById("homeHeader").style.opacity = "1";
    setTimeout(function() {document.getElementById("sesameStreetSlogan").style.opacity = "1";}, 1500);
}

window.addEventListener("load", (event) => {
    animateTitle();
});




//explicitly enables popovers-->

    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function dateTime() {
    const d = new Date();
    let year = d.getUTCFullYear();
    let newDate = year;
    document.getElementById("currentDate").innerHTML = newDate;
}

dateTime();
