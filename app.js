var dynamodb = new AWS.DynamoDB();

function e(x) {
    return document.getElementById(x);
}

var submit = e('submit');
submit.addEventListener('click', function(){
    var params = {
      Item: { /* required */
        email: e('email').value,
        password: e('password').value
        /* anotherKey: ... */
      },
      TableName: 'crewsheet-users', /* required */
    };
    dynamodb.putItem(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
});
