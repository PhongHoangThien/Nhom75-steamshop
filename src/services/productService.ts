import { MockData } from "../data/MockData";
import { Product } from "../redux/productSlice";

export const fakeGetProductsAPI = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (MockData && MockData.length > 0) {
                resolve(MockData);
            } else {
                reject("Không tìm thấy dữ liệu sản phẩm!");
            }
        }, 1000);
    });
};