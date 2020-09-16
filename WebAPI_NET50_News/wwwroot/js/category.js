const uri = 'api/Categories';

function getCategory() {
    fetch(uri)
        .then(response => response.json())
        .catch(error => console.error('Unable to get category.', error));
    reLoad();
}

//function categoryList(data) {
//    let sel = document.querySelector('.selecttext');

//    data.forEach(item => {
        
//        let objOption = document.createElement('option');
//        let optionContext = document.createTextNode(item.categoryname)
//        objOption.appendChild(optionContext);
//        sel.appendChild(objOption);
//    });
//}

function addCategory() {
    const addCategory = document.getElementById('Category');

    const categories = {
        categoryname: addCategory.value.trim()
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categories)
    })
        .then(response => response.json())
        .then(() => {
            getCategory();
        })
        .catch(error => console.error('Unable to add category.', error));
}

function reLoad() {
    window.location.href = 'https://localhost:44332/addNews.html';
}