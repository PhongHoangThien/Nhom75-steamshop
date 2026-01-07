import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "../redux/productSlice";
import { fakeGetProductsAPI } from "../services/productService";
import { ProductCategory } from "../data/ProductCategory";
import ProductCard from "../components/ProductCard";
import { FaFire, FaFilter, FaSyncAlt, FaTags, FaSortAmountDown, FaMoneyBillWave, FaSpinner } from "react-icons/fa";

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
    }, [dispatch]);
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

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    if (isLoading) {
        return (
            <div className="min-h-screen bg-panel flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-primary text-4xl mx-auto mb-4" />
                    <p className="text-textMuted">Đang tải dữ liệu sản phẩm...</p>
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="min-h-screen bg-panel flex items-center justify-center">
                <div className="text-danger text-xl font-bold">Lỗi: {error}</div>
            </div>
        );
    }

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
                <div className="bg-panelLight rounded-xl shadow-lg border border-border/50 p-5 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                        <div className="lg:col-span-3">
                            <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                                <FaTags /> Thể loại
                            </label>
                            <select name="genre" value={filters.genre} onChange={handleFilterChange} className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm cursor-pointer hover:border-primary/50">
                                <option value="all">Tất cả thể loại</option>
                                {ProductCategory.map((g, i) => <option key={i} value={g}>{g}</option>)}
                            </select>
                        </div>
                        <div className="lg:col-span-4">
                            <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                                <FaMoneyBillWave /> Khoảng giá (VNĐ)
                            </label>
                            <div className="flex items-center gap-2">
                                <input type="number" name="minPrice" placeholder="0" value={filters.minPrice} onChange={handleFilterChange} className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                                <span className="text-textMuted font-bold">-</span>
                                <input type="number" name="maxPrice" placeholder="MAX" value={filters.maxPrice} onChange={handleFilterChange} className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm" />
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                                <FaSortAmountDown /> Sắp xếp
                            </label>
                            <select name="sortType" value={filters.sortType} onChange={handleFilterChange} className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm cursor-pointer hover:border-primary/50">
                                <option value="default">Mặc định</option>
                                <option value="best-selling">Bán chạy nhất</option>
                                <option value="newest">Mới cập nhật</option>
                                <option value="asc">Giá: Thấp đến Cao</option>
                                <option value="desc">Giá: Cao đến Thấp</option>
                                <option value="a-z">Tên: A đến Z</option>
                                <option value="z-a">Tên: Z đến A</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2 flex gap-2">
                            <button onClick={() => setActiveFilters(filters)} className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 flex justify-center items-center gap-2 h-[46px]">
                                <FaFilter /> Lọc
                            </button>
                            <button onClick={() => { setFilters(initialFilterState); setActiveFilters(initialFilterState); }} className="w-[46px] h-[46px] bg-panel border border-border text-textMuted hover:text-danger hover:border-danger rounded-lg flex justify-center items-center transition-all shadow-sm active:scale-95" title="Xóa bộ lọc">
                                <FaSyncAlt />
                            </button>
                        </div>
                    </div>
                </div>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredProducts.map((product: any) => (
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
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 bg-panelLight rounded-xl border border-dashed border-border opacity-75">
                        <FaFilter size={48} className="text-textMuted mb-4 opacity-50"/>
                        <p className="text-textMuted text-lg font-medium">Không tìm thấy sản phẩm nào.</p>
                        <button onClick={() => { setFilters(initialFilterState); setActiveFilters(initialFilterState); }} className="mt-4 text-primary font-bold hover:underline">
                            Xóa bộ lọc & Thử lại
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default GameOnSale;