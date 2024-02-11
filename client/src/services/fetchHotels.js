
const fetchHotels = () => {
    return fetch('http://localhost:8800/api/hotels')
      .then(response => response.json())
      .catch(error => console.error("Error accessing data:", error));
  };
  
  export default fetchHotels;
  