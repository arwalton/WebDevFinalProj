/*
Handlebars in this code follows the example here very closely.
Codecademy.com, ‘Templating with Handlebars cheatsheet’, 2021[Online]. Available: https://www.codecademy.com/learn/learn-handlebars/modules/templating-with-handlebars/cheatsheet [Accessed 20- Aug- 2021]

The articles are contained in their own folder in src
These next scripts fetch the articles and then feed them to the
Handlebars template.
*/

//First get the names of the article files, contained in a csv
async function fetchFileNames() {
  try {
    //get the file
    const response = await fetch('../WebDevFinalProj/src/articles/filenames.csv');
    //keep only the text
    const fileString = await response.text();
    //extract the names of the files into an array by splitting the csv.
    const fileNames = fileString.split(',');
    //return the array
    return fileNames;
  } catch (error) {
    console.error(error);
  }
}

async function fetchFiles() {
  try {
    //get the filenames array
    const fileNames = await fetchFileNames();
    //New array to store the article objects.
    const files = [];
    //iterate through fileNames and fetch actual articles
    for (let i = 2; i < fileNames.length; i += 2) {
      //Get each file
      const response = await fetch('https://arwalton.github.io/WebDevFinalProj/src/articles/' + fileNames[i]);
      const file = await response.text();
      //Create a new object from the file
      const obj = new Object();
      obj.title = fileNames[i][2].toUpperCase() + fileNames[i].slice(3, -4);
      console.log(obj.title);
      obj.class = fileNames[i + 1];
      obj.text = file;
      //Add the object to the files array
      files.push(obj);
    }
    //return the files array
    return files;
  } catch (error) {
    console.error(error);
  }
}

//Populates the handlebars template
async function populateHandlebars() {
  //Get the tmeplate
  const articleSource = document.getElementById('article-script').innerHTML;
  //Compile the template into a function
  const articleFunc = Handlebars.compile(articleSource);
  //Create an object for the context of the function
  const articleContext = new Object();
  //Get the files array
  const files = await fetchFiles();
  //Add articles individually to the articleContext object with the spread operator
  articleContext.article = [...files];
  //Create the html to be inserted
  const articleHtml = articleFunc(articleContext);
  //Get the articles wrapper
  const articleList = document.getElementById('articles');
  //Insert the html string into the articles wrapper
  articleList.innerHTML = articleHtml;
}

//This function is used in conjunction with the topic buttons to filter the articles
//Selection represents a string that will be passed by pushing buttons
function filterArticles(selection) {
  //Get the HTMLCollection of article-wrappers.
  let articles = document.getElementsByClassName('article-wrapper');

  //Iterate through them
  for (let i = 0; i < articles.length; i++) {
    //If the article classlist has the selection string, add the show class
    //to make it visible. If not, remove the show class
    if (articles[i].classList.contains(selection)) {
      if (!articles[i].classList.contains('show')) {
        articles[i].classList.add('show');
      }
    } else {
      articles[i].classList.remove('show');
    }
  }
}

//This is a functino to add appropriate eventListeners to all of the buttons.
function setButtons() {
  //These lines add the onclick function to the buttons so they will call
  //filterArticles() with the correct params.
  document.getElementById('view-all').addEventListener('click', function () {
    filterArticles('view-all');
  });
  document
    .getElementById('coding-languages')
    .addEventListener('click', function () {
      filterArticles('coding-languages');
    });
  document
    .getElementById('coding-resources')
    .addEventListener('click', function () {
      filterArticles('coding-resources');
    });
  document
    .getElementById('interview-prep')
    .addEventListener('click', function () {
      filterArticles('interview-prep');
    });
  document.getElementById('job-search').addEventListener('click', function () {
    filterArticles('job-search');
  });

  //This function is for styling purposes. It add the active class to buttons
  //When they are clicked to make it clear how the list is being sorted.
  let buttons = document.getElementsByClassName('topic-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }
}

populateHandlebars();
setButtons();
