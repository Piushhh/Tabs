const buttons = document.querySelectorAll(".TopButtons");
const content = document.createElement("p");
content.id = "tab-content";
document.body.appendChild(content);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        content.textContent = `Content of ${btn.textContent}`;
    });
});

// const heading2 = document.querySelector("h2");
// heading2.append("From apna college students"); 

// const divs = document.querySelectorAll(".box");
// divs.forEach((dv) => {
//     divs[dv] = `Content of each div ${}`
// })
