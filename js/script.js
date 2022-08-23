const APIKEY = "apiKey=e4fd76405420474aaaa447bc8cd20c73";
const $input = $('input[type="text"]');


$('#button').on('click', somethingSweet);


function somethingSweet(event) {
  event.preventDefault();
  $('#sugar').empty();
  userInput = $('#input').val();
  if (userInput === "") return;

  $.ajax({
    url: 'https://api.spoonacular.com/recipes/complexSearch?' + APIKEY + "&query=" + userInput
  }).then(
    (data1) => {
      console.log(data1);
    },
    (error1) => {
      console.log('bad request1', error1);
    }
  );

}



// function render() {

// }

// $.ajax({
//   url: 'https://api.edamam.com/api/recipes/v2?type=public&q=sweet&app_id=113b4f65&app_key=210535346349c3454a01549b849ebdb0&dishType=Desserts&imageSize=REGULAR&random=true&field=uri' + userInput
// }).then(
//   (data2) => {
//     console.log(data2);
//   },
//   (error2) => {
//     console.log('bad request2', error2);
//   }
// );







