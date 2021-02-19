import React, { useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import axios from 'axios'

const App =() => {

  const [items, setItems] = useState([])
  const [isFetched, setIsFetched] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.openbrewerydb.org/breweries`)
      //console.log(result.data)
      console.log(1)
      setItems(result.data)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header/>
      <Card items={items}/>
    </div>
  );
}

export default App;
