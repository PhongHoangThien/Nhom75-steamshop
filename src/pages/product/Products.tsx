import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {setProduct} from "../../redux/productSlice";
import {MockData} from "../../data/MockData";
import FilterBar from "../../components/ui/FilterBar";
import ProductList from "../../components/ui/ProductList";
import {useProductData} from "../../hook/useProductData";
import {useProductFilter} from "../../hook/useProductFilter";
import {useSearchParams} from "react-router-dom";

const Products = () => {
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

    useEffect(() => {
        dispatch(setProduct(MockData));
    }, []);

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

    return (
        <div className="panel-theme min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
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
    )
}

export default Products;