import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeFinder from './js/bike.js';

function showBikes(bikeData) {
  // Declare html outside loop so .html doesnt override each loop
  let html = `<div class="container flex p-2 row">`;
  bikeData.bikes.forEach(bike => {
    html += `<div class="col-xs-6 col-sm-4 col-md-3">`;
    html += `<div class="card p-2 m-3 row flex-item"><h3>Bike: </h3>`;
    if (bike.description) {
      html += `<p class="long-description">Description: ${bike.description}"</p>`;
    } else {
      html += `<p>No Description</p>`;
    }
    if (bike.stolen_location) {
      html += `<p>Stolen Location: ${bike.stolen_location}"</p>`;
    } else {
      html += `<p>No Location</p>`;
    }
    bike.large_img ? html += `<div class="image-container">Bike Image: <img src="${bike.large_img}" alt="image of stolen bike" /></div>` : html += `<p>No Image</p>`;
    // bike.large_img ? html += `Bike Image: <img src="${bike.large_img}" alt="image of stolen bike" width="250px" />` : html += `<p>No Image</p>`;
    // ternary operator
    // bike = bikeData.bikes[0]
    html += "</div></div>";
  });
  html += "</div>";
  $("#response").html(html);
  console.log(bikeData);
  // {bikes: [
  //   {bike1},
  //   {bike2},
  //   ...
  // ]}
}

$('#form').submit(async function(event) {
  event.preventDefault();
  let zip = $('#zip').val();
  this.reset();
  try {
    const bikeData = await BikeFinder.getBike(zip);
    showBikes(bikeData);
  } catch(error) {
    console.log(error);
  }
});

// 0: "date_stolen"
// 1: "description"
// 2: "frame_colors"
// 3: "frame_model"
// 4: "id"
// 5: "is_stock_img"
// 6: "large_img"
// 7: "location_found"
// 8: "manufacturer_name"
// 9: "external_id"
// 10: "registry_name"
// 11: "registry_url"
// 12: "serial"
// 13: "status"
// 14: "stolen"
// 15: "stolen_location"
// 16: "thumb"
// 17: "title"
// 18: "url"
// 19: "year"
