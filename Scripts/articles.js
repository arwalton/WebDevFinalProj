populateHandlebars();
setButtons();

async function fetchFileNames() {
    try{
        const response = await fetch('../src/articles/filenames.csv')
        const fileString = await response.text();
        const fileNames = fileString.split(',');
        return fileNames;
    }catch (error){
        console.error(error);
    }
};

async function fetchFiles(){
    try{
        const fileNames = await fetchFileNames();
        const files = [];
        for(let i = 2; i < fileNames.length; i+=2){
            const response = await fetch('../src/articles/' + fileNames[i])
            const file = await response.text();
            const obj = new Object;
            obj.title = fileNames[i][0].toUpperCase() + fileNames[i].slice(1,-4);
            obj.class = fileNames[i+1];
            obj.text = file;
            files.push(obj);
        }
        return files;
    }catch(error){
        console.error(error);
    }
}

async function populateHandlebars(){
    const articleSource = document.getElementById('article-script').innerHTML;
    const articleFunc = Handlebars.compile(articleSource);
    const articleContext = new Object;
    const files = await fetchFiles();
    articleContext.article = [...files];
    const articleHtml = articleFunc(articleContext);
    const articleList = document.getElementById('articles');
    articleList.innerHTML = articleHtml;
}

function filterArticles(selection){
    let articles = document.getElementsByClassName('article-wrapper');

    for(let i = 0; i < articles.length; i++){
        if(articles[i].classList.contains(selection)){
            if(!articles[i].classList.contains('show')){
                articles[i].classList.add('show');
            }
        }else{
            articles[i].classList.remove('show');
        }
    }
}

function setButtons(){
    document.getElementById('view-all').addEventListener('click', function() {
        filterArticles('view-all');
    });
    document.getElementById('coding-languages').addEventListener('click', function() {
        filterArticles('coding-languages');
    });
    document.getElementById('coding-resources').addEventListener('click', function() {
        filterArticles('coding-resources');
    });
    document.getElementById('interview-prep').addEventListener('click', function() {
        filterArticles('interview-prep');
    });
    document.getElementById('job-search').addEventListener('click', function() {
        filterArticles('job-search');
    });

    let buttons = document.getElementsByClassName('topic-button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function() {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += " active";
        });
    }

}