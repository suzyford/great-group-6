//author: amanda auld
//date: 03.31.2022
//public domain

//CodingNepal on YouTube used as reference

const ul = document.querySelector("ul"),
input = ul.querySelector("input"),
countNumb = document.querySelector(".details span")

let maxTags = 10,
tags = [];
outputs = [];

countTag();

//subtracting max value with tag length
function countTag(){
  input.focus();
  countNumb.innerText = maxTags - tags.length;
}

function createTag(){
  //removing li tags before adding so there aren't repeats
  ul.querySelectorAll("li").forEach(li => li.remove());
tags.slice().reverse().forEach(tag =>{
    let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
    //adding li inside ul tag
    ul.insertAdjacentHTML("afterbegin", liTag);
  });
  countTag();
}

//create function that allows user to remove tags
function remove(element, tag){
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0,index), ...tags.slice(index + 1)];
  //removes li of removed tag
  element.parentElement.remove();
  $('#output > div').each(function () {
    if ( $(this).hasClass(tag)){ this.remove();   }

   });
  countTag();
}

//create function that removes data when user removes tags




//create function that lets user add a new tag
function addTag(e){
  if(e.key == "Enter"){
    search();
    //removes unwanted spaces form user tag
    let tag = e.target.value.replace(/\s+/g, ' ');
    //if tag length is greater than 1 and doesn't already exist
    if(tag.length > 1 && !tags.includes(tag)){
      //limits the number of tags the user can enter
      if(tags.length < 10){
      //splits each tag from the comma
      tag.split(',').forEach(tag =>{
        //adds each tag to array
        tags.push(tag);
        createTag();
      });
    }
    }
    e.target.value = "";
  }
}


//creates remove all tags function
const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
  tags.length = 0;
  //removes all li of tags
  ul.querySelectorAll("li").forEach(li => li.remove());
  countTag();
});


//Database of recipes

var recipes = [
  {
    title: "Creamy Coleslaw",
    link: "https://hippocrateswellness.org/learning-centre/meal-plans-recipes/creamy-coleslaw-raw-vegan/",
    tags: ["vegetarian"]
  },
  {
    title: "Vegan Broccoli Cheddar Soup",
    link: "https://hippocrateswellness.org/learning-centre/meal-plans-recipes/raw-broccoli-better-than-cheddar-soup/",
    tags: ["vegetarian"]
  },
  {
   title: "Raw Zucchini Lasagne",
   link: "https://loveveg.com/recipe/raw-zucchini-lasagna/",
   tags: ["vegan"],
   description: "Zucchini is a great summertime vegetable! This lasagna is rich, refreshing and incredibly delicious. It takes almost no time to prepare so there is no excuse for not trying it. Enjoy!"
 },
 {
  title: "Nabe with Mushroom Dashi",
  link: "https://www.bonappetit.com/recipe/fridge-clean-out-nabe-with-mushroom-dashi",
  tags: ["vegan"]
},
{
 title: "Coconut Ginger Chickpea Soup",
 link: "https://www.bonappetit.com/recipe/coconut-ginger-chickpea-soup",
 tags: ["vegan"]
},
{
 title: "Tofu and Summer Vegetable Curry",
 link: "https://www.bonappetit.com/recipe/tofu-and-summer-vegetable-curry",
 tags: ["vegan"]
},
{
 title: "Carrot and Habanero Tamales",
 link: "https://www.bonappetit.com/recipe/carrot-and-habanero-tamales",
 tags: ["vegan"]
},
{
 title: "Broccoli and Cashew Cream Soup",
 link: "https://www.bonappetit.com/recipe/broccoli-and-cashew-cream-soup",
 tags: ["vegan"]
},
 {
  title: "Asian Stir-Fry",
  link: "https://loveveg.com/recipe/asian-stir-fry/",
  tags: ["vegetarian"]
},
{
  title: "Veggie Pasta Noodles",
  link: "https://www.forksoverknives.com/recipes/vegan-pasta-noodles/dan-dan-mian-noodles-recipe/",
  tags: ["vegetarian"]
},
{
  title: "Black Mango Bean Tacos",
  link: "https://www.forksoverknives.com/recipes/vegan-burgers-wraps/mango-black-bean-tacos/",
  tags: ["vegetarian"]
},
{
  title: "Crispy Buffalo Cauliflower Bites",
  link: "https://www.forksoverknives.com/recipes/vegan-snacks-appetizers/crispy-buffalo-cauliflower-bites/",
  tags: ["vegetarian"]
},
{
  title: "Stuffed Loaded Potato Skins",
  link: "https://www.forksoverknives.com/recipes/vegan-baked-stuffed/loaded-vegan-potato-skins/",
  tags: ["vegan"]
},

  {
    title: "Creamy Herb Chicken",
    link: "https://cafedelites.com/quick-easy-creamy-herb-chicken/",
    tags: ["poultry"]
  },
  {
    title: "Garlic Chicken",
    link: "https://www.eatingwell.com/recipe/250495/garlic-chicken/",
    tags: ["poultry"]
  },
  {
  title: "Sheet Pan Chicken Fajitas",
  link: "https://www.foodnetwork.com/recipes/food-network-kitchen/sheet-pan-chicken-fajitas-3680272",
  tags: ["poultry"]
},
{
  title: "Lemon Chicken",
  link: "https://www.foodnetwork.com/recipes/rachael-ray/lemon-chicken-recipe-1939793",
  tags: ["poultry"]
},
{
  title: "Teriyaki Meatballs",
  link: "https://eatfresh.org/recipe/main-dish/teriyaki-meatballs",
  tags: ["poultry"]
},
{
  title: "Pineapple Chicken Stir-Fry",
  link: "https://eatfresh.org/recipe/main-dish/pineapple-chicken-stir-fry",
  tags: ["poultry"]
},
{
  title: "Kickin Chicken Pitas",
  link: "https://eatfresh.org/recipe/main-dish/kickn-chicken-pitas",
  tags: ["poultry"]
},
{
  title: "Grilled Chicken Veggie Kabobs",
  link: "https://eatfresh.org/recipe/main-dish/grilled-chicken-vegetable-kabobs",
  tags: ["poultry"]
},
  {
    title: "Easy Turkey Skillet Dinner",
    link: "https://eatfresh.org/recipe/main-dish/easy-turkey-skillet-dinner",
    tags: ["poultry"]
},

  {
    title: "Fish Tacos",
    link: "https://eatfresh.org/recipe/main-dish/fish-tacos",
    tags: ["fish"]
  },
  {
    title: "Spicy Broiled Lime Tilapia",
    link: "https://eatfresh.org/recipe/main-dish/spicy-broiled-tilapia-lime",
    tags: ["fish"]
  },

{
  title: "Roast Fish with Curry Butter",
  link: "https://www.bonappetit.com/recipe/roast-fish-with-curry-butter",
  tags: ["fish"]
},
{
  title: "Roast Salmon with Smashed Green Bean Salad",
  link: "https://www.bonappetit.com/recipe/cold-roast-salmon-with-smashed-green-bean-salad",
  tags: ["fish"]
},
{
  title: "Cod with Tomato Basil",
  link: "https://www.foodnetwork.com/recipes/food-network-kitchen/cod-with-tomato-basil-salsa-parchment-pack-3532786",
  tags: ["fish"]
},
{
  title: "Sushi Rice with Miso Caramel Glazed Salmon",
  link: "https://www.bonappetit.com/recipe/sushi-rice-with-miso-caramel-glazed-salmon",
  tags: ["fish"],
},
{
  title: "Zaatar Fish and Chips",
  link: "https://www.bonappetit.com/recipe/zaatar-fish-and-chips",
  tags: ["fish"]
},
{
  title: "Zaatar Fish and Chips",
  link: "https://www.bonappetit.com/recipe/zaatar-fish-and-chips",
  tags: ["fish"]
},
{
  title: "Grilled Swordfish with Tomatoes and Oregano",
  link: "https://www.bonappetit.com/recipe/grilled-swordfish-with-tomatoes-and-oregano",
  tags: ["fish"]
},
{
  title: "Butter Roasted Halibut with Asparagus and Olives",
  link: "https://www.bonappetit.com/recipe/butter-roasted-halibut-with-asparagus-and-olives",
  tags: ["fish"]
},
{
  title: "Sichuan Broiled Fish",
  link: "https://www.bonappetit.com/recipe/sichuan-boiled-fish",
  tags: ["fish"]
},
  {
    title: "Macaroni and Cheese",
    link: "https://www.foodnetwork.com/recipes/ree-drummond/macaroni-and-cheese-recipe-1952854",
    tags: ["pasta"]
  },
  {
    title: "Baked Feta Pasta",
    link: "https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689",
    tags: ["pasta"]
 },
 {
   title: "Pasta with Lemon Herb Yogurt",
   link: "https://www.foodnetwork.com/recipes/geoffrey-zakarian/pasta-with-lemon-herb-yogurt-sauce-6593456",
   tags: ["pasta"]
 },
 {
   title: "Baby Shells Bechamel",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/baby-shells-bechamel-5670061",
   tags: ["pasta"]
 },
 {
   title: "One Pot Super Easy Fusilli",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/one-pot-super-easy-fusilli-5423463",
   tags: ["pasta"]
 },
 {
   title: "Cauliflower Alfredo Sauce",
   link: "https://www.foodnetwork.com/recipes/katie-lee/cauliflower-alfredo-sauce-3278457",
   tags: ["pasta"]
 },
 {
   title: "Tortellini Salad with Tomato Arugula Dressing",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/tortellini-salad-with-tomato-arugula-dressing-2529993",
   tags: ["pasta"]
 },
 {
   title: "Vegie Lasagne",
   link: "https://www.foodnetwork.com/recipes/marcela-valladolid/veggie-lasagna-3089113",
   tags: ["pasta"]
 },
 {
   title: "Spaghetti Aglio-e-Olio",
   link: "https://www.foodnetwork.com/recipes/geoffrey-zakarian/spaghetti-aglio-e-olio-3106375",
   tags: ["pasta"]
 },
 {
   title: "Baked Feta Pasta",
   link: "https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689",
   tags: ["pasta"]
 }

]

//function that searches through database and generates output for user

input.addEventListener("keyup", addTag);


function search() {

var searchResults = [];
var searchStr = document.getElementById("userInput").value;
var searchTags = searchStr.split(" ");

console.log(searchTags[0]);



// search through each record
for (recNum=0; recNum < recipes.length; recNum++) {
    // console.log(recipes[recNum]);
    var thisRecipe = recipes[recNum];

    var matchCount = 0;
    // find record that has all searchTags
    for (tagNum=0; tagNum < searchTags.length; tagNum++) {
        var thisTag = searchTags[tagNum];
        if (thisRecipe.tags.includes(thisTag)) {
            matchCount++;
        }
    }
    if (matchCount == searchTags.length) {
        console.log("Match!", thisRecipe);
        //var $recipeDiv =  $("<div class=\"print\">" + thisRecipe.title + "\n" + "<a href=" + thisRecipe.link + " target=_new>" + thisRecipe.link + "</a>" + "</div>")
        var recipeHTML = `
        <div class="print">
        <h2 class="title">${thisRecipe.title}</h2>
        <p class="description">${thisRecipe.description}</p>
        <a class= "link" href="${thisRecipe.link}" target="_new">Read this recipe!</a>
        </div>
        `
        var $recipeDiv = $(recipeHTML);
        thisRecipe.tags.forEach(element => $recipeDiv.addClass(element));
        if(!$(`#${thisRecipe.title}`).length) {
          $recipeDiv.attr("id", thisRecipe.title);
          $("#output").append($recipeDiv);
          outputs.push(thisRecipe);
          searchResults.push(thisRecipe);
        }

    }

}


console.log("Here are your match results:", searchResults.length);
}
