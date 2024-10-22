import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/actions/productAction";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg"; 
import Loading from "./Loading";

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { productInfo, error } = useSelector((state) => state.product);

    useEffect(() => {
        if (!localStorage.getItem("token") && !localStorage.getItem("id")) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            await dispatch(getAllProduct());
            setLoading(false);
        };

        fetchProducts();
    }, [dispatch]);

    const handleProductClick = (id, token) => {
        navigate(`/product/${id}/${token}`);
    };

    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="overflow-hidden overflow-x-hidden">
            {loading ? (
                <div><Loading/></div>
            ) : (
                <Base>
                    <div className="h-screen w-screen bg-white overflow-x-hidden overflow-y-scroll hide-scrollbar pb-16 lg:pb-10 xl:pb-10">
                        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mx-2 xl:gap-5 lg:gap-4 md:gap-3 gap-3 mb-32">
                            {productInfo && productInfo.products && productInfo.products.length > 0 ? ( // Check for products array
                                productInfo.products.map((product) => ( // Access products correctly
                                    <div
                                        key={product._id}
                                        className="flex flex-col justify-center place-items-center shadow-gray-700 shadow xl:h-48 xl:w-52 lg:h-44 lg:w-48 md:h-40 md:w-44 h-28 w-28 p-4 cursor-pointer"
                                        onClick={() => handleProductClick(product._id, localStorage.getItem("token"))}
                                    >
                                        <div className="h-4/6 w-4/6">
                                            <img src={product.images[0]?.image || p_img} alt="product" className="h-full w-full" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="capitalize xl:text-xl lg:text-lg md:text-md text-sm font-serif">
                                                {product.name}
                                            </h6>
                                            <h5 className="font-bold px-5 xl:text-xl lg:text-lg md:text-md text-sm">
                                                {formatPrice(product.price)} {/* Ensure price exists */}
                                            </h5>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No products available</div>
                            )}
                        </div>
                    </div>
                </Base>
            )}
        </div>
    );
}
