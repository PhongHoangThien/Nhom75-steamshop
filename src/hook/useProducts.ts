import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setProduct } from "../redux/productSlice"; // Check lại đường dẫn import này
import { MockData } from "../data/MockData";       // Check lại đường dẫn import này
import { useProductData } from "./useProductData";
import { useProductFilter } from "./useProductFilter";

export const useProducts = () => {
    const dispatch = useDispatch();
    const { products } = useProductData();

    const {
        filters,
        filteredProducts,
        handleFilterChange, // Hàm gốc của useProductFilter (thường nhận event)
        handleApplyFilters,
        handleResetFilters,
        setNameFilter,      // Hàm logic set tên
        setGenreFilter,     // Hàm logic set thể loại
    } = useProductFilter(products);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const categoryQuery = searchParams.get("category") || "";

    // 1. Load data
    useEffect(() => {
        dispatch(setProduct(MockData));
    }, [dispatch]);

    // 2. Xử lý URL khi mới vào trang
    useEffect(() => {
        if (searchQuery) {
            setNameFilter(searchQuery);
            setGenreFilter("all");
            // Fake event để update UI
            handleFilterChange({ target: { name: 'name', value: searchQuery } } as any);
        } else if (categoryQuery) {
            setGenreFilter(categoryQuery);
            setNameFilter("");
            // Fake event để update UI
            handleFilterChange({ target: { name: 'genre', value: categoryQuery } } as any);
        } else {
            handleResetFilters();
        }
    }, [searchQuery, categoryQuery]);

    // 3. HÀM WRAPPER QUAN TRỌNG NHẤT (Sửa logic ở đây)
    // FilterBar gửi về (e), nên ở đây ta nhận (e)
    const onFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Gọi hàm gốc để update state hiển thị trên ô input
        handleFilterChange(e);

        // Kích hoạt logic tìm kiếm ngay lập tức khi gõ
        if (name === "name") {
            setNameFilter(value);
        }

        // Kích hoạt logic lọc category ngay khi chọn
        if (name === "genre") {
            setGenreFilter(value);
        }
    };

    return {
        filters,
        filteredProducts,
        handleFilterChange: onFilterChange, // Trả về hàm wrapper mới này
        handleApplyFilters,
        handleResetFilters,
    };
};