import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import ProductCard from "../components/ProductCard";

const FilterProduct = () => {
    const filterProducts = useSelector((state: RootState) => state.products.filteredProducts);

    return (
        <div className="bg-panel py-12 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto py-12">
                <h2 className="text-title font-bold mb-6 text-center">Danh sách gane</h2>
                <div className="grid gird-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filterProducts.map((product: any) => (
                        <div className="">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterProduct;