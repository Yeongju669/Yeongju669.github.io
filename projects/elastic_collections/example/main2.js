
var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({ apiKey: "key8LK4mjvPfwsiwV" }).base(
  "appSdraM5BQY9dM9S"
);

let allItems = [];


base('plates').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });
  fetchNextPage();
  
}, 

function done(err) {
  if (err) { console.error(err); return; }

console.log(allItems);

  // now, call a new function to do stuff with your data and pass the allItems array into it
  setTable(allItems);
});

function setTable() {
    let placement = document.createElement("div");
    placement.classList.add("left");
    document.body.appendChild(placement);
    console.log("a");

    { document.querySelector(".left").append(placement);
        placement.classList.add();
      } 

  
    // run a forEach loop on your array, with each item
    // then make a new HTML element and position it somewhere on the page 
    allItems.forEach(function(item) {
      let imageUrl = item.fields.images[0].url;
      let itemImage = document.createElement('img');
      itemImage.src = imageUrl;
      itemImage.classList.add(item.fields.image);
      placement.appendChild(itemImage);
      console.log('xxxxxxxxxxxxxxx') 
    })
  }


 





