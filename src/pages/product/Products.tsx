import React from "react";
import FilterBar from "../../components/ui/FilterBar";
import ProductList from "../../components/ui/ProductList";
import { useProducts } from "../../hook/useProducts";

const Products = () => {

    const {
        filters,
        filteredProducts,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters,
    } = useProducts();

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
    );
};

export default Products;
