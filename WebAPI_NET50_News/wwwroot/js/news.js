const uri = 'api/News';
const categoriesuri='api/categories'


function getCategory() {
    fetch(categoriesuri)
        .then(response => response.json())
        .then(data => categoryList(data))
        .catch(error => console.error('Unable to get category.', error));
}

function categoryList(data) {
    let sel = document.querySelector('.selectText');
    data.forEach(item => {
        let objOption = document.createElement('option');
        let optionContext = document.createTextNode(item.category);
        objOption.innerText = optionContext;
        objOption.appendChild(optionContext);
        sel.appendChild(objOption);
    });

}

function getNews() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get news.', error));
}

//function addNews() {
//    const addTitle = document.getElementById('Title');
//    const addContext = document.getElementById('Context');
//    const addDateTime = document.getElementById('DateTime');
//    const addCategory = document.getElementById('Categories');

//    const news = {
//        title: addTitle.value.trim(),
//        context: addContext.value.trim(),
//        datetime: addDateTime.value.trim(),
//        category: addCategory.value.trim()
//    }

//    fetch(uri, {
//        method: 'POST',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(news)
//    })
//        .then(response => response.json())
//        .catch(error => console.error('Unable to add user.', error));
//}
