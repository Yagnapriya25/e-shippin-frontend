import React, { useState } from "react";
import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productPost } from "../Redux/actions/productAction";
import Loading from "./Loading";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cat_id } = useParams();
  const userInfo = localStorage.getItem("id"); // Ensure this is the user ID

  const [credential, setCredential] = useState({
    name: '',
    quantity: '',
    price: '',
    description1: '',
    description2: '',
    description3: '',
    images: [],
    instock: ''
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setCredential({
      ...credential,
      images: Array.from(e.target.files)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const data = new FormData();
    data.append('name', credential.name);
    data.append('quantity', credential.quantity);
    data.append('price', credential.price);
    data.append('description1', credential.description1);
    data.append('description2', credential.description2);
    data.append('description3', credential.description3);
    data.append('instock', credential.instock);
    
    credential.images.forEach((file) => {
      data.append('images', file);
    });

    setLoading(true);
    dispatch(productPost(data, cat_id, userInfo))
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          navigate(`/home/${localStorage.getItem("token")}`);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
      {loading ? <Loading /> : (
        <Base>
          <div className="h-[90%] md:h-[95%] flex justify-center">
            <div className="pt-20 w-6/6 md:w-5/6 lg:w-4/6 xl:w-4/6 bg-white flex flex-col gap-6 justify-center items-center overflow-x-hidden overflow-y-auto hide-scrollbar">
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6" encType="multipart/form-data">
                <input
                  type="file"
                  multiple
                  className="relative left-16 md:left-11 lg:left-11 xl:left-11"
                  onChange={handleFileChange}
                  name="images"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={credential.name}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <input
                  type="number"
                  name="instock"
                  placeholder="Quantity"
                  value={credential.instock}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={credential.price}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <input
                  type="text"
                  name="description1"
                  placeholder="Description 1"
                  value={credential.description1}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <input
                  type="text"
                  name="description2"
                  placeholder="Description 2"
                  value={credential.description2}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <input
                  type="text"
                  name="description3"
                  placeholder="Description 3"
                  value={credential.description3}
                  onChange={handleChange}
                  className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
                />
                <button
                  type="submit"
                  className="w-28 p-1 text-white bg-purple-600"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        </Base>
      )}
    </div>
  );
}
