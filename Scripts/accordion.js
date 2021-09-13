/*
This accordion is based on:
W3schools.com, ‘How TO - Collapsibles/Accordion’, 2021[Online]. Available: https://www.w3schools.com/howto/howto_js_accordion.asp [Accessed 05- Sept- 2021].
*/

//Get the accordion hint buttons
let accordion = document.getElementsByClassName('accordion-hint');

//Iterate through them
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    //Toggle adding and removing the active class
    this.classList.toggle('active');

    //Toggle between hiding and showing the active panel, as well as changing
    //the direction of the chevron to indicate when it is open or closed
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector('i').classList = 'fas fa-chevron-right';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      this.querySelector('i').classList = 'fas fa-chevron-down';
    }
  });
}
