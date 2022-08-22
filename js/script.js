const $sweetBtn = $('#button')
const $mainContent = $('main')



$sweetBtn.on('click', somethingSweet);


function somethingSweet(event)
 {
    event.preventDefault();
    $mainContent.empty()

    $.ajax({
      url:'https://api.edamam.com/api/recipes/v2?type=public&q=fruity&app_id=113b4f65&app_key=210535346349c3454a01549b849ebdb0&dishType=Desserts&imageSize=REGULAR'
    }).then(
      (data) => {
       console.log(data);
      },
      (error) => {
       console.log('bad request', error);
      }
    );

    }







  $.ajax({
    url:'https://api.spoonacular.com/recipes/716429/information?apiKey=e4fd76405420474aaaa447bc8cd20c73&includeIngredients=true'
  }).then(
    (data2) => {
     console.log(data2);
    },
    (error2) => {
     console.log('bad request2', error2);
    }
  );

 





