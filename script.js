$(document).ready(function() {

    $("#weatherSubmit").click(function(e) {
      e.preventDefault();
      var value = $("#weatherInput").val();
      console.log(value);
      
      var myurl= "http://food2fork.com/api/search?key=24c902e5c7e30bb9388990c1b06a709e&q=" + value;
        $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
          console.log(json);
          /*
          var results = "";
          results += '<h2>Weather in ' + json.name + "</h2>";
          for (var i=0; i<json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
          }
          results += '<h2>' + json.main.temp + " &deg;F</h2>"
          results += "<p>"
          for (var i=0; i<json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1)
            results += ", "
          }
          results += "</p>";
          $("#weatherResults").html(results);*/
        }
      });
    });
});

