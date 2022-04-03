//author: amanda auld
//date: 03.31.2022
//public domain

//CodingNepal on YouTube used as reference

const ul = document.querySelector("ul"),
input = ul.querySelector("input"),
countNumb = document.querySelector(".details span")

let maxTags = 10,
tags = [];

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
  countTag();
}

//create function that lets user add a new tag
function addTag(e){
  if(e.key == "Enter"){
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

input.addEventListener("keyup", addTag);

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
    tags: ["vegan", "vegetarian"]
  },
  {
    title: "Vegan Broccoli Cheddar Soup",
    link: "https://hippocrateswellness.org/learning-centre/meal-plans-recipes/raw-broccoli-better-than-cheddar-soup/",
    tags: ["vegan", "vegetarian"]
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
    title: "Macaroni and Cheese",
    link: "https://www.foodnetwork.com/recipes/ree-drummond/macaroni-and-cheese-recipe-1952854",
    tags: "pasta"
  },
  {
    title: "Baked Feta Pasta",
    link: "https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689",
    tags: ["pasta"]
  }

]

//function that searches through database and generates output for user
