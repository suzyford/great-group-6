//author: amanda auld
//date: 03.31.2022
//public domain

//CodingNepal on YouTube used as reference

const ul = document.querySelector("ul"),
input = ul.querySelector("input"),
countNumb = document.querySelector(".details span")

let maxTags = 5,
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





//Database of recipes

var recipes = [
  {
    title: "Creamy Coleslaw",
    link: "https://hippocrateswellness.org/learning-centre/meal-plans-recipes/creamy-coleslaw-raw-vegan/",
    tags: ["vegetarian"],
    description: ""
  },
  {
    title: "Vegan Broccoli Cheddar Soup",
    link: "https://hippocrateswellness.org/learning-centre/meal-plans-recipes/raw-broccoli-better-than-cheddar-soup/",
    tags: ["vegetarian"],
    description: ""
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
  tags: ["vegan"],
  description: "When associate editor Christina Chaey is short on time, she opts for a quick nabe, or hot pot, using her beloved Japanese donabe as a catchall for whatever vegetables she needs to use up. The ingredients listed in the recipe are merely suggestions; you could easily use kabocha squash or sliced sweet potatoes in place of the butternut, carrots in place of the turnips, or broccoli florets instead of (or in addition to) leafy greens. "
},
{
 title: "Coconut Ginger Chickpea Soup",
 link: "https://www.bonappetit.com/recipe/coconut-ginger-chickpea-soup",
 tags: ["vegan"],
 description: "This super-easy recipe is a perfect canvas for punchy, crunchy toppers like toasted coconut and mustard seeds with turmeric oil and a zingy chutney. The dal is vegan but full of hearty protein thanks to the chickpeas, lentils, and coconut milk. Serve the stew as the centerpiece surrounded by fixings that guests can pick and choose to build their own bowls."
},
{
 title: "Tofu and Summer Vegetable Curry",
 link: "https://www.bonappetit.com/recipe/tofu-and-summer-vegetable-curry",
 tags: ["vegan"],
 description: "This quick vegetarian curry from Heidi Swanson, the vegetarian cookbook author and blogger behind 101 Cookbooks, is a great way to use a CSA’s bounty of eggplant and summer squash. Feel free to change that lineup depending on your haul. You can eat the curry as is, or ladle it over cooked noodles or rice to add some heft."
},
{
 title: "Carrot and Habanero Tamales",
 link: "https://www.bonappetit.com/recipe/carrot-and-habanero-tamales",
 tags: ["vegan"],
 description: "Tamales originated in Mesoamerica long before colonization and have been evolving ever since. Because farmers tend to cure and store the maíz that tamales are made from by November, they’ve become a staple dish for the cold winter months. This particular tamale, filled with carrots, habaneros, and garlic, is my celebration of how the harvest from summer and fall floats into wintertime."
},
{
 title: "Broccoli and Cashew Cream Soup",
 link: "https://www.bonappetit.com/recipe/broccoli-and-cashew-cream-soup",
 tags: ["vegan"],
 description: "Broccoli soup should be foundational in everyone’s weeknight cooking. It can be a dress-it-up or dress-it-down situation—packed with cheddar to bring that familiar oozy saltiness, or decked out with a mac and cheese topping, or simply served with croutons."
},
 {
  title: "Asian Stir-Fry",
  link: "https://loveveg.com/recipe/asian-stir-fry/",
  tags: ["vegetarian"],
},
{
  title: "Veggie Pasta Noodles",
  link: "https://www.forksoverknives.com/recipes/vegan-pasta-noodles/dan-dan-mian-noodles-recipe/",
  tags: ["vegetarian"],
  description: ""
},
{
  title: "Black Mango Bean Tacos",
  link: "https://www.forksoverknives.com/recipes/vegan-burgers-wraps/mango-black-bean-tacos/",
  tags: ["vegetarian"],
  description: ""
},
{
  title: "Crispy Buffalo Cauliflower Bites",
  link: "https://www.forksoverknives.com/recipes/vegan-snacks-appetizers/crispy-buffalo-cauliflower-bites/",
  tags: ["vegetarian"],
  description: ""
},
{
  title: "Stuffed Loaded Potato Skins",
  link: "https://www.forksoverknives.com/recipes/vegan-baked-stuffed/loaded-vegan-potato-skins/",
  tags: ["vegan"],
  description: "These simple, budget-friendly vegan loaded potato skins make a delicious main dish with a side salad, but they’re also perfect as a quick snack the following day. The crispy twice-baked loaded potatoes skins are filled with a flavorful chickpea, caper, scallion, and sun-dried tomato mash, then topped with a creamy tahini sauce and fresh chives. They are filling, satisfying and just downright irresistible!"
},

  {
    title: "Creamy Herb Chicken",
    link: "https://cafedelites.com/quick-easy-creamy-herb-chicken/",
    tags: ["poultry"],
    description: "This Creamy Herb Chicken will become your favourite chicken recipe! WITH no heavy cream and dairy free options and just over 300 calories per serve!",
  },
  {
    title: "Garlic Chicken",
    link: "https://www.eatingwell.com/recipe/250495/garlic-chicken/",
    tags: ["poultry"],
    description: "Whole garlic cloves are mild when simmered with chicken in a simple white wine-mustard sauce in this garlic chicken recipe.",
  },
  {
  title: "Sheet Pan Chicken Fajitas",
  link: "https://www.foodnetwork.com/recipes/food-network-kitchen/sheet-pan-chicken-fajitas-3680272",
  tags: ["poultry"],
  description:"These protein-packed fajitas cleverly use a foil-lined baking sheet and broiler to make a quick and healthy weeknight meal with easy clean up.",
},
{
  title: "Lemon Chicken",
  link: "https://www.foodnetwork.com/recipes/rachael-ray/lemon-chicken-recipe-1939793",
  tags: ["poultry"],
  description:"This meal is an easy and healthy main dish that is infused with lemon to give it that wonderful tangy taste that will make you feel wonderful.",
},
{
  title: "Teriyaki Meatballs",
  link: "https://eatfresh.org/recipe/main-dish/teriyaki-meatballs",
  tags: ["poultry"],
  description:"Serve over brown rice and a side of veggies for a complete and balanced meal!",
},
{
  title: "Pineapple Chicken Stir-Fry",
  link: "https://eatfresh.org/recipe/main-dish/pineapple-chicken-stir-fry",
  tags: ["poultry"],
  description:"This meal poultry meal has a wonderful blend of pineapple chunks, soy sauce, and red pepper flakes that will take you on a stroll of sweet, spicy, and savory flavors!",
},
{
  title: "Kickin Chicken Pitas",
  link: "https://eatfresh.org/recipe/main-dish/kickn-chicken-pitas",
  tags: ["poultry"],
  description:"This crunchy snack is full of vitamins and minerals to keep you healthy and strong!",
},
{
  title: "Grilled Chicken Veggie Kabobs",
  link: "https://eatfresh.org/recipe/main-dish/grilled-chicken-vegetable-kabobs",
  tags: ["poultry"],
  description:"Try these kabobs at your next family barbecue.",
},
  {
    title: "Easy Turkey Skillet Dinner",
    link: "https://eatfresh.org/recipe/main-dish/easy-turkey-skillet-dinner",
    tags: ["poultry"],
    description:"Serve this hearty meal with whole wheat bread and green salad.",
},

  {
    title: "Fish Tacos",
    link: "https://eatfresh.org/recipe/main-dish/fish-tacos",
    tags: ["fish"],
    description:"Fish is full of Omega 3 fats, which is great for your brain and body.",
  },
  {
    title: "Spicy Broiled Lime Tilapia",
    link: "https://eatfresh.org/recipe/main-dish/spicy-broiled-tilapia-lime",
    tags: ["fish"],
    description:"You will be surprised at how fast this meal can be made! Broiled fish is crispy on the outside and moist on the inside.",
  },

{
  title: "Roast Fish with Curry Butter",
  link: "https://www.bonappetit.com/recipe/roast-fish-with-curry-butter",
  tags: ["fish"],
  description:"The slow-roasting method that turns salmon all buttery and luxurious works equally well on the whole wide delicious world of flaky white fish, from cod to haddock.",
},
{
  title: "Roast Salmon with Smashed Green Bean Salad",
  link: "https://www.bonappetit.com/recipe/cold-roast-salmon-with-smashed-green-bean-salad",
  tags: ["fish"],
  description:"Roasting salmon low and slow yields fish that stays moist and tender even when served chilled.",
},
{
  title: "Cod with Tomato Basil",
  link: "https://www.foodnetwork.com/recipes/food-network-kitchen/cod-with-tomato-basil-salsa-parchment-pack-3532786",
  tags: ["fish"],
  description:"Steaming the ingredients together in a neat parchment packet creates layers of flavor without adding much fat or salt. And with everything contained, cleanup is a breeze!",
},
{
  title: "Sushi Rice with Miso Caramel Glazed Salmon",
  link: "https://www.bonappetit.com/recipe/sushi-rice-with-miso-caramel-glazed-salmon",
  tags: ["fish"],
  description:"The tastiest rice is seasoned sushi rice. It has vinegar, salt, and sugar added to develop a wide range of flavors, making it a dynamic counterpart to simple fish.",
},
{
  title: "Zaatar Fish and Chips",
  link: "https://www.bonappetit.com/recipe/zaatar-fish-and-chips",
  tags: ["fish"],
  description:"Olives and superfast pickled onions balance out creamy-crispy potatoes and roast cod.",
},

{
  title: "Grilled Swordfish with Tomatoes and Oregano",
  link: "https://www.bonappetit.com/recipe/grilled-swordfish-with-tomatoes-and-oregano",
  tags: ["fish"],
  description:"We're flipping the script and marinating after grilling. Inspired by the technique called escabèche, where cooked fish and meat are preserved in an acidic mixture.",
},
{
  title: "Butter Roasted Halibut with Asparagus and Olives",
  link: "https://www.bonappetit.com/recipe/butter-roasted-halibut-with-asparagus-and-olives",
  tags: ["fish"],
  description:"Our best tip for cooking fish for a crowd? Slow-roast a single large fish fillet instead of making several small ones—it ensures that the fish is buttery and delicious.",
},
{
  title: "Sichuan Broiled Fish",
  link: "https://www.bonappetit.com/recipe/sichuan-boiled-fish",
  tags: ["fish"],
  description:"The flavors of this fish are out of control—super spicy, super intense, super delicious. This recipe moves fast, though, so stay on top of it by prepping and lining up your ingredients before you start cooking.",
},
  {
    title: "Macaroni and Cheese",
    link: "https://www.foodnetwork.com/recipes/ree-drummond/macaroni-and-cheese-recipe-1952854",
    tags: ["pasta"],
    description: ""
  },
  {
    title: "Baked Feta Pasta",
    link: "https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689",
    tags: ["pasta"],
    description: ""
 },
 {
   title: "Pasta with Lemon Herb Yogurt",
   link: "https://www.foodnetwork.com/recipes/geoffrey-zakarian/pasta-with-lemon-herb-yogurt-sauce-6593456",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Baby Shells Bechamel",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/baby-shells-bechamel-5670061",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "One Pot Super Easy Fusilli",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/one-pot-super-easy-fusilli-5423463",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Cauliflower Alfredo Sauce",
   link: "https://www.foodnetwork.com/recipes/katie-lee/cauliflower-alfredo-sauce-3278457",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Tortellini Salad with Tomato Arugula Dressing",
   link: "https://www.foodnetwork.com/recipes/jeff-mauro/tortellini-salad-with-tomato-arugula-dressing-2529993",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Vegie Lasagne",
   link: "https://www.foodnetwork.com/recipes/marcela-valladolid/veggie-lasagna-3089113",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Spaghetti Aglio-e-Olio",
   link: "https://www.foodnetwork.com/recipes/geoffrey-zakarian/spaghetti-aglio-e-olio-3106375",
   tags: ["pasta"],
   description: ""
 },
 {
   title: "Baked Feta Pasta",
   link: "https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689",
   tags: ["pasta"],
   description: ""
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
