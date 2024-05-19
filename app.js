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
        console.log("topic => ", topic);
        string += `<a>${topic}</a>`;
    };
    t.addEventListener("click", () => {
        if (i.classList.contains(downarrow)) {
            i.classList.remove(downarrow);
            i.classList.add(uparrow);
            const lii = document.createElement('li');
            lii.innerHTML = string;
            t.appendChild(lii);
        } else {
            i.classList.remove(uparrow);
            i.classList.add(downarrow);
            t.removeChild(t.childNodes[2]);
        }
    });
});


