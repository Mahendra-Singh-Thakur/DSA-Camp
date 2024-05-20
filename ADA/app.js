let list = document.querySelector(".list");
let Topic = document.querySelector("#Topic");
let subtopics = document.querySelector("#subtopics");

let Null = "#";
let imgscr = "../IMAGES/ADA/logologo.png";
// console.log(moduleHtml);

let ul = document.createElement("ul");
for (let topic of ADA.Topics) {
    let li = document.createElement("li");
    li.setAttribute("class", "topics");
    li.setAttribute("id", topic);
    li.innerHTML = `<a href="${Null}">${topic}</a>`;
    ul.appendChild(li);
}
subtopics.appendChild(ul);
let topics = document.querySelectorAll(".topics");
topics.forEach((t) => {
    let string = "";
    for (let item of ADA.Modules[t.innerText]) {
        string += `<li id="${item}">
        <div class="content">
            <a class="thumbnail" href="${Null}">
                <img src="${imgscr}" alt="please wait">
            </a>
            <div class="info">
                <a id="${item}" href="">${item}</a>
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
// document.addEventListener("DOMContentLoaded", function () {
//     let element = document.getElementById("Algorithms");
//     let event = new Event("click");
//     element.dispatchEvent(event);
// });