const btn = document.querySelectorAll(".TopButtons");
const content = document.createElement('p');
document.body.appendChild(content);
btn.forEach((element, index) => {
    element.addEventListener("click", () => {
        content.textContent = `These are the contents of tab ${index + 1}`;
    })
})