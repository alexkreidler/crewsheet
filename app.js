db = firebase.database();
function e(x) {
    return document.getElementById(x);
}

var submit = e('submit');
submit.addEventListener('click', function(){
    database.child('users').push({'email': e('email')});
});
