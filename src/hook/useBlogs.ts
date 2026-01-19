import { useMemo, useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { MockBlogs } from "../data/BlogMockData";

const BLOGS_PER_PAGE = 9;
export const BLOG_CATEGORIES = ["News", "Review", "Guide", "Survival", "Indie"];

export const useBlogs = () => {
    const [searchParams] = useSearchParams();
    const authorParam = searchParams.get("author");

    const [filters, setFilters] = useState({
        keyword: "",
        category: "all",
        author: ""
    });

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (authorParam) {
            setFilters(prev => ({ ...prev, author: authorParam }));
        } else {
            setFilters(prev => ({ ...prev, author: "" }));
        }
    }, [authorParam]);

    const filteredBlogs = useMemo(() => {
        return MockBlogs.filter(blog => {
            const matchesSearch = blog.title.toLowerCase().includes(filters.keyword.toLowerCase());

            const matchesCategory = filters.category === "all" || blog.category === filters.category;

            const matchesAuthor = filters.author === "" ||
                blog.author.toLowerCase().includes(filters.author.toLowerCase());

            return matchesSearch && matchesCategory && matchesAuthor;
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

    const blogs = useMemo(() => {
        const start = (currentPage - 1) * BLOGS_PER_PAGE;
        const end = start + BLOGS_PER_PAGE;
        return filteredBlogs.slice(start, end);
    }, [filteredBlogs, currentPage]);

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        setCurrentPage(1);
    };

    const handleReset = () => {
        setFilters({ keyword: "", category: "all", author: "" });
        setCurrentPage(1);
    };

    return {
        blogs,
        filters,
        categories: BLOG_CATEGORIES,
        currentPage,
        totalPages,
        setCurrentPage,
        handleFilterChange,
        handleReset
    };
};