import { FaPenNib } from "react-icons/fa";
import BlogCard from "../../components/blog/BlogCard";
import { useBlogs } from "../../hook/useBlogs";

const Blogs = () => {
    const {
        blogs,
        currentPage,
        totalPages,
        setCurrentPage
    } = useBlogs();

    return (
        <>
            <div className="panel-theme min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
                <div
                    className="w-full md:h-80 lg:h-[350px] relative overflow-hidden bg-gray-900 mb-10 rounded-2xl box-shadow"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}images/blogs/blog-banner.png`}
                        alt="banner"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="container mx-auto">
                    {/* HEADER */}
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary blur-lg opacity-40 rounded-full"></div>
                            <div
                                className="relative p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg">
                                <FaPenNib size={26}/>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                BLOGS
                            </h2>
                            <p className="text-textMuted font-medium">
                                Tin tức · Review · Thế giới game
                            </p>
                        </div>
                    </div>

                    {/* BLOG LIST */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog}/>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-10">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
                            >
                                ‹
                            </button>

                            {Array.from({length: totalPages}).map((_, i) => {

                                const page = i + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 rounded ${
                                            page === currentPage
                                                ? "bg-primary text-white font-bold"
                                                : "bg-gray-700 text-white hover:bg-gray-600"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
                            >
                                ›
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Blogs;
