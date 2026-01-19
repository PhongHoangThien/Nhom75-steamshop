import React from 'react';
import { FaFire, FaSpinner } from "react-icons/fa";
import FilterBar from "../../components/ui/FilterBar";
import ProductList from "../../components/ui/ProductList";
import { useProductFilter } from "../../hook/useProductFilter";
import { useProductData } from "../../hook/useProductData";

const GameOnSale = () => {
    const { products, isLoading, error } = useProductData();
    const saleProducts = products.filter((p: any) => p.discount && p.discount > 0);
    const {
        filters,
        filteredProducts,
        handleFilterChange, // Đây là hàm gốc, chỉ update state UI
        handleApplyFilters,
        handleResetFilters,
        setNameFilter,
        setGenreFilter
    } = useProductFilter(saleProducts); // Truyền saleProducts vào thay vì products gốc
    if (isLoading) return <div className="min-h-screen bg-panel flex items-center justify-center"><FaSpinner className="animate-spin text-primary text-4xl"/></div>;
    if (error) return <div className="min-h-screen bg-panel flex items-center justify-center text-danger">Lỗi: {error}</div>;
    const onFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        handleFilterChange(e);
        if (name === "name") {
            setNameFilter(value);
        }
        if (name === "genre") {
            setGenreFilter(value);
        }
    };

    return (
        <div className="panel-theme min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
            <div className="container mx-auto">
                {/* Header trang Sale */}
                <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-danger blur-lg opacity-40 rounded-full"></div>
                        <div className="relative p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl text-white shadow-lg">
                            <FaFire size={28} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-danger to-orange-500">
                            FLASH SALE
                        </h2>
                        <p className="text-textMuted font-medium">Săn deal hời - Chơi game xịn</p>
                    </div>
                </div>
                <FilterBar
                    filters={filters}
                    handleFilterChange={onFilterChange} // 👈 TRUYỀN HÀM WRAPPER VÀO ĐÂY
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
export default GameOnSale;