let list = document.querySelector(".list");
let Topic = document.querySelector("#Topic");
let subtopics = document.querySelector("#subtopics");

let Null = "#";
let imgscr = "../IMAGES/DC/logologo.jpg";

let ul = document.createElement("ul");
for (let topic of DC.Topics) {
    let li = document.createElement("li");
    li.setAttribute("class", "topics");
    li.setAttribute("id", topic);
    li.innerHTML = `<a>${topic}</a>`;
    ul.appendChild(li);
}
subtopics.appendChild(ul);
let topics = document.querySelectorAll(".topics");
topics.forEach((t) => {
    let string = "";
    for (let item of DC.Modules[t.innerText]) {
        string += `<li id="${item}">
        <div class="content">
            <a class="thumbnail" href="../DC/SubTopics/${t.innerText}/${item}/index.html">
                <img src="${imgscr}" alt="please wait">
            </a>
            <div class="info">
                <a id="${item}" href="../DC/SubTopics/${t.innerText}/${item}/index.html">${item}</a>
            </div>
        </div>
        </li>`;
    }

    t.addEventListener("click", () => {
        // console.log(t.innerText);
        Topic.innerHTML=t.innerText;
        if (t.classList.contains("active")) {
            t.classList.remove("active");
            list.innerHTML = "";
        } else {
            topics.forEach(topic => {
                topic.classList.remove("active");
            });
            t.classList.add("active");
            list.innerHTML = string;
        }
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     let element = document.getElementById("Basics of DC");
//     let event = new Event("click");
//     element.dispatchEvent(event);
// });