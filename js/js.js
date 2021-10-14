const url =
  "http://nomames.dk/kea/wp/childtheme/wp-json/wp/v2/property?per_page=10";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProp);
}

function showProp() {}
{
  /* <div class="propertytemplates">
<img src="/assets/Property1.jpg" alt="building" />
<div class="locationinfo">
  <div class="line1">
    <span class="adresse">1058 W Catalpa</span>
    <span class="number">#3E</span>
  </div>
  <div class="line2">
    <span class="City">Chicago</span>
    <span class="state">IL</span>
    <span class="postal">60640</span>
  </div>
</div>
<div class="specs">
  <span class="bedrooms"> <span class="numbbed">1</span> BED</span>
  <span class="bathrooms"
    ><span class="numbbath">1</span> BATH</span
  >
  <span class="sqfeet"
    ><span class="numbsqfeet">800</span> SQ FEET</span
  >
</div>
<div class="clicktoview">View property</div>
</div>
</template> */
}
