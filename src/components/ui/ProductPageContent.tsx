// src/components/product/ProductPageContent.tsx
import FilterBar from "../ui/FilterBar";
import ProductList from "../ui/ProductList";

const ProductPageContent = ({
                                filters,
                                products,
                                handleFilterChange,
                                handleApplyFilters,
                                handleResetFilters
                            }: any) => {
    return (
        <>
            <FilterBar
                filters={filters}
                handleFilterChange={handleFilterChange}
                handleApplyFilters={handleApplyFilters}
                handleResetFilters={handleResetFilters}
            />
            <ProductList products={products} onReset={handleResetFilters} />
        </>
    );
};

export default ProductPageContent;
