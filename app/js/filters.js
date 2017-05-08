//convert snake_case to kebab-case
app.filter('kebab', function () {
  return function(input){
    input = input || '';
    return input.split('_').join('-')
  }
});


//Returns an acronym
app.filter('acronym', function() {
  return function(input){
    input = input || '';
    return input.split(" ").map(function(el) {
      return el[0];
    }).join('')
  }
});


//Alternates capitialization of string
app.filter('aLtCaPs', function() {
  return function(input){
    return input
  }
});


//Use with ng-repeat and filter the collection
app.filter('startsWithM', function () {
  return function(input) {
      if (input.charAt(0) === 'M') {
        return input;
      } 
  }
});

app.filter('startsWithZ', function () {
  return function(input) {
    console.log(arguments);
    return input
//     return input.map(function(el){
//       return {name: el.name.toUpperCase()}
//     })
  } 
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, search) {
    return input
  }
});

//Come up with on your own
app.filter('?????', function() {
  //Do Cool Things...
});