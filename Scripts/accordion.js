let accordion = document.getElementsByClassName("accordion-hint");

for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        //Toggle adding and removing the active class
        this.classList.toggle("active");

        

        //Toggle between hiding and showing the active panel
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
            this.querySelector('i').classList = "fas fa-chevron-right";
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.querySelector('i').classList = "fas fa-chevron-down"
        }
    })
}