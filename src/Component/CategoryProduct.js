import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryProducts } from "../Redux/actions/categoryAction";

export default function CategoryProduct() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cat_id } = useParams();

    const { categoryInfo, error, loading: categoryLoading } = useSelector((state) => state.category || {});

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            await dispatch(getCategoryProducts({ cat_id }));
            setLoading(false);
        };

        fetchCategories();
    }, [dispatch, cat_id]);

    // Modify handleCategoryClick to take product ID and token
    const handleCategoryClick = (productId, token) => {
        navigate(`/product/${productId}/${token}`);
    };

    if (loading || categoryLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="overflow-hidden overflow-x-hidden">
            <Base>
                <div className="h-screen w-screen bg-white overflow-x-hidden overflow-y-scroll hide-scrollbar">
                    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mx-2 xl:gap-5 lg:gap-4 md:gap-3 gap-3 mb-32">
                        {categoryInfo.products.map((product) => (
                            <div
                                key={product.id} // Make sure to use a unique identifier
                                className="flex flex-col justify-center place-items-center shadow-gray-700 shadow xl:h-48 xl:w-52 lg:h-44 lg:w-48 md:h-40 md:w-44 h-28 w-28 p-4 cursor-pointer"
                                onClick={() => handleCategoryClick(product.id, product.token)} // Pass product ID and token
                            >
                                <div className="h-4/6 w-4/6">
                                    <img
                                        src={
                                            product.images && product.images.length > 0
                                                ? product.images[0].image // Accessing nested image object
                                                : "fallback_image_url" // Use a fallback image URL if none exists
                                        }
                                        alt={product.name}
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="">
                                    <h6 className="capitalize xl:text-xl lg:text-lg md:text-md text-sm font-serif">
                                        {product.name}
                                    </h6>
                                    <h5 className="font-bold xl:text-xl lg:text-lg md:text-md text-sm">
                                        ₹{product.price}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Base>
        </div>
    );
}
