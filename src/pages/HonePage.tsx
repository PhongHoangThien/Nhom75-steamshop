import ProductCard from "../components/ProductCard";
import {GameCategory} from "../data/GameCategory";
import {MockData} from "../data/MockData";
import InfoSection from "../components/InfoSection";
import BannerSlider from "../components/BannerSlider";
import CategorySection from "../components/CategorySection";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useEffect} from "react";
import {setProduct} from "../redux/productSlice";

const HomePage= () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(setProduct(MockData));
    }, [])

    return (
        <div className="bg-panel py-2 px-4 md:px-16 lg:px-24 text-text">
            <div className="container items-center justify-center mx-auto py-4 flex felx-col md:flex-row space-x-10">
                <div className="w-full md:w-3/12 border border-border">
                    <div className="bg-bg text-title font-bold px-2 py-2">Danh mục game</div>
                    <ul className="bg-panelLight">
                        {GameCategory.map((category, index) => (
                            <li key={index} className="flex items-center py-2 px-4 text-sm font-medium hover:bg-panel">{category}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-8/12 h-96 relative">
                    <BannerSlider />
                </div>
            </div>

            <InfoSection />
            <CategorySection />

            <div className="container mx-auto py-12">
                <h2 className="text-title font-bold mb-6 text-center">Sản phẩm bán chạy</h2>
                <div className="grid gird-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {products.products.map((product) => (
                        <div className="">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default HomePage;
