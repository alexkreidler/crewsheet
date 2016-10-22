var db = firebase.database();
function e(x) {
    return document.getElementById(x);
}

var submit = e('submit');
submit.addEventListener('click', function(){
    db.ref().child('users').push({'email': e('email')}.value);
});
