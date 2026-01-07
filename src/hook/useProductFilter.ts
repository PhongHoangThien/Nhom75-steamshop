import { useState, useMemo } from "react";
import { Product } from "../redux/productSlice";

export const useProductFilter = (products: Product[]) => {
    const [filters, setFilters] = useState({
        genre: "all",
        minPrice: "",
        maxPrice: "",
        sortType: "default"
    });
    const [activeFilters, setActiveFilters] = useState(filters);
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        let result = [...products];
        const { genre, minPrice, maxPrice, sortType } = activeFilters;
        if (genre !== "all") {
            result = result.filter(p => p.category === genre);
        }
        if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
        if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));

        switch (sortType) {
            case "best-selling":
                result.sort((a, b) => b.sold - a.sold);
                break;
            case "newest":
                result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
                break;
            case "asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "a-z":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        return result;
    }, [products, activeFilters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
        setActiveFilters(filters);
    };

    const handleResetFilters = () => {
        const resetState = {
            genre: "all",
            minPrice: "",
            maxPrice: "",
            sortType: "default"
        };
        setFilters(resetState);
        setActiveFilters(resetState);
    };
    return {
        filters,
        filteredProducts,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters
    };
};