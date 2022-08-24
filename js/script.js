let userInput;

const APIKEY = "apiKey=82f590e502ff46aab98a0944c6686f4f"
const $input = $('input[type="text"]')
const $recipeDiv = $("recipes-div");
let $totalData = []

const URL = "https://api.spoonacular.com/recipes/complexSearch?"
// console.log(URL)
$('#button').on('click', somethingSweet)

function somethingSweet(recipe) {
  recipe.preventDefault()
  $('.item').empty()
  userInput = $input.val()
  if (userInput === "") return;

  $.ajax(URL + APIKEY + "&query=" + userInput).then(
    function (data) {
      // console.log(data)
      if (data.results.length > 0) {
        $totalData = data.results
        $recipeDiv.text() === JSON.stringify($totalData)
        // console.log($totalData)
       getRecipe() 
      }    
   else{
    $recipeDiv.text === error
   }  
    })
  }
function getRecipe(){
  $recipeDiv.text = ""
  for(let i = 0; i < $totalData.length; i++){
      console.log($totalData)
 
}
}


