import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    setItems([]);
    setPage(1);
    fetchItems();
  }, [searchTerm, searchType]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/items/search/${searchType}/${searchTerm}`);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAllItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/items`);
      const data = await response.json();
      console.log(data)
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleScroll = () => {
    if (!loading && hasMore && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const sort = (type) => {
    if(type==="asc"){
      let arr = items.sort((a,b) => a.price-b.price)
      console.log(arr)
      setItems([...arr]);
      console.log(items);
    }
    else{
      let arr = items.sort((a,b) => b.price-a.price)
      console.log(arr)
      setItems([...arr]);
      console.log(items);
    }
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="select-container">
        <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="name">Name</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
        </select>
      </div>
      <input
        type="text"
        placeholder={`Search by ${searchType}...`}
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button
        value={searchTerm}
        onClick={() => sort("asc")}
      >Sort Ascending</button>
      <button
        value={searchTerm}
        onClick={() => sort("dsc")}
      >Sort Descending</button>
      <ul>
        {items.map((item, index) => (
          <li>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <img src={item.image} alt={item.name} />
          </li>
        ))}
        {loading && <li>Loading...</li>}
      </ul>
    </div>
  );
}

export default App;
