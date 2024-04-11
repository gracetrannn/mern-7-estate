// src/App.js
import React, { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import axios from "axios";
import "./App.css";

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties")
      .then((response) => setProperties(response.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array to fetch properties once on mount

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const handleContactOwner = (contact) => {
    alert(`Contacting the owner of property is ${contact}`);
  };

  const handleDeleteProperty = (propertyId) => {
    axios
      .delete(`http://localhost:5000/api/properties/${propertyId}`)
      .then((response) => {
        // Filter out the deleted property from the state
        setProperties((prevProperties) =>
          prevProperties.filter(
            (property) => property._id !== propertyId
          )
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{}}>
      <h1 className="gfg" style={{ margin: "10px 10px" }}>
        Real Estate Management{/*GFG*/}
      </h1>
      <h1 style={{ marginTop: "10px" }}>Real Estate Management</h1>
      <div>
        <AddProperty onAddProperty={handleAddProperty} />
        <PropertyList
          onDeleteProperty={handleDeleteProperty}
          properties={properties}
          onContactOwner={handleContactOwner}
        />

      </div>
    </div>
  );
};

export default App;


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/