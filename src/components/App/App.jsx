import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    
  useEffect(() => {
    fetchList ()
  }, [])

  let [galleryList, setGalleryList] = useState([]);
  
const fetchList = () => {
  axios({ 
    method: "GET", //using axios to GET data to App
    url: '/gallery'
  })
  .then((response) => {
    console.log(`entire response`, response);
    setGalleryList(response.data)
  })
  .catch(function (error) {
    console.log(`ERROR on GET `, error);
  })
} //end FETCH(GET)List 
//tested GET in Postman Array or Objects returns


  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img className="resize" src="images/bike_path.jpg"/>
      </div>
    );
}

export default App;
