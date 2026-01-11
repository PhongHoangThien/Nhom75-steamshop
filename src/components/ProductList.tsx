import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaFilter } from "react-icons/fa";
import { Product } from "../redux/productSlice";

interface ProductListProps {
    products: Product[];
    onReset: () => void;
}

const PRODUCTS_PER_PAGE = 20;

const ProductList: React.FC<ProductListProps> = ({ products, onReset }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(startIndex, endIndex);

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
        <>
            {/* Danh sách game */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {currentProducts.map((product) => (
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

            {/* Phân trang */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded ${
                                    currentPage === page
                                        ? "bg-green-500 text-black font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-600"
                                }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductList;
