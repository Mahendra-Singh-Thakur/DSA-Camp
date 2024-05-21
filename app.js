let solid = "fa-solid";
let uparrow = "fa-angle-up";
let downarrow = "fa-angle-down";

let topics = document.querySelectorAll(".topics");
topics.forEach((t) => {
    let i = document.createElement("i");
    i.classList.add(solid);
    i.classList.add(downarrow);
    t.appendChild(i);
    let subArray = courseSubArrays[t.id];
    let string = "";
    for (let topic of subArray.Topics) {
        string += `<li class="string"><a href="../DSA-Camp/${t.id}/index.html">${topic}</a></li>`;
    };
    t.addEventListener("click", () => {
        if (i.classList.contains(downarrow)) {
            i.classList.remove(downarrow);
            i.classList.add(uparrow);
            const lii = document.createElement('li');
            lii.innerHTML = string;
            t.appendChild(lii);
            let subtopics = t.querySelectorAll(".string");
            subtopics.forEach((subtopic) => {
                subtopic.addEventListener("click", () => {
                    sessionStorage.setItem('lastClicked', subtopic.textContent);
                    sessionStorage.setItem('lastClicked', subtopic.textContent);
                });
            });
        } else {
            i.classList.remove(uparrow);
            i.classList.add(downarrow);
            t.removeChild(t.lastElementChild);
        }
    });

});
