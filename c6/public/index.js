var fname = document.querySelector('.firstname');
var lname = document.querySelector('.lastname');
var btnAddUser = document.querySelector('#add-user');

btnAddUser.addEventListener('click', function(){
    var data = {
        firstname: fname.value,
        lastname: lname.value,
        
    };

    fetch(
        'http://127.0.0.1:3000/users',
        {
            method: 'POST',
            body: JSON.stringify(data)
        }
    ).then(function(res){
        return res.text();
    }).then(function(data){
        console.log(data)
    });
});