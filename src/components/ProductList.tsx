import React from 'react';
import ProductCard from "./ProductCard";
import { FaFilter } from "react-icons/fa";
import { Product } from "../redux/productSlice";

interface ProductListProps {
    products: Product[];
    onReset: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onReset }) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 bg-panelLight rounded-xl border border-dashed border-border opacity-75">
                <FaFilter size={48} className="text-textMuted mb-4 opacity-50"/>
                <p className="text-textMuted text-lg font-medium">Không tìm thấy sản phẩm nào.</p>
                <button
                    onClick={onReset}
                    className="mt-4 text-primary font-bold hover:underline"
                >
                    Xóa bộ lọc & Thử lại
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
                <div key={product.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative group">
                        {product.discount > 0 && (
                            <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                -{product.discount}%
                            </div>
                        )}
                        <ProductCard product={product} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;