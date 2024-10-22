import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingleUserProduct } from '../Redux/actions/productAction';
import p_img from '../Images/realme-narzo-30-pro-5g (1).jpg';
import add from '../Images/add.png';
import Base from '../Base/Base';
import Loading from './Loading';

export default function UserProducts() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { products, error } = useSelector((state) => state.product);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");

    useEffect(() => {
        if (!token || !userId) {
            navigate("/");
        }
    }, [navigate, token, userId]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (userId) {
                setLoading(true);
                await dispatch(getSingleUserProduct(userId));
                setLoading(false);
            }
        };
        fetchProducts();
    }, [dispatch, userId]);

    const handleProductClick = (p_id) => {
        navigate(`/userProductView/${p_id}/${token}`);
    };

    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Check if products exist and handle their structure correctly
    const productList = products?.products || []; // Adjusting based on your structure

    console.log(productList); // Debugging line to check products

    return (
        <div className="overflow-hidden overflow-x-hidden">
            {loading ? (
                <div><Loading /></div>
            ) : (
                <Base>
                <div className="h-screen w-screen bg-white overflow-x-hidden overflow-y-scroll hide-scrollbar pb-10 lg:pb-10 xl:pb-10">
                <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mx-2 xl:gap-5 lg:gap-4 md:gap-3 gap-3 mb-32">
                            {productList.length > 0 ? (
                                productList.map((product) => (
                                    <div
                                        key={product._id}
                                        className="flex flex-col justify-center place-items-center shadow-gray-700 shadow xl:h-48 xl:w-52 lg:h-44 lg:w-48 md:h-40 md:w-44 h-28 w-28 p-4 cursor-pointer"
                                        onClick={() => handleProductClick(product._id)}
                                    >
                                        <div className="h-4/6 w-4/6">
                                            <img src={product.images[0]?.image || p_img} alt="product" className="h-full w-full" />
                                        </div>
                                        <div>
                                            <h6 className="capitalize xl:text-xl lg:text-lg md:text-md text-sm font-serif">
                                                {product.name}
                                            </h6>
                                            <h5 className="font-bold px-5 xl:text-xl lg:text-lg md:text-md text-sm">
                                                {formatPrice(product.price)}
                                            </h5>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No products available</div>
                            )}
                            <div
                                className="flex flex-col justify-center place-items-center shadow-gray-700 shadow xl:h-48 xl:w-52 lg:h-44 lg:w-48 md:h-40 md:w-44 h-28 w-28 p-4 cursor-pointer"
                                onClick={() => navigate(`/add_product_entry/${token}`)}
                            >
                                <div className="h-4/6 w-4/6">
                                    <img src={add} alt="add product" className="h-full w-full" />
                                </div>
                                <div>
                                    <h3 className="capitalize xl:text-xl lg:text-lg md:text-md text-sm font-serif">
                                        ADD
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Base>
            )}
        </div>
    );
}
