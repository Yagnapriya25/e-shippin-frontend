import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/actions/productAction";
import p_img from '../Images/realme-narzo-30-pro-5g (1).jpg'

export default function Product() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { productInfo, error } = useSelector((state) => state.product);
  const { p_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      await dispatch(getSingleProduct(p_id));
      setLoading(false);
    };

    fetchProduct();
  }, [dispatch, p_id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  // Ensure productInfo is available and has the expected structure
  if (!productInfo) {
    return <div>No product found.</div>; // Handle case where product is not found
  }

  const { name, price, description, images } = productInfo;

  return (
    <div className="h-screen w-screen">
      <Base>
        <div className="grid sm:grid-cols-12 h-full overflow-y-scroll hide-scrollbar pb-16 md:pb-10 lg:mb-6 xl:pb-6">
          <div className="hidden md:block xl:block lg:block col-span-2 flex flex-col">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image.image} // Assuming 'image' is the correct property for the image URL
                  alt={`product-thumbnail-${index}`}
                  className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg shadow-black cursor-pointer"
                />
              ))
            ) : (
              <img
                src={p_img}
                alt="default"
                className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg shadow-black cursor-pointer"
              />
            )}
          </div>

          <div className="col-span-5 h-4/6 w-4/6 md:h-4/6 lg:h-5/6 xl:h-5/6 md:w-4/6 lg:w-4/6 xl:w-4/6">
            <img
              src={images[0]?.image || p_img} // Use the first image or a default image
              alt="product"
              className="h-full w-full rounded-2xl shadow-lg shadow-black ml-12 md:ml-0 lg:ml-0 xl:ml-0"
            />
          </div>

          <div className="block md:hidden col-span-2 flex flex-row gap-5 ml-6">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt={`product-thumbnail-${index}`}
                  className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
                />
              ))
            ) : (
              <img
                src={p_img}
                alt="default"
                className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
              />
            )}
          </div>

          <div className="col-span-5 flex flex-col p-2 md:p-3 lg:p-5 xl:p-5">
            <ul className="list-disc px-0">
              {description.map((desc, index) => (
                <li key={index} className="text-sm md:text-md lg:text-lg xl:text-lg p-2 md:p-1 lg:p-0 xl:p-0">
                  {desc}
                </li>
              ))}
            </ul>
            <h2 className="text-sm md:text-md lg:text-lg xl:text-lg font-bold px-20 md:px-16 lg:px-28 xl:px-28 py-4">
              PRICE: ₹{price}
            </h2>
            <div className="flex gap-3 mt-5 mx-2">
              <button className="bg-blue-500 text-white px-4 md:px-2 lg:px-4 xl:px-4 py-2 rounded text-sm lg:text-lg xl:text-lg">
                <i className="bx bx-shopping-bag"></i> BUY NOW
              </button>
              <button className="bg-green-500 text-white px-4 md:px-2 lg:px-4 xl:px-4 py-2 rounded text-sm lg:text-lg xl:text-lg">
                <i className="bx bx-cart"></i> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}
