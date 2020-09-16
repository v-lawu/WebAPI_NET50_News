const uri = 'api/Users';
let users = [];

function getUsers() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get users.', error));
}

//function checkUserName() {
//    var uName = document.getElementById('Uname').value;
//    if (!(uName != null && uName.trim() != '')) {
//        document.getElementById('Checker')
//        return false;
//    }
//};

function addUser() {
    const addUserNamebox = document.getElementById('Uname');
    const addPasswordbox = document.getElementById('Pass');
    const addAge = document.getElementById('Age');

    const user = {
        name: addUserNamebox.value.trim(),
        password: addPasswordbox.value.trim(),
        age: addAge.value.trim()
    }
      
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(() => {
            getUsers();
        })
        .catch(error => console.error('Unable to add user.', error));
}
