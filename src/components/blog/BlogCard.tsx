import React from "react";
import { Link } from "react-router-dom";
interface BlogCardProps {
    blog: {
        id: number | string;
        image: string;
        category: string;
        title: string;
        date: string;
        author: string;
    };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="group flex flex-col h-full">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4">
                <Link to={`/blog/${blog.id}`}>
                    <img
                        src={`${import.meta.env.BASE_URL}images/blogs/${blog.image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>
            </div>
            <div className="flex flex-col flex-1">
                {/* CATEGORY BADGE */}
                <div className="mb-3">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {blog.category}
                    </span>
                </div>
                <Link to={`/blog/${blog.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                        {blog.title}
                    </h3>
                </Link>
                <div className="mt-auto text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span>{blog.date}</span>
                    <span className="mx-1">bởi</span>
                    <span
                        className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:underline transition-all"
                    >
                        {blog.author}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;