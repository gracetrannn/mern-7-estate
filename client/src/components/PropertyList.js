import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const PropertyList = ({ onDeleteProperty, properties, onContactOwner }) => {


  return (
    <div>
      <h1 style={{ color: "#007BFF" }}>Property List</h1>

      <div className="property-list">
        {properties.map((property) => (
          <div key={property._id} className="property-card">
            <h3>{property.title}</h3>
            <p>Description: {property.description}</p>
            <p>Contact: {property.contact} </p>
            <div>
              <img src={property.image}
                alt="Post Media"
              />
            </div>
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button onClick={() => onContactOwner(property.contact)}>Contact Owner</button>
              <button onClick={() => onDeleteProperty(property._id)}>Delete Property</button>
            </div>
          </div>
        ))
        }
      </div>

    </div >

  )
}

export default PropertyList;
