import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setProduct } from "../redux/productSlice";
import { MockData } from "../data/MockData";
import { useProductData } from "./useProductData";
import { useProductFilter } from "./useProductFilter";

export const useProducts = () => {
    const dispatch = useDispatch();
    const { products } = useProductData();

    const {
        filters,
        filteredProducts,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters,
        setNameFilter,
        setGenreFilter,
    } = useProductFilter(products);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const categoryQuery = searchParams.get("category") || "";

    // load mock data (logic cũ)
    useEffect(() => {
        dispatch(setProduct(MockData));
    }, [dispatch]);

    // xử lý query param (logic cũ)
    useEffect(() => {
        if (searchQuery) {
            setNameFilter(searchQuery);
            setGenreFilter("all");
        } else if (categoryQuery) {
            setGenreFilter(categoryQuery);
            setNameFilter("");
        } else {
            handleResetFilters();
        }
    }, [searchQuery, categoryQuery]);

    return {
        filters,
        filteredProducts,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters,
    };
};
