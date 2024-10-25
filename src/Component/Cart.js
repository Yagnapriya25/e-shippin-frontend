// import React, { useEffect, useState } from "react";
// import Base from "../Base/Base";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   cartRemove,
//   decreaseCart,
//   emptyCart,
//   getCart,
//   increaseCart,
// } from "../Redux/actions/cartAction";
// import { getAddress } from "../Redux/actions/addressAction";
// import Loading from "./Loading";

// export default function Cart() {
//   const [loadingCart, setLoadingCart] = useState(false);
//   const [loadingUpdate, setLoadingUpdate] = useState(false);
//   const dispatch = useDispatch();
//   const { cartInfo } = useSelector((state) => state.cart);
//   const { addressInfo } = useSelector((state) => state.address);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const userInfo = localStorage.getItem("id");

//   useEffect(() => {
//     const fetchCart = async () => {
//       setLoadingCart(true);
//       try {
//         await dispatch(getCart(userInfo));
//       } catch (error) {
//         console.log("Error fetching cart:", error);
//       } finally {
//         setLoadingCart(false);
//       }
//     };

//     fetchCart();
//   }, [dispatch, userInfo]);

//   useEffect(() => {
//     const fetchAddress = async () => {
//       setLoadingCart(true);
//       try {
//         await dispatch(getAddress(userInfo));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchAddress();
//   }, [dispatch, userInfo]);

//   const items = cartInfo?.cart?.items || [];
//   const totalPrice = cartInfo?.totalPrice?.totalPrice || 0;
//   const productDetails = cartInfo?.totalPrice?.productDetails || [];

//   const formatPrice = (amount) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   const handleQuantityIncrease = async (productId) => {
//     if (loadingUpdate) return; // Prevent further clicks while updating
//     setLoadingUpdate(true); // Set loading state for the operation
//     console.log("Button clicked:", productId);

//     try {
//       await dispatch(increaseCart(userInfo, productId));
//       console.log("Data updated");
//       // Refetch the cart to get the latest data
//       await dispatch(getCart(userInfo)); // Refetch the cart
//     } catch (error) {
//       console.error("Error occurred:", error);
//     } finally {
//       setLoadingUpdate(false); // Reset loading state after operation
//     }
//   };

//   const handleQuantityDecrease = async (productId) => {
//     if (loadingUpdate) return; // Prevent further clicks while updating
//     setLoadingUpdate(true); // Set loading state for the operation
//     console.log("Button clicked:", productId);

//     try {
//       await dispatch(decreaseCart(userInfo, productId));
//       console.log("Data updated");
//       // Refetch the cart to get the latest data
//       await dispatch(getCart(userInfo)); // Refetch the cart
//     } catch (error) {
//       console.error("Error occurred:", error);
//     } finally {
//       setLoadingUpdate(false); // Reset loading state after operation
//     }
//   };

//   const handleRemoveProduct = async (productId) => {
//     if (loadingUpdate) return; // Prevent further clicks while updating
//     setLoadingUpdate(true); // Set loading state for the operation
//     console.log("Button clicked:", productId);

//     try {
//       await dispatch(cartRemove(userInfo, productId));
//       console.log("Data updated");
//       // Refetch the cart to get the latest data
//       await dispatch(getCart(userInfo)); // Refetch the cart
//     } catch (error) {
//       console.error("Error occurred:", error);
//     } finally {
//       setLoadingUpdate(false); // Reset loading state after operation
//     }
//   };

//   const handleRemoveCart = async () => {
//     if (loadingCart) return;
//     setLoadingCart(true);
//     try {
//       await dispatch(emptyCart(userInfo));
//     } catch (error) {
//       console.log("Error fetching cart:", error);
//     } finally {
//       setLoadingCart(false);
//     }
//   };
//   const handleEditAddress = () => {
//     navigate(`/address_edit/${token}`);
//   };
//   const handleAddAddress = ()=>{
//     navigate(`/addAddress/${token}`);

//   }

//   return (
//     <div className="h-screen w-screen bg-slate-200">
//     {
//       loadingCart ? <div><Loading/></div> :
//       <Base>
//      <div className="grid grid-cols-1 md:grid-cols-2 mx-2 my-2 md:mx-8 md:my-8 lg:mx-11 lg:my-11">
//         <div>
//           <h2 className="font-['Kings'] text-sm lg:text-3xl md:text-xl">
//             CART
//           </h2>
//           <div className="flex justify-between font-['Kings']">
//             <h3 className="text-sm md:text-md lg:text-lg">
//               Product: {items.length}
//             </h3>
//             <h3
//               className="text-[#C73838] cursor-pointer text-sm md:text-md lg:text-lg"
//               onClick={handleRemoveCart}
//             >
//               EMPTY CART
//             </h3>
//           </div>
//           <div className="overflow-y-scroll h-[calc(87vh-10rem)] hide-scrollbar">
//             <div>
//               {!addressInfo ? (
//                 <div className="bg-white h-14 md:h-14 md:mt-16 lg:h-18 xl:h-20 lg:mt-10 p-5 flex justify-around">
//                   <button className="md:bg-blue-500 w-28  p-0 text-small h-5 lg:bg-blue-500 xl:bg-blue-500 bg-blue-500 xl:w-32 lg:w-28 lg:h-8 lg:p-0 w-16 lg:w-20 text-white text-[16px] md:text-md lg:text-lg shadow-lg shadow-[#000000]" onClick={handleAddAddress}>
//                     Add Address
//                   </button>{" "}
//                 </div>
//               ) : (
//                 <div className="bg-white h-32 md:h-36 md:mt-6 lg:h-44 xl:h-48 lg:mt-10 p-5 flex justify-around">
//                 <div className="text-[12px] md:text-md lg:text-[16px]">
//                 <p>{addressInfo.address && addressInfo.address.name ? addressInfo.address.name : "john doe"}</p>
//                 <p>{addressInfo.address && addressInfo.address.city ? addressInfo.address.city : "Delhi"}</p>
//                 <p>{addressInfo.address && addressInfo.address.district ? addressInfo.address.district : "Delhi"}</p>
//                 <p>{addressInfo.address && addressInfo.address.landmark ? addressInfo.address.landmark : "Near Taj Mahal"}</p>
//                 <p>{addressInfo.address && addressInfo.address.pincode ? addressInfo.address.pincode : "283007"}</p>
//                 <p>{addressInfo.address && addressInfo.address.phoneNumber ? addressInfo.address.phoneNumber : "9876543210"}</p>
//               </div>

//                   <div className="flex justify-center items-center">
//                     <button
//                       className="bg-blue-500 lg:p-1 w-12 lg:w-16 text-white text-[12px] text-md lg:text-lg shadow-lg shadow-[#000000]"
//                       onClick={handleEditAddress}
//                     >
//                       EDIT
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             {items.length > 0 ? (
//               items.map((p) => {
//                 const productDetail = productDetails.find(
//                   (detail) => detail.productId === p.product?._id
//                 );
//                 return (
//                   <div
//                     className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between"
//                     key={p._id}
//                   >
//                     <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
//                       <img
//                         src={p.product?.images?.[0]?.image || ""}
//                         alt="product"
//                         className="h-full"
//                       />
//                     </div>
//                     <div className="text-[12px] md:text-[14px] lg:text-lg">
//                       <h3>{p.product?.name || "Unknown Product"}</h3>
//                       <h4 className="text-[#C73838]">
//                         {p.product?.category?.name || "No Category"}
//                       </h4>
//                     </div>
//                     <div className="flex gap-0 md:gap-1 lg:gap-2">
//                       <i
//                         className="bx bx-plus text-[12px] lg:text-lg cursor-pointer"
//                         onClick={() => handleQuantityIncrease(p.product?._id)}
//                       ></i>
//                       <p className="text-[12px] lg:text-lg">{p.quantity}</p>
//                       <i
//                         className="bx bx-minus cursor-pointer text-[12px] lg:text-lg"
//                         onClick={() => handleQuantityDecrease(p.product?._id)}
//                       ></i>
//                     </div>
//                     <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
//                       {productDetail ? (
//                         <h3>{formatPrice(productDetail.totalItemPrice)}</h3>
//                       ) : (
//                         <h3>Price not available</h3>
//                       )}
//                       <i
//                         className="bx bxs-trash-alt text-center cursor-pointer text-red-500"
//                         onClick={() => handleRemoveProduct(p.product?._id)}
//                       ></i>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <div className="text-center text-gray-500">
//                 Your cart is empty
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="block md:hidden flex justify-around my-3">
//           <h4 className="">{formatPrice(totalPrice)}</h4>
//           <button className="bg-red-500 px-2 text-white">PLACE ORDER</button>
//         </div>
//         <div className="hidden md:block bg-white md:h-80 lg:h-96 w-5/6 md:mx-10 md:my-14 lg:mx-20 lg:my-10 md:px-10 md:pt-5 lg:px-20 lg:pt-10 overflow-hidden">
//           <div className="overflow-y-scroll md:h-40 lg:h-36 hide-scrollbar">
//             {productDetails.length > 0 ? (
//               productDetails.map((detail, index) => (
//                 <div
//                   className="flex justify-between text-[15px] lg:text-[16px]"
//                   key={index}
//                 >
//                   <h3>{detail.productName || "Product Name"}</h3>
//                   <h2>{formatPrice(detail.totalItemPrice)}</h2>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-gray-500">
//                 No product details available
//               </div>
//             )}
//           </div>

//           <hr className="border-black" />
//           <div className="flex justify-between pt-8 lg:pt-10">
//             <h2>Total</h2>
//             <h1>{formatPrice(totalPrice)}</h1>
//           </div>
//           <div className="text-center my-2">
//             <button className="bg-blue-500 w-24 text-[12px] lg:text-[16px] lg:w-44 text-white shadow-lg shadow-[#000000] p-2">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//        </Base>
//       }
        
     
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cartRemove,
  decreaseCart,
  emptyCart,
  getCart,
  increaseCart,
} from "../Redux/actions/cartAction";
import { getAddress } from "../Redux/actions/addressAction";
import Loading from "./Loading";


const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(new Error("Razorpay SDK failed to load."));
    };
    document.body.appendChild(script);
  });
};

export default function Cart() {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const dispatch = useDispatch();
  const { cartInfo } = useSelector((state) => state.cart);
  const { addressInfo } = useSelector((state) => state.address);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("id");

  useEffect(() => {
    const fetchCart = async () => {
      setLoadingCart(true);
      try {
        await dispatch(getCart(userInfo));
      } catch (error) {
        console.log("Error fetching cart:", error);
      } finally {
        setLoadingCart(false);
      }
    };

    fetchCart();
  }, [dispatch, userInfo]);

  useEffect(() => {
    const fetchAddress = async () => {
      setLoadingCart(true);
      try {
        await dispatch(getAddress(userInfo));
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCart(false);
      }
    };
    fetchAddress();
  }, [dispatch, userInfo]);

  useEffect(() => {
    const loadScript = async () => {
      try {
        await loadRazorpayScript();
        setRazorpayLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    loadScript();
  }, []);

  const items = cartInfo?.cart?.items || [];
  const totalPrice = cartInfo?.totalPrice?.totalPrice || 0;
  const productDetails = cartInfo?.totalPrice?.productDetails || [];


  // console.log(cartInfo.cart._id);
  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleQuantityIncrease = async (productId) => {
    if (loadingUpdate) return;
    setLoadingUpdate(true);
    try {
      await dispatch(increaseCart(userInfo, productId));
      await dispatch(getCart(userInfo));
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const handleQuantityDecrease = async (productId) => {
    if (loadingUpdate) return;
    setLoadingUpdate(true);
    try {
      await dispatch(decreaseCart(userInfo, productId));
      await dispatch(getCart(userInfo));
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const handleRemoveProduct = async (productId) => {
    if (loadingUpdate) return;
    setLoadingUpdate(true);
    try {
      await dispatch(cartRemove(userInfo, productId));
      await dispatch(getCart(userInfo));
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const handleRemoveCart = async () => {
    if (loadingCart) return;
    setLoadingCart(true);
    try {
      await dispatch(emptyCart(userInfo));
    } catch (error) {
      console.log("Error fetching cart:", error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleEditAddress = () => {
    navigate(`/address_edit/${token}`);
  };

  const handleAddAddress = () => {
    navigate(`/addAddress/${token}`);
  };

  const handleBuyNow = async () => {
    if (!razorpayLoaded) {
      alert("Razorpay SDK not loaded!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/order/purchase/${userInfo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();
      console.log(data);
      console.log(response);
      if (response.ok) {
        const options = {
          key: process.env.REACT_APP_SECRET_KEY,
          amount: data.order.amount,
          currency: data.currency,
          name: "E-Shippin",
          description: "Purchase Description",
          order_id: data.order.id,
          handler: async function (response) {
            await verifyPayment(response);
          },
          prefill: {
            name: addressInfo.address.name,
            email: addressInfo.address.email || "",
            contact: addressInfo.address.phoneNumber,
          },
          theme: {
            color: "#F37254",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert(data.error || "Failed to create order!");
      }
    } catch (err) {
      console.error("Payment error: ", err);
      alert("Something went wrong while initiating payment!");
    }
  };

  const verifyPayment = async (response) => {
    try {
        const verificationResponse = await fetch(`${process.env.REACT_APP_URL}/order/payment/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
            }),
        });

        const verificationData = await verificationResponse.json();
        if (verificationResponse.ok) {
          dispatch(emptyCart(userInfo))
            setTimeout(() => {
                navigate(`/home/${token}`);
            }, 1000);
            // Optionally, you can log the verification data or show a success message on the UI
        } else {
            console.error("Payment verification failed:", verificationData.error);
            // Optionally handle verification failure here
        }
    } catch (error) {
        console.error("Verification error: ", error);
        // Optionally handle general verification errors here
    }
};

  return (
    <div className="w-screen bg-slate-200">
      {loadingCart ? (
        <Loading />
      ) : (
        <Base>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-2 my-2 md:mx-8 md:my-8 lg:mx-11 lg:my-11">
            <div>
              <h2 className="font-['Kings'] text-sm lg:text-3xl md:text-xl">CART</h2>
              <div className="flex justify-between font-['Kings']">
                <h3 className="text-sm md:text-md lg:text-lg">Product: {items.length}</h3>
                <h3 className="text-[#C73838] cursor-pointer text-sm md:text-md lg:text-lg" onClick={handleRemoveCart}>
                  EMPTY CART
                </h3>
              </div>
              <div className="overflow-y-scroll h-[calc(87vh-10rem)] hide-scrollbar">
                <div>
                  {!addressInfo ? (
                    <div className="bg-white h-14 md:h-14 md:mt-16 lg:h-18 xl:h-20 lg:mt-10 p-5 flex justify-around">
                      <button
                        className="md:bg-blue-500 w-28 p-0 text-small h-5 lg:bg-blue-500 xl:bg-blue-500 bg-blue-500 xl:w-32 lg:w-28 lg:h-8 lg:p-0 w-16 lg:w-20 text-white text-[16px] md:text-md lg:text-lg shadow-lg shadow-[#000000]"
                        onClick={handleAddAddress}
                      >
                        Add Address
                      </button>
                    </div>
                  ) : (
                    <div className="bg-white h-32 md:h-36 md:mt-6 lg:h-44 xl:h-48 lg:mt-10 p-5 flex justify-around">
                      <div className="text-[12px] md:text-md lg:text-[16px]">
                        <p>{addressInfo.address.name || "John Doe"}</p>
                        <p>{addressInfo.address.city || "Delhi"}</p>
                        <p>{addressInfo.address.district || "Delhi"}</p>
                        <p>{addressInfo.address.landmark || "Near Taj Mahal"}</p>
                        <p>{addressInfo.address.pincode || "283007"}</p>
                        <p>{addressInfo.address.phoneNumber || "9876543210"}</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          className="bg-blue-500 lg:p-1 w-12 lg:w-16 text-white text-[12px] text-md lg:text-lg shadow-lg shadow-[#000000]"
                          onClick={handleEditAddress}
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {items.length > 0 ? (
                  items.map((p) => {
                    const productDetail = productDetails.find((detail) => detail.productId === p.product?._id);
                    return (
                      <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between" key={p._id}>
                        <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
                          <img src={p.product?.images?.[0]?.image || ""} alt="product" className="h-full" />
                        </div>
                        <div className="text-[12px] md:text-[14px] lg:text-lg">
                          <h3>{p.product?.name || "Unknown Product"}</h3>
                          <h4 className="text-[#C73838]">{p.product?.category?.name || "No Category"}</h4>
                        </div>
                        <div className="flex gap-0 md:gap-1 lg:gap-2">
                          <i
                            className="bx bx-plus text-[12px] lg:text-lg cursor-pointer"
                            onClick={() => handleQuantityIncrease(p.product?._id)}
                          ></i>
                          <p className="text-[12px] lg:text-lg">{p.quantity}</p>
                          <i
                            className="bx bx-minus cursor-pointer text-[12px] lg:text-lg"
                            onClick={() => handleQuantityDecrease(p.product?._id)}
                          ></i>
                        </div>
                        <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                          {productDetail ? (
                            <h3>{formatPrice(productDetail.totalItemPrice)}</h3>
                          ) : (
                            <h3>Price not available</h3>
                          )}
                          <i
                            className="bx bxs-trash-alt text-center cursor-pointer text-red-500"
                            onClick={() => handleRemoveProduct(p.product?._id)}
                          ></i>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center text-gray-500">Your cart is empty</div>
                )}
              </div>
            </div>

            <div className="block md:hidden flex justify-around my-3">
              <h4>{formatPrice(totalPrice)}</h4>
             <button className="bg-red-500 px-2 text-white" onClick={handleBuyNow}>PLACE ORDER</button>
            </div>
            <div className="hidden md:block bg-white md:h-80 lg:h-96 w-5/6 md:mx-10 md:my-14 lg:mx-20 lg:my-10 md:px-10 md:pt-5 lg:px-20 lg:pt-10 overflow-hidden">
              <div className="overflow-y-scroll md:h-40 lg:h-36 hide-scrollbar">
                {productDetails.length > 0 ? (
                  productDetails.map((detail, index) => (
                    <div className="flex justify-between text-[15px] lg:text-[16px]" key={index}>
                      <h3>{detail.productName || "Product Name"}</h3>
                      <h2>{formatPrice(detail.totalItemPrice)}</h2>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">No product details available</div>
                )}
              </div>

              <hr className="border-black" />
              <div className="flex justify-between pt-8 lg:pt-10">
                <h2>Total</h2>
                <h1>{formatPrice(totalPrice)}</h1>
              </div>
              <div className="text-center my-2">
                <button className="bg-blue-500 w-24 text-[12px] lg:text-[16px] lg:w-44 text-white shadow-lg shadow-[#000000] p-2" onClick={handleBuyNow}>
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </Base>
      )}
    </div>
  );
}
