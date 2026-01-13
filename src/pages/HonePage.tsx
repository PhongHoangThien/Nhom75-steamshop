import ProductCard from "../components/ProductCard";
import { ProductCategory } from "../data/ProductCategory";
import { MockData } from "../data/MockData";
import InfoSection from "../components/InfoSection";
import BannerSlider from "../components/BannerSlider";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { setProduct } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(setProduct(MockData));
    }, []);

    const top20BestSeller = [...products]
        .sort((a, b) => (b.sold || 0) - (a.sold || 0))
        .slice(0, 20);

    return (
        <div className="panel-theme py-2 px-4 md:px-16 lg:px-24 text-text">
            <div className="container items-center justify-center mx-auto py-4 flex felx-col md:flex-row space-x-10">
                <div className="w-full md:w-3/12 border border-border">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-2 uppercase">
                        Thể loại game
                    </div>
                    <ul className="theme bg-white">
                        {ProductCategory.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
                                className="px-4 py-2 border-b border-border last:border-b-0 flex justify-between items-center text-sm font-medium hover:bg-panel hover:text-white cursor-pointer transition-colors"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-8/12 h-96 relative">
                    <BannerSlider/>
                </div>
            </div>

            <InfoSection />
            <CategorySection />

            <div className="container mx-auto py-12">
                <h2 className="text-title font-bold mb-6 text-center">
                    GAME THỊNH HÀNH
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {top20BestSeller.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => navigate("/products")}
                        className="px-6 py-3 btn-theme rounded-lg font-semibold"
                    >
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;