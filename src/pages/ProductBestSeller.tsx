import React from 'react';
import { FaTrophy, FaSpinner } from "react-icons/fa";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";
import { useProductFilter } from "../hook/useProductFilter";
import { useProductData } from "../hook/useProductData";

const BestSeller = () => {
    const { products, isLoading, error } = useProductData();
    const {
        filters,
        filteredProducts,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters
    } = useProductFilter(products, "best-selling");

    if (isLoading) return <div className="min-h-screen bg-panel flex items-center justify-center"><FaSpinner className="animate-spin text-primary text-4xl"/></div>;
    if (error) return <div className="min-h-screen bg-panel flex items-center justify-center text-danger">Lỗi: {error}</div>;

    return (
        <div className="bg-panel min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-40 rounded-full"></div>
                        <div className="relative p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl text-white shadow-lg">
                            <FaTrophy size={28} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            BEST SELLER
                        </h2>
                        <p className="text-textMuted font-medium">Top game bán chạy nhất tháng</p>
                    </div>
                </div>
                <FilterBar
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                    handleApplyFilters={handleApplyFilters}
                    handleResetFilters={handleResetFilters}
                />
                <ProductList
                    products={filteredProducts}
                    onReset={handleResetFilters}
                />
            </div>
        </div>
    );
};

export default BestSeller;