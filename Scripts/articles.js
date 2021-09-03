populateHandlebars();

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
        for(let i = 0; i < fileNames.length; i++){
            const response = await fetch('../src/articles/' + fileNames[i])
            const file = await response.text();
            const obj = new Object;
            obj.title = fileNames[i][0].toUpperCase() + fileNames[i].slice(1,-4);
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