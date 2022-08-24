let recipeData, userInput;

const APIKEY = "apiKey=3bba871e1a5c4b74b78c0452c15d076f"
const $input = $('input[type="text"]')
const $recipes = $("#sugar")

const URL = "https://api.spoonacular.com/recipes/complexSearch?" + APIKEY + "&query="

$('#button').on('click', somethingSweet)


// function pickRecipe() {
//   const randomIndex = Math.floor(Math.random() * URL.length)
//   const recipe = URL(randomIndex)
//   somethingSweet(recipe)
// }

function somethingSweet(recipe) {
  recipe.preventDefault()
  $('#sugar').empty()
  userInput = $input.val()
  if (userInput === "") return;

  $.ajax(URL+userInput).then(
    function(data) {
      console.log(data)
      let shownRecipes = ""
      $.map(data, function (_value, _key){
      return (`${shownRecipes}`)
    },
    $('main').append(`<div class="item">
    <img src="${data.results[0].image}" alt="img"/>
    <div class="flex-container">
      <h1 class="title">"${data.results[0].title}"</h1>
      <p class="id">"${data.results[0]}"<p>`),
      $input.val(''),
      )
    },
    function (error) {
      console.log(error)
    })

}
    // function render() {
    //   $img.attr('src', data.image)
    // }


