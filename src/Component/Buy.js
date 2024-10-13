import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/actions/productAction";
import { getAddress } from "../Redux/actions/addressAction";

const URL = "http://localhost:7890/api";



const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            reject(new Error('Razorpay SDK failed to load.'));
        };
        document.body.appendChild(script);
    });
};

export default function Buy() {
    const [loading, setLoading] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);
    const dispatch = useDispatch();
    const { singleProduct } = useSelector((state) => state.product);
    const { addressInfo } = useSelector((state) => state.address);
    const navigate = useNavigate();
    const { p_id } = useParams();
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    const [selectedImage, setSelectedImage] = useState(null);

    

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            await dispatch(getSingleProduct(p_id, token));
            setLoading(false);
        };
        fetchProduct();
    }, [dispatch, p_id, token]);

    useEffect(() => {
        if (singleProduct?.product?.images?.length > 0) {
            setSelectedImage(singleProduct.product.images[0].image);
        }
    }, [singleProduct]);

    useEffect(() => {
        const fetchAddress = async () => {
            setLoading(true);
            await dispatch(getAddress(id));
            setLoading(false);
        };
        fetchAddress();
    }, [dispatch, id]);

    // Load Razorpay script
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

    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleAddressEdit = () => {
        navigate(`/address_edit/${token}`);
    };

    const handleBuyNow = async () => {
        setPaymentLoading(true);
        try {
            console.log('Making payment request with:', {
                id,
                p_id,
                token
            });
            const response = await fetch(`${URL}/order/payment/${id}/${p_id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            });

            const data = await response.json();

            if (response.ok) {
                if (!razorpayLoaded) {
                    alert("Razorpay SDK not loaded!");
                    return;
                }

                const options = {
                    key: "rzp_test_zVUZCNrVjLSv79",
                    amount: data.amount,
                    currency: data.currency,
                    name: "E-Shippin",
                    description: "Purchase Description",
                    order_id: data.id,
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
                console.log(options.key);
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                alert(data.error || "Failed to create order!");
            }
        } catch (err) {
            console.error("Payment error: ", err);
            alert("Something went wrong while initiating payment!");
        } finally {
            setPaymentLoading(false);
        }
    };

    const verifyPayment = async (response) => {
        try {
            const verificationResponse = await fetch(`${URL}/order/payment/verify`, {
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
                alert("Payment successful!");
                console.log(verificationData);
                // You can navigate to a success page or update state here
            } else {
                alert("Payment verification failed!");
            }
        } catch (error) {
            console.error("Verification error: ", error);
            alert("Failed to verify payment!");
        }
    };

    return (
        <div className="h-screen w-screen bg-[#F2F1F1] overflow-hidden">
            {loading || paymentLoading ? <Loading /> :  
                <Base>
                    <div className="h-full pt-20 pb-5 flex flex-col justify-center items-center overflow-y-scroll hide-scrollbar">
                        <div className="bg-white shadow w-5/6 md:w-4/6 p-5 flex justify-around">
                            <div className="text-md">
                                {addressInfo?.address ? (
                                    <>
                                        <p>{addressInfo.address.name}</p>
                                        <p>{addressInfo.address.city}</p>
                                        <p>{addressInfo.address.landmark}</p>
                                        <p>{addressInfo.address.district}</p>
                                        <p>{addressInfo.address.state}</p>
                                        <p>{addressInfo.address.country}</p>
                                        <p>{addressInfo.address.phoneNumber}</p>
                                    </>
                                ) : (
                                    <p>No address found</p>
                                )}
                            </div>
                            <button className="bg-blue-500 text-white h-12 w-20 m-10 " onClick={handleAddressEdit}>
                                EDIT
                            </button>
                        </div>
                        <hr/>
                        <div className="bg-white shadow w-5/6 md:w-4/6 h-36 p-5 flex justify-around">
                            <div className="mt-6 h-20 w-20">
                                <img src={selectedImage} alt="product" className="h-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-serif">{singleProduct?.product?.name}</h3>
                                <h4 className="text-red-600 font-serif">{singleProduct?.product?.category?.name}</h4>
                                <p className="font-serif">{singleProduct?.product?.description1}</p>
                                <h3 className="text-xl font-serif">{formatPrice(singleProduct?.product?.price)}</h3>
                            </div>
                        </div>

                        <button className="bg-green-600 text-white p-2 m-5 flex gap-2 w-32" onClick={handleBuyNow}>
                            Buy Now <i className="bx bxs-truck pt-2"></i>
                        </button>
                    </div>
                </Base>
            }
        </div>
    );
}
