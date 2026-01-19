import { useMemo, useState, useEffect } from "react";
import {Blog} from "../data/BlogMockData";

export interface FilterState {
    keyword: string;
    category: string;
    author: string; // ✅ Thêm field author
}
export const useBlogFilter = (blogs: Blog[], initialFilters?: Partial<FilterState>) => {

    const [filters, setFilters] = useState<FilterState>({
        keyword: "",
        category: "all",
        author: "",
        ...initialFilters // ✅ Merge giá trị khởi tạo (nếu có)
    });
    useEffect(() => {
        if (initialFilters) {
            setFilters(prev => ({ ...prev, ...initialFilters }));
        }
    }, [initialFilters?.author, initialFilters?.category, initialFilters?.keyword]);
    const filteredBlogs = useMemo(() => {
        let result = [...blogs];
        if (filters.keyword.trim()) {
            result = result.filter(b =>
                b.title.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        }
        if (filters.category !== "all") {
            result = result.filter(b => b.category === filters.category);
        }
        if (filters.author.trim()) {
            result = result.filter(b =>
                b.author.toLowerCase().includes(filters.author.toLowerCase())
            );
        }
        return result;
    }, [blogs, filters]);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };
    const resetFilters = () => {
        setFilters({
            keyword: "",
            category: "all",
            author: "", // ✅ Reset author
        });
    };
    return {
        filters,
        filteredBlogs,
        handleChange,
        resetFilters,
        setFilters
    };
};