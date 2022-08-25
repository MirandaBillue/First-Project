let userInput;

const APIKEY = "apiKey=1ddd375e19d64d5e80d3fc036fdbcb6c"
const $input = $('input[type="text"]')
const $recipeDiv = $("#recipes-div");
let $totalData = []

const URL = "https://api.spoonacular.com/recipes/complexSearch?"
// console.log(URL)

$('#button').on('click', somethingSweet)


function somethingSweet(recipe) {
  recipe.preventDefault()
  $('#recipes-div').empty()
  userInput = $input.val()
  // if (userInput === "") return;

  $.ajax(URL + APIKEY + "&query=" + userInput).then(
    function (data) {
      // console.log(data)
      if (data.results.length > 0) {
        $totalData = data.results;
        $recipeDiv.text() === JSON.stringify($totalData)
        // console.log($totalData)
        getRecipe()
      }
      else {
        $recipeDiv.text('error')
      }
    })
  }

function getRecipe() {
     $.each($totalData, function( i , val) { 
  //  for (let i = 0; i < $totalData.length; i++) {
    // console.log($totalData)
    $('main').append(`<div class="item">
      <img src="${$totalData[i].image}" alt="img"/></div>
       <div class="flex-container">
       <h2 class="title">"${$totalData[i].title}"</h2>
       <a href="" id="sourceURL">Get Recipe</a></div>`)
       
       $('a').click(sourceURL(`"${$totalData[i].id}"`)) 
       
  })
}
  function sourceURL(id) {
      let recipeURL = "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=1ddd375e19d64d5e80d3fc036fdbcb6c"
      $.ajax(recipeURL).then(
        function (data) {
          console.log(data)  
          window.open(data.sourceUrl, "_blank") 
          $('#sourceURL').text(data.recipeURL)
          $('#sourceURL').attr("href", data.recipeURL)
          }
      )
    }
 
    
    
  