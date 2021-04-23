// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// the next two lines are calling the Airtable API!!
var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({ apiKey: "key8LK4mjvPfwsiwV" }).base(
  "appSdraM5BQY9dM9S"
);

// create an empty array for all of your items to go into
let allItems = [];

// inside the () after base put the name of YOUR spreadsheet
base('plates').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
  });


  // if there is another page of items, get those too
  fetchNextPage();

}, 

function done(err) {
  if (err) { console.error(err); 
    return; 
}

  console.log(allItems);
  setTable(allItems);
  console.log('?');


});





function setTable(allItems) {
    // make a container div and append it to the body
    // this way we can append all of our items to a div which we can style later
////////
let container = document.createElement("div");
container.classList.add("slide");
container.setAttribute('id', 'deck');
document.body.appendChild(container);
document.querySelector(".outer").append(container);
console.log('xxxxxxxxxxxxxxx') 



// run a forEach loop on your array, with each item
// then make a new HTML element and position it somewhere on the page 
allItems.forEach(function(item) {
  // store the name of the item (from your spreadsheet) into a variable
  let name = item.fields.items;
  // store the image for the item into a variable
  let imageUrl = item.fields.images[0].url;


  let itemImage = document.createElement('img');
  itemImage.src = imageUrl;
  container.appendChild(itemImage);
  itemImage.classList.add(item.fields.names);
  console.log('xxxxxxxxxxxxxxx') 




//random order
$(document).ready(function() {
    console.log( "ready!" );
  
    let a = $("#deck > img").remove().toArray();
    for (let i = a.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let bi = a[i];
        let bj = a[j];
        a[i] = bj;
        a[j] = bi;
    }
    $("#deck").append(a);
    console.log( "yay" );
});

    })
  }


////////


         