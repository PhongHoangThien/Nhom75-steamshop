import React from "react";
import { FaSearch, FaSyncAlt, FaTags } from "react-icons/fa";

interface Props {
    filters: {
        keyword: string;
        category: string;
        author: string;
    };
    categories: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onReset: () => void;
}

const BlogFilterBar: React.FC<Props> = ({
                                            filters,
                                            categories,
                                            onChange,
                                            onReset,
                                        }) => {
    const inputClass = "w-full border border-border rounded-lg px-4 py-3 text-sm " +
        "text-gray-900 bg-white placeholder:text-gray-400 " +
        "focus:ring-2 focus:ring-primary focus:border-transparent " +
        "outline-none transition-all shadow-sm";

    return (
        <div className="filter-bar-panelLight-theme rounded-xl shadow-lg border border-border/50 p-5 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12     gap-4 items-end con">
                <div className="lg:col-span-4">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase mb-2">
                        <FaSearch /> Tìm kiếm
                    </label>
                    <input
                        type="text"
                        name="keyword"
                        value={filters.keyword}
                        onChange={onChange}
                        placeholder="Nhập tiêu đề blog..."
                        className={inputClass}
                    />
                </div>
                <div className="lg:col-span-3">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase mb-2">
                        <FaTags /> Chủ đề
                    </label>
                    <select
                        name="category"
                        value={filters.category}
                        onChange={onChange}
                        className={`${inputClass} cursor-pointer hover:border-primary/50`}
                    >
                        <option value="all">Tất cả</option>
                        {categories.map(c => (
                            <option key={c} value={c} className="text-gray-900">
                                {c}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:col-span-5">
                    <button
                        onClick={onReset}
                        className="btn-theme w-full h-[46px] bg-white border border-border text-gray-500 hover:text-danger hover:border-danger rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95 font-bold"
                        title="Xóa bộ lọc"
                    >
                        <FaSyncAlt className="mr-2"/>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
export default BlogFilterBar;