const buttons = document.querySelectorAll(".tab-btn")
const content = document.querySelectorAll(".Tab-content")

buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        content.forEach(cnt => cnt.classList.remove("active"));

        element.classList.add("active");
        content[index].classList.add("active")

    })
})
