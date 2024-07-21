import React, { useState } from "react";
import Base from "../Base/Base";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    description1: '',
    description2: '',
    description3: '',
    images: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('quantity', formData.quantity);
    data.append('price', formData.price);
    data.append('description1', formData.description1);
    data.append('description2', formData.description2);
    data.append('description3', formData.description3);
    formData.images.forEach((file) => {
      data.append('images', file);
    });

    // Add your fetch POST request here

    console.log('Form submitted');
  };

  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
      <Base>
        <div className="h-[90%] md:h-[95%] flex justify-center">
          <div className="pt-20 w-6/6 md:w-5/6 lg:w-4/6 xl:w-4/6 bg-white flex flex-col gap-6 justify-center items-center overflow-x-hidden overflow-y-auto hide-scrollbar">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
              <input
                type="file"
                multiple
                className="relative left-16 md:left-11 lg:left-11 xl:left-11"
                onChange={handleFileChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <input
                type="text"
                name="description1"
                placeholder="Description 1"
                value={formData.description1}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <input
                type="text"
                name="description2"
                placeholder="Description 2"
                value={formData.description2}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <input
                type="text"
                name="description3"
                placeholder="Description 3"
                value={formData.description3}
                onChange={handleChange}
                className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
              />
              <button
                type="submit"
                className="w-28 p-1 text-white bg-purple-600"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </Base>
    </div>
  );
}
