console.log("");
            let list = document.querySelector(".list");
            let Topic = document.querySelector("#Topic");
            let subtopics = document.querySelector("#subtopics");
            let ul = document.createElement("ul");
            for (let topic of ADA.Topics) {
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
                for (let item of ADA.Modules[t.innerText]) {
                    string += `<a href="../ADA/SubTopics/${t.innerText}/${item}/index.html">
                                    <div class="list-container">
                                        <img class="image" src="../IMAGES/ADA/logologo.jpg">
                                        <li>
                                            <a href="../ADA/SubTopics/${t.innerText}/${item}/index.html">${item}</a>
                                        </li>
                                    </div>
                                </a>`;
                }

                t.addEventListener("click", () => {
                    // console.log(t.innerText);
                    Topic.innerHTML = t.innerText;
                    if (t.classList.contains("active")) {
                        t.classList.remove("active");
                        list.innerHTML = "";
                    } else {
                        topics.forEach(topic => {
                            topic.classList.remove("active");
                        });
                        t.classList.add("active");
                        list.innerHTML = string;
                        const lastclick = t.textContent;
                        sessionStorage.setItem('lastClicked', lastclick);
                    }
                });
            });
            console.log(sessionStorage.getItem('lastClicked'));
            if (sessionStorage.getItem('lastClicked') !== null) {
                document.addEventListener("DOMContentLoaded", function () {
                    let element = document.getElementById(sessionStorage.getItem('lastClicked'));
                    let event = new Event("click");
                    element.dispatchEvent(event);
                });
            }
            if (sessionStorage.getItem('lastClicked') === null) {
                console.log("default");
                document.addEventListener("DOMContentLoaded", function () {
                    let element = document.getElementById('Basics of DSA');
                    let event = new Event("click");
                    element.dispatchEvent(event);
                });
            }