import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from "../redux/productSlice";
import { fakeGetProductsAPI } from "../services/productService";

export const useProductData = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state: RootState) => state.products);
    useEffect(() => {
        const fetchData = async () => {
            if (products.length > 0) return;
            dispatch(fetchProductsStart());
            try {
                const data = await fakeGetProductsAPI();
                dispatch(fetchProductsSuccess(data));
            } catch (err) {
                dispatch(fetchProductsFailure(err as string));
            }
        };

        fetchData();
    }, [dispatch, products.length]);
    return { products, isLoading, error };
};