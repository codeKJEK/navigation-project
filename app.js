window.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")
    const moreBtns = document.querySelectorAll(".more-btn");
    moreBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const ariaControls = event.target.getAttribute("aria-controls");
            const controlledAria = document.getElementById(ariaControls);
            if(controlledAria.getAttribute("aria-expanded") == "false") {
                controlledAria.setAttribute("aria-expanded", "true");
                controlledAria.querySelector("p").focus();
                event.target.innerHTML = "show less";
            } else {
                controlledAria.setAttribute("aria-expanded", "false");
                event.target.innerHTML = "show more";
            }
        })
    })
})