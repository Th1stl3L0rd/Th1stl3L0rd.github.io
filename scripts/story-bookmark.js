//set data attributes with ordered index numbers on p elements
let paragraphs = document.getElementsByTagName("p");
let count = 1;
for (let paragraph of paragraphs) {
    paragraph.setAttribute("data-index",count.toString());
    count++;
}

//check if local storage has a bookmark index
if(localStorage.getItem("bookmark")) {
    let bookmarkIndex = localStorage.getItem("bookmark");
    console.log(bookmarkIndex);
    document.querySelector(`p[data-index="${bookmarkIndex}"]`).classList.add("bookmarked");
    document.querySelector(`p[data-index="${bookmarkIndex}"]`).setAttribute("id", "bookmark");
    document.querySelector("#bookmarkLink").style.display = "grid";
}


window.onclick = e => {
    if (e.target.tagName.toLowerCase() == "p") {
        if (document.querySelector("#bookmark") !== null) {
            if(e.target.getAttribute("id") == "bookmark"){
                localStorage.clear();
                document.querySelector("#bookmark").classList.remove("bookmarked");
                document.querySelector("#bookmark").removeAttribute("id");
                document.querySelector("#bookmarkLink").style.display = "none";
            }
            else{
                document.querySelector("#bookmark").classList.remove("bookmarked");
                document.querySelector("#bookmark").removeAttribute("id");
                e.target.classList.add("bookmarked");
                e.target.setAttribute("id", "bookmark");
                localStorage.setItem("bookmark", e.target.getAttribute("data-index"));
                document.querySelector("#bookmarkLink").style.display = "grid";
            }
        }
        else {
            e.target.classList.add("bookmarked");
            e.target.setAttribute("id", "bookmark");
            localStorage.setItem("bookmark", e.target.getAttribute("data-index"));
            document.querySelector("#bookmarkLink").style.display = "grid";
        }
    }
    console.log(localStorage.getItem("bookmark"));
}