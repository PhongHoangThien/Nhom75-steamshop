import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "../redux/productSlice";
import { fakeGetProductsAPI } from "../services/productService";
import { FaFire, FaSpinner } from "react-icons/fa";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";

const GameOnSale = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state: RootState) => state.products);

    const initialFilterState = {
        genre: "all",
        minPrice: "",
        maxPrice: "",
        sortType: "default"
    };

    const [filters, setFilters] = useState(initialFilterState);
    const [activeFilters, setActiveFilters] = useState(initialFilterState);
    useEffect(() => {
        const fetchProductData = async () => {
            if (products.length > 0) return;
            dispatch(fetchProductsStart());
            try {
                const data = await fakeGetProductsAPI();
                dispatch(fetchProductsSuccess(data));
            } catch (err) {
                dispatch(fetchProductsFailure(err as string));
            }
        };
        fetchProductData();
    }, [dispatch, products.length]);
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        let result = [...products];
        const { genre, minPrice, maxPrice, sortType } = activeFilters;

        if (genre !== "all") result = result.filter(p => p.category === genre);
        if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
        if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));

        switch (sortType) {
            case "best-selling": result.sort((a, b) => b.sold - a.sold); break;
            case "newest": result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()); break;
            case "asc": result.sort((a, b) => a.price - b.price); break;
            case "desc": result.sort((a, b) => b.price - a.price); break;
            case "a-z": result.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "z-a": result.sort((a, b) => b.name.localeCompare(a.name)); break;
        }
        return result;
    }, [products, activeFilters]);

    // --- Các hàm xử lý sự kiện ---
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleApplyFilters = () => setActiveFilters(filters);

    const handleResetFilters = () => {
        setFilters(initialFilterState);
        setActiveFilters(initialFilterState);
    };
    if (isLoading) return <div className="min-h-screen bg-panel flex items-center justify-center"><FaSpinner className="animate-spin text-primary text-4xl"/></div>;
    if (error) return <div className="min-h-screen bg-panel flex items-center justify-center text-danger">Lỗi: {error}</div>;
    return (
        <div className="bg-panel min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
            <div className="container mx-auto">
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
export default GameOnSale;