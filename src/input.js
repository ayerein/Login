document.querySelectorAll(".input-login").forEach((element) => {
    element.addEventListener("blur", (e) =>{
        if (e.target.value != "") {
            e.target.nextElementSibling.classList.add("filled");
        } else {
            e.target.nextElementSibling.classList.remove("filled");
        }
    })
})