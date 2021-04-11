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

///////
     
      let column = document.createElement("div");
      column.classList.add("column");
      console.log('1') 
  
///////

    allItems.forEach(function(item) {
      let imageUrl = item.fields.images[0].url;
      let itemImage = document.createElement('img');
      itemImage.src = imageUrl;
      itemImage.classList.add(item.fields.names);
      itemImage.classList.add(item.fields.lr);
      container.appendChild(itemImage);
    })


  }
  console.log('aaaa') 

