import { useMemo } from "react";
import { MockBlogs } from "../data/BlogMockData"; // Đảm bảo đường dẫn đúng

export const useBlogDetail = (blogId: string | undefined) => {
    const blog = useMemo(() => {
        if (!blogId) return undefined;
        return MockBlogs.find((b) => String(b.id) === blogId);
    }, [blogId]);
    const relatedBlogs = useMemo(() => {
        if (!blog) return [];

        return MockBlogs
            .filter((b) => b.category === blog.category && b.id !== blog.id)
            .slice(0, 3);
    }, [blog]);
    return {
        blog,
        relatedBlogs,
        exists: !!blog,
    };
};