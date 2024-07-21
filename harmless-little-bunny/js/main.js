

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//function will cause main title in header to slide from right to left across the top of the page when loaded.
//(Lab Item 1)

function animateTitles(q) {
    if (q.matches) { // If media query matches
        animateTitle(1);
        animateSubtitle(1);
    } else {
        animateTitle(23);
        animateSubtitle(10);
    }
}


function animateTitle(p) {
    let id = null;
    const elem = document.getElementById("animateTitle");
    elem.style.position = "absolute";
    let pos = -50;
    clearInterval(id);
    id = setInterval(frame, 15);

    function frame() {
        if (pos > p) {
            clearInterval(id);
        } else {
            pos++;
            // elem.style.top = pos + "px";
            elem.style.right = 30*pos + "px";
        }
    }
}

// function will cause subtitle in header to slide from left to right across the top of the page when loaded.
// (lab Item 2)
function animateSubtitle(p) {
    let id = null;
    const elem = document.getElementById("animateSubTitle");
    elem.style.position = "absolute";
    let pos = -100;
    clearInterval(id);
    id = setInterval(frame, 15);

    function frame () {
        if (pos > p) {
            clearInterval(id);
        } else {
            pos++;
            // elem.style.top = pos + "px";
            elem.style.left = 30*pos + "px";
        }
    }
}

//function created to reduce script usage
function animateHeader() {
    const x = window.matchMedia("(max-width: 576px)")
    animateTitles(x)
    x.addEventListener('change',animateTitles());
}


// //function will change header background whe clicked. (Lab Item 1)
function changeHeaderImage() {
    document.getElementById("headerItems").style.backgroundImage = "url('MontyPython_HolyGrail_Header_BackgroundBunny_Final.png')";
}


//the following 6 functions change div background color when clicked (Lab Item 2)

function changeColor (element, color) {
    element.style.backgroundColor = color;
}


// //function changes image from elderberries to hamster and text when hovering (Lab Item 5)
function hamster(x) {
    console.log("Oh! A Hamster!");
    x.src = "MontyPython_HolyGrail_Hamster2_600x336.jpg";
    document.getElementById("hamsterText").innerHTML = "Oh, look! A Hamster! Well, what are you waiting for? Click to " +
        "see those elderberries we mentioned. Go on.... GET ON WITH IT!";
}

//function changes image back to elderberries from hamster and text when hovering (Lab Item 5)
function elderberries(x) {
    x.src = "MontyPython_HolyGrail_Elderberries_600x337.jpg";
    document.getElementById("hamsterText").innerHTML = "What a lovely bunch of" +
        "                Elderberries. Did you click on the image? No?! Well, go on, then." +
        "                We'll wait for you....";
}
//
//function will hide/show table (Lab Item 7)
function hideTable() {
    const table = document.getElementById("favQuotes");
    const button = document.getElementById("hideButton");
    if (table.style.display != "none") {
        table.style.display = "none"
        button.innerHTML = "Show Table?"
    }
    else {
        table.style.display = "table"
        button.innerHTML = "Hide Table?"
    }
}
//
//function will change image from modern castle to Cadbury Castle (Lab Item 5)
function changeCadbury(x) {
    x.src = "MontyPython_HolyGrail_CadburyCastle1_Scale_1586to1057.jpg";
}

//function will change image back from Cadbury Castle to modern castle (Lab Item 5)
function changeCastle(x) {
    x.src = "MontyPython_HolyGrail_CastleBackground_Fantasy.jpg";
}

//function changes background image linear gradient when clicked (Lab Item 2)
function changeHistoryColor () {
    document.getElementById("camelotCard").style.backgroundImage = "linear-gradient(65deg,rgba(255, 0, 0, 0.50), rgba(255, 165, 0, 0.50), rgba(255, 255, 0, 0.50)," +
        "        rgba(0, 128, 0, 0.50),rgb(0,0,255,.50),rgb(75,0,130,.50),rgb(238,130,238,.50))";
}
//
// //function changes background image linear gradient when clicked (Lab Item 2)
function changeSweetsImg () {
    document.getElementById("sweetsImg").src = "MontyPython_HolyGrail_Sweets6_Crop604x667.jpg";
}

function changeCurrantImg () {
    document.getElementById("currantImg").src = "MontyPython_HolyGrail_Currants_Dried_Crop604x667.jpg";
}


//explicitly enables popovers
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


//the following section is the sort function for table (Lab Item 6)
//make array of objects representing quote rows
let quotesArray = [{quote: "I have to push the pram a lot...",character: "Baritone Round Table Knight", scene: "Camelot is a silly place"},
    {quote: "Help! Help! I'm being repressed!",character: "Dennis, Peasant of Filthfield", scene: "Discerning systems of Government"},
    {quote: "Well... I got a note.", character: "Sir Lancelot the Brave", scene: "Storming Swamp Castle"},
    {quote: "I don't know that!", character: "Sir Robin the-not-so-brave-as-Sir-Lancelot", scene: "Bridge of Death"},
    {quote: "A Duck!", character: "Arthur, King of the Britons", scene: "Determining a Witch"}];

//parameter is column name from table
function sortQuotes(column) {

    //sorts array based on column parameter passed in
    quotesArray.sort((a, b) => a[column].localeCompare(b[column]));

    //empty array to hold sorted quote info in order
    let arrayOfQuotes = [];

    //nested for loop taking each quote from sorted array and adding its parts to empty array
    quotesArray.forEach((quote) => {
        for(const item in quote) {
            arrayOfQuotes.push(quote[item])
        }
    })

    //references quotes table in DOM
    let table = document.getElementById("favQuotes");

    //accesses table cells and replaces contents with sorted info
    //shifting it from the new array one item at a time
    for(const row of table.tBodies[0].rows) {
        for(const cell of row.cells) {
            cell.innerHTML = arrayOfQuotes.shift()
        }
    }
}

//function changes div background image linear gradient (Lab Item 2)
function changeCommentColor () {
    document.getElementById("commentBox").style.backgroundImage = "linear-gradient(45deg,rgba(255, 0, 0, 0.50), rgba(255, 165, 0, 0.50), rgba(255, 255, 0, 0.50)," +
        "        rgba(0, 128, 0, 0.50),rgb(0,0,255,.50),rgb(75,0,130,.50),rgb(238,130,238,.50))";
}
//
// //function will show comments in p when "Enter" button is clicked (Lab Item 8)
function commentsButton() {
    const x = document.getElementById("myText").value;
    document.getElementById("seeComments").innerHTML = x;
}

//function changes div background image linear gradient (Lab Item 2)
function changeMPLinkColor () {
    document.getElementById("mpLink").style.backgroundImage = "linear-gradient(65deg,rgba(255, 0, 0, 0.50), rgba(255, 165, 0, 0.50), rgba(255, 255, 0, 0.50)," +
        "        rgba(0, 128, 0, 0.50),rgb(0,0,255,.50),rgb(75,0,130,.50),rgb(238,130,238,.50))";
}


//shows current date and time when page loads (Lab Item 9)
function dateTime() {
    const d = new Date();
    let month = d.getUTCMonth() + 1; //months from 1-12
    let day = d.getUTCDate();
    let year = d.getUTCFullYear();
    let hours = d.getHours();
    let minutes = d.getUTCMinutes();

    let newDate = "&nbsp;" + month + "/" + day + "/" + year + "&nbsp;" + hours + ":" + (minutes < 10 ? '0' : '') + minutes;
    document.getElementById("currentDate").innerHTML = newDate;
}

dateTime();



