let listElements = document.querySelectorAll(".list__button--click");

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.querySelector(".list__arrow").classList.toggle("list__arrow--active");

        let menu = listElement.nextElementSibling; 
        let height = 0;

    
        if (menu.clientHeight === 0) {
            height = menu.scrollHeight;
        }

        
        menu.style.height = `${height}px`;
    });
});

