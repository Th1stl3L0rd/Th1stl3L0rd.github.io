//makes distinct saved bookmark name for each story using title tag content
const storyBookmark = `${document.querySelector("title").text.replaceAll(" ","")}_bookmark`;

//set data attributes with ordered index numbers on p elements
let paragraphs = document.getElementsByTagName("p");
let count = 1;
for (let paragraph of paragraphs) {
    paragraph.setAttribute("data-index",count.toString());
    count++;
}

//check if local storage has a bookmark index
if(localStorage.getItem(storyBookmark)) {
    let bookmarkIndex = localStorage.getItem(storyBookmark);
    console.log(bookmarkIndex);
    document.querySelector(`p[data-index="${bookmarkIndex}"]`).classList.add("bookmarked");
    document.querySelector(`p[data-index="${bookmarkIndex}"]`).setAttribute("id", "bookmark");
    document.querySelector("#bookmarkLink").style.display = "grid";
}


window.onclick = e => {
    if (e.target.tagName.toLowerCase() == "p") {
        if (document.querySelector("#bookmark") !== null) {
            if(e.target.getAttribute("id") == "bookmark"){
                localStorage.removeItem(storyBookmark);
                document.querySelector("#bookmark").classList.remove("bookmarked");
                document.querySelector("#bookmark").removeAttribute("id");
                document.querySelector("#bookmarkLink").style.display = "none";
            }
            else{
                document.querySelector("#bookmark").classList.remove("bookmarked");
                document.querySelector("#bookmark").removeAttribute("id");
                e.target.classList.add("bookmarked");
                e.target.setAttribute("id", "bookmark");
                localStorage.setItem(storyBookmark, e.target.getAttribute("data-index"));
                document.querySelector("#bookmarkLink").style.display = "grid";
            }
        }
        else {
            e.target.classList.add("bookmarked");
            e.target.setAttribute("id", "bookmark");
            localStorage.setItem(storyBookmark, e.target.getAttribute("data-index"));
            document.querySelector("#bookmarkLink").style.display = "grid";
        }
    }
    console.log(localStorage.getItem(storyBookmark));
}