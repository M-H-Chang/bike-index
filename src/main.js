import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeFinder from './js/bike.js';

function showBikes(response) {
  console.log(response);
}

$('#form').submit(async function(event) {
  event.preventDefault();
  let zip = $('#zip').val();
  this.reset();
  try {
    const response = await BikeFinder.getBike(zip);
    showBikes(response);
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