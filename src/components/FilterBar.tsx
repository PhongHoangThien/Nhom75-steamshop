import React from 'react';
import { FaFilter, FaSyncAlt, FaTags, FaMoneyBillWave, FaSortAmountDown } from "react-icons/fa";
import { ProductCategory } from "../data/ProductCategory";

interface FilterBarProps {
    filters: any;
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleApplyFilters: () => void;
    handleResetFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, handleFilterChange, handleApplyFilters, handleResetFilters }) => {
    return (
        <div className="bg-panelLight rounded-xl shadow-lg border border-border/50 p-5 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                <div className="lg:col-span-3">
                    <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                        <FaTags /> Thể loại
                    </label>
                    <select
                        name="genre"
                        value={filters.genre}
                        onChange={handleFilterChange}
                        className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm cursor-pointer hover:border-primary/50"
                    >
                        <option value="all">Tất cả thể loại</option>
                        {ProductCategory.map((g, i) => (
                            <option key={i} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div className="lg:col-span-4">
                    <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                        <FaMoneyBillWave /> Khoảng giá (VNĐ)
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number" name="minPrice" placeholder="0"
                            value={filters.minPrice} onChange={handleFilterChange}
                            className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                        />
                        <span className="text-textMuted font-bold">-</span>
                        <input
                            type="number" name="maxPrice" placeholder="MAX"
                            value={filters.maxPrice} onChange={handleFilterChange}
                            className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <label className="flex items-center gap-2 text-xs font-bold text-textMuted uppercase mb-2">
                        <FaSortAmountDown /> Sắp xếp
                    </label>
                    <select
                        name="sortType"
                        value={filters.sortType}
                        onChange={handleFilterChange}
                        className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm cursor-pointer hover:border-primary/50"
                    >
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
                    <button
                        onClick={handleApplyFilters}
                        className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 flex justify-center items-center gap-2 h-[46px]"
                    >
                        <FaFilter /> Lọc
                    </button>
                    <button
                        onClick={handleResetFilters}
                        className="w-[46px] h-[46px] bg-panel border border-border text-textMuted hover:text-danger hover:border-danger rounded-lg flex justify-center items-center transition-all shadow-sm active:scale-95"
                        title="Xóa bộ lọc"
                    >
                        <FaSyncAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;