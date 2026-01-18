import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import React from "react";

export default function ProductCard({ product }: any) {
    const dispatch = useDispatch();

    const handleAddToCart = (e: any, product: any) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
    };

    const finalPrice =
        product.discount > 0
            ? Math.round(product.price * (100 - product.discount) / 100)
            : product.price;

    return (
        <div className="card-panel-theme p-4 rounded relative card-hover group h-full flex flex-col">
            <Link to={`/product/${product.id}`} className="flex-1">
                <img
                    src={`${import.meta.env.BASE_URL}images/games/${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <span className="panel-theme absolute top-5 left-5 px-3 py-1 text-sm rounded-lg backdrop-blur-md">
                                {product.category}
                            </span>

                <h3 className="  text-lg line-clamp-1">
                    {product.name}
                </h3>

                <div className="mt-2">
                    {product.discount > 0 ? (
                        <div className="flex items-center gap-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
            </span>
                            <div className="flex flex-col">
                <span className="line-through text-xs opacity-60">
                    {product.price.toLocaleString()}đ
                </span>
                                <span className="price-theme font-bold">
                    {finalPrice.toLocaleString()}đ
                </span>
                            </div>
                        </div>
                    ) : (
                        <p className="font-bold">
                            {product.price.toLocaleString()}đ
                        </p>
                    )}
                </div>
            </Link>

            <div
                className="cart-card-panel-theme btn-theme absolute bottom-4 right-2 flex items-center justify-center w-8 h-8
                rounded-full group-hover:w-24 duration-100"
                onClick={(e) => handleAddToCart(e, product)}
            >
                <FaCartPlus className="w-5 h-5 group-hover:hidden" />
                <span className="font-bold hidden group-hover:block text-xs">
                    Thêm giỏ hàng
                </span>
            </div>
        </div>
    );
}
