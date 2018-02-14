$(document).ready(function() {

    $("#weatherSubmit").click(function(e) {
      e.preventDefault();
      var value = $("#weatherInput").val();
      console.log(value);
      
      var myurl= "http://api.yummly.com/v1/api/recipes?_app_id=84595f8e&_app_key=256cc9c10912cab72e895321f2477a8f&q=" + value;
        $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
          console.log(json);
          var results = "";
          results += 'Yummy results for ' + value;
          for (var i=0; i<json.matches.length; i++) {
            results += '<b>'+json.matches[i].recipeName + "</p></b>";
            results += "Ingredients: </p>";
            for(var j=0; j<json.matches[i].ingredients.length; j++){
                results += "    -"+json.matches[i].ingredients[j] + "</p>";
            }
            results += "</p>"
          }
          results += "</p>";
          $("#weatherResults").html(results);
        }
      });
    });
});

