async function fetchData() {
    try {
        const response = await fetch('paintings.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function paintingInfo(id) {
    const paintings = await fetchData();

    document.querySelector("#portfolio-name-word-one").innerHTML = paintings[id].title;
    document.querySelector("#portfolio-name-word-two").innerHTML = paintings[id].medium;
    document.querySelector("#portfolio-name-word-three").innerHTML = paintings[id].size;
    document.querySelector("#portfolio-name-word-four").innerHTML = paintings[id].year;
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    //gets ID from current painting and calls function to update caption
    const paintingID = slides[slideIndex - 1].getAttribute("data-id");
    paintingInfo(paintingID);

    dots[slideIndex - 1].className += " active";
}
