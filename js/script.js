let userInput;

const APIKEY = "apiKey=569e0a4c32fd42ef9b2a465b3622713f"
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
  if (userInput === "") return;

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
let j = 0
function getRecipe() {
  $recipeDiv.text = ""
  $.each($totalData, function (i) {
    //  for (let i = 0; i < $totalData.length; i++) {
    // console.log($totalData)
    $('main').append(`<div class="item">
      <img src="${$totalData[i].image}" alt="img"/></div>
       <div class="flex-container">
       <h2 class="title">"${$totalData[i].title}"</h2>
       </div><div id="linkDiv${j}"></div>`)

    $('#sourceLink').on('click', sourceURL(`${$totalData[i].id}`))

  })
}

const links = []
function sourceURL(id) {
  let recipeURL = `https://api.spoonacular.com/recipes/${(id)}/information?apiKey=569e0a4c32fd42ef9b2a465b3622713f`
  $.ajax(recipeURL).then(
    function (data) {
      // console.log(data) 
  //  links.push(data)
  //  console.log(links)
   
      // $("#sourceURL").text(data.sourceURL)
      // $("#sourceURL").attr("href", data.sourceURL)
      // window.open(data.sourceUrl, "name")
      $(`#linkDiv${j}`).append(`<div><a target="_blank" href="${data.sourceUrl}" id="sourceLink">Get Recipe</a></div>`)
      console.log(data.sourceUrl)
      j++
    }
  )
} 



