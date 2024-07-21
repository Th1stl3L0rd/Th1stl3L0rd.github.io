header.innerHTML = `
<header class="sticky-top">
    <div class="row sticky-top">
        <nav class="navbar navbar-expand-lg" aria-label="breadcrumb" style="--bs-breadcrumb-divider: ''"; id="navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" id="castleToggle" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <i id="castleStack" class="bi bi-bricks"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="list-group list-group-horizontal align-items-center breadcrumb breadcrumb-custom overflow-hidden text-center" id="navList" >
                    <a class="navbar-brand" href="#">
                        <img src="MontyPython_HolyGrail_Bunny_Skulls_Transparent_HLB_Text_Black_Crop916x459.png" alt="" height="75">
                    </a>
                    <li class="nav-item breadcrumb-item" id="indexLink">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item breadcrumb-item" id="aboutLink">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item breadcrumb-item" id="contactLink">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</header>`;

//add sticky-top class to header div to give navbar sticky behavior
header.classList.add("sticky-top");

//get current page location
const currentPathName = window.location.pathname;

//use split repeatedly to extract page name
const currentPage = currentPathName.split("/")[2].split(".")[0];

//use page name to reference the link that matches the current page
const activeLink = document.getElementById(currentPage+"Link");

//add active class to link to get breadcrumb behavior
activeLink.classList.add("active");

//use query selector to reference anchor tag inside active link and remove href to disable link
document.querySelector(".active a").removeAttribute("href");