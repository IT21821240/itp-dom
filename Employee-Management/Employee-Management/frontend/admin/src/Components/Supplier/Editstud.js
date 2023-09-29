import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Editstud() {
  const [inputval, setInputval] = useState({
    name: '',
    address: '',
    products: [],
    mobile: '',
    email: '', // Added email field
  });

  const setData = (e) => {
    const { name, value, checked } = e.target;

    if (name === "products") {
      setInputval((prevVal) => {
        if (checked) {
          return {
            ...prevVal,
            [name]: [...prevVal[name], value],
          };
        } else {
          return {
            ...prevVal,
            [name]: prevVal[name].filter((product) => product !== value),
          };
        }
      });
    } else {
      setInputval((prevVal) => {
        return {
          ...prevVal,
          [name]: value,
        };
      });
    }
  };

  return (
    <div className='container mt-5'>
      <form className='mx-auto w-50 shadow p-5'>
        <Link className="btn btn-primary" to='/list'>
          Home
        </Link>
        <h3 className='mt-5'>Edit Details</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Supplier Company
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            onChange={setData}
            value={inputval.name}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Supplier Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="address"
            onChange={setData}
            value={inputval.address}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Supplier Product</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="sunglasses"
              name="products"
              value="Sunglasses"
              checked={inputval.products.includes("Sunglasses")}
              onChange={setData}
            />
            <label className="form-check-label" htmlFor="sunglasses">
              Sunglasses
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="glasses"
              name="products"
              value="Glasses"
              checked={inputval.products.includes("Glasses")}
              onChange={setData}
            />
            <label className="form-check-label" htmlFor="glasses">
              Glasses
            </label>
          </div>

          {/* Add more checkboxes for other options as needed */}

        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Supplier Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="mobile"
            onChange={setData}
            value={inputval.mobile}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Supplier Email
          </label>
          <input
            type="email" // Set input type to email
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={setData}
            value={inputval.email}
            aria-describedby="emailHelp"
          />
        </div>

        <button className='btn btn-primary'>Update</button>
      </form>
    </div>
  );
}