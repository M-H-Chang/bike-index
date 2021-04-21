export default class BikeFinder {
  static async getBike(zip) {
    const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${zip}&50=10&stolenness=stolen`);
    return await response.json();
  }
}

// https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=97303&distance=10&stolenness=stolen
// `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${zip}&50=10&stolenness=stolen`


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
