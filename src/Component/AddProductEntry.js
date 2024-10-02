import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {categoryGetAll} from '../../src/Redux/actions/categoryAction'
import Base from '../Base/Base';
import p_img from '../Images/realme-narzo-30-pro-5g (1).jpg'

const CategoryComponent = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { categoryInfo, error, loading: categoryLoading } = useSelector((state) => state.category || {});
    const categories = categoryInfo.category || []; // Access the category array

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            await dispatch(categoryGetAll());
            setLoading(false);
        };
        
        fetchCategories();
    }, [dispatch]);

    const handleCategoryClick = (cat_id) => {
        navigate(`/add-product/${cat_id}`);
    };

    if (loading || categoryLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="overflow-hidden">
            <Base>
                <div className="h-screen w-screen bg-white overflow-y-scroll hide-scrollbar">
                    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mx-2 xl:gap-5 lg:gap-4 md:gap-3 gap-3 pb-32">
                        {Array.isArray(categories) && categories.map((category) => (
                            <div 
                                key={category.id} 
                                className="flex flex-col justify-center items-center shadow-gray-700 shadow xl:h-48 xl:w-52 lg:h-44 lg:w-48 md:h-40 md:w-44 h-24 w-24 p-4 cursor-pointer rounded-full"
                                onClick={() => handleCategoryClick(category._id)}
                            >
                                <div className="h-4/6 w-4/6">
                                    <img src={category.photo || p_img} alt="category" className="h-full w-full" />
                                </div>
                                <h6 className="capitalize xl:text-xl lg:text-lg md:text-md text-sm font-serif">{category.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </Base>
        </div>
    );
};

export default CategoryComponent;
