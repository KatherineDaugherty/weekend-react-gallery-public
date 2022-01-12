import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  useEffect(() => {
    fetchList()
  }, []) //ONREADY GET array at Mount

  let [galleryList, setGalleryList] = useState([{}]);

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
  console.log('this is GalleryList', GalleryList);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryList={galleryList} fetchList={fetchList} />

      <footer>
        <h6> Created by: Katherine Daugherty </h6>
      </footer>
    </div>
  );
}

export default App;
