//gets the rss feed from the Finnish government jobs website.
fetch(
  'https://paikat.te-palvelut.fi/tpt-api/tyopaikat.rss?hakusana=junior%20developer&hakusanakentta=sanahaku&ilmoitettuPvm=1&vuokrapaikka=---'
)
  //take only the text, not the header
  .then((response) => response.text())
  //parse the text to an xml string
  .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
  //Take the data from the xml string
  .then((data) => {
    //Get all items from the data
    const items = data.querySelectorAll('item');
    let html = '';
    //Iterate through each item
    items.forEach((element) => {
      //Prep the three elements that we work with
      let title = element.querySelector('title').innerHTML;
      let desc = element.querySelector('description').innerHTML;
      let link = element.querySelector('link').innerHTML.slice(9, -12);
      //Create a string with the html that we want to append
      html +=
        '<div class="feed-item">' +
        '<h4 class="feed-item-title">' +
        '<a href=' +
        link +
        '>' +
        title +
        '</a>' +
        '</h4>' +
        '<p class="feed-item-desc">' +
        desc +
        '</p>' +
        '</div>';
    });
    //Append html to the end of the jobs-div
    document.getElementById('jobs-div').insertAdjacentHTML('beforeend', html);
  });
