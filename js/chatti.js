var input;

// function stayVisible(){
// var objDiv1 = document.getElementById("stayVisible");
// objDiv1.scrollTop = objDiv1.scrollHeight;
// }


function searchAPI () {
  'use strict';
  $('form').submit(function(e) {
    e.preventDefault();

    var input = $('input[type="text"]').val();
    $('input[type="text"]').val("");
    $('.list-all').prepend("<li class='bubble-left'><span>"+input+"</span></li>");
    console.log (input);

    var command = input.split(' ')[0];

    if (command === "@temp") {
    //temperature stuff

      var city= input.slice(6);
      console.log (city);

      var renderFunction = function(jsonresult) {
        var temp = jsonresult.main.temp;
        var resulttext = "It's" + ' ' + temp + ' ' + "in" + ' ' + city + '.';
        var result = resulttext;
        $('.list-all').prepend("<li class='tempOutput bubble-right'><span>"+result+"</span></li>");

      };

      function tempFunction(citytemp, doneFunction) {
        var url= "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        $.ajax( {url: url} ).done(doneFunction);

      };

      tempFunction(input, renderFunction);
    } else if (command === "@gh") {
      //gh-pages

      var name = input.slice(4);
      console.log (name);

      $.ajax ({
        dataType: 'json',
        url: 'https://api.github.com/users/' + name,
        method: 'GET',
      }).done(function (data) {
      $('.list-all').prepend("<li class='tempOutput bubble-right'><span><img src='"+ data.avatar_url + "' class='ghAvatar' />" +
            "<p>Github Name:</p> <br>" + data.name + "</span></li>");
        stayVisible();
      }).fail(function (request, status, err) {
      $('.list-all').prepend("<li class='tempOutput bubble-right'><span><p>Sorry no go</p></span></li>");
        console.log(arguments);
      });

    } else if (command === "@spanish") {

      var spanword = input.slice(9);
      console.log (spanword);

      $.ajax ({
        dataType: 'jsonp',
        url: 'https://www.glosbe.com/gapi/translate?from=eng&dest=spa&format=json&phrase='+ spanword + '&pretty=true',
        method: 'GET',
      }).done(function (data) {
      var translationWord = data.tuc[0].phrase.text;
      $('.list-all').prepend("<li class='tempOutput bubble-right'><span>"+translationWord+"</span></li>");
      }).fail(function (request, status, err) {
        console.log(arguments);
      });

    } else if (command === "@french") {

      var spanword = input.slice(8);
      console.log (spanword);

      $.ajax ({
        dataType: 'jsonp',
        url: 'https://www.glosbe.com/gapi/translate?from=eng&dest=fra&format=json&phrase=' + spanword + '&pretty=true',
        method: 'GET',
      }).done(function (data) {
      var translationWord = data.tuc[0].phrase.text;
      $('.list-all').prepend("<li class='tempOutput bubble-right'><span>"+translationWord+"</span></li>");
      }).fail(function (request, status, err) {
        console.log(arguments);
      });

    } else {

    // $('.list-all').append("<li class='bubble-right'>"This is not it"</li>");



    }

  });

};


//https://glosbe.com/gapi/translate?from=en&dest=es&phrase=phrase&format=json
