import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useNavbarSearch = () => {
    const navigate = useNavigate();
    const products = useSelector((state: RootState) => state.products.products);

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState<any[]>([]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search.trim()) {
            navigate("/products");
            return;
        }
        navigate(`/products?search=${encodeURIComponent(search)}`);
        setSuggestions([]);
    };

    const handleChange = (value: string) => {
        setSearch(value);

        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const filtered = products
            .filter(p =>
                p.name.toLowerCase().includes(value.toLowerCase())
            )
            .slice(0, 5);

        setSuggestions(filtered);
    };

    const closeSearch = () => {

    }

    return {
        search,
        suggestions,
        setSuggestions,
        handleSearch,
        handleChange,
    };
};
