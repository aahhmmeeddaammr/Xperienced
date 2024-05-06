
function dspliayoffers() {
  let x=[1214,21412,124,124,12,412,4,124,]
  var offerListItems = document.getElementById("offer-list-items");
  x.forEach((offerData, index)=> {
      var listItem = document.createElement("div");
      listItem.innerHTML = `
      <div class="box">
      <p>
        OOP
      </p>
      <div class="text">
        محتاج حد يشرحلي  يعني ايه  copy constructor<br />
        و ايه الفرق بينه و بين الـ deep copy and shallow copy
      </div>
      <div class="Add">
        <div class="price">
          25-50 EGP
        </div>
        <a href="Add_Offer.html" class="btn btn-info me-5">  Add an offer</a>
        <a href="#" class="btn btn-danger" onclick="removeoffer(${index})">Remove offer</a>

      </div>

   
  </div>
      `;
      offerListItems.appendChild(listItem);
  });
}
function removeoffer(index) {
  offerDataArray.splice(index, 1);
  window.localStorage.setItem('offerDataArray', JSON.stringify(offerDataArray));
  window.location.reload();
}

dspliayoffers();  



