const url =
  "http://nomames.dk/kea/wp/childtheme/wp-json/wp/v2/property?per_page=10&_embed";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  /*   console.log(data);
   */ data.forEach(showProp);
}

function showProp(prop) {
  /*   console.log(prop);
   */ const template = document.querySelector("#maintemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector(".propimg").src =
    prop._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
  copy.querySelector(".adresse").textContent = prop.street_name;
  copy.querySelector(".number").textContent = prop.number;
  copy.querySelector(".City").textContent = prop.city;
  copy.querySelector(".state").textContent = prop.state;
  copy.querySelector(".postal").textContent = prop.postal_code;
  copy.querySelector(".numbbed").textContent = prop.bedrooms;
  copy.querySelector(".numbbath").textContent = prop.bathrooms;
  copy.querySelector(".numbsqfeet").textContent = prop.square_feet;

  const parent = document.querySelector(".main");
  parent.appendChild(copy);
}
