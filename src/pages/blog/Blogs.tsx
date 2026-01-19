import { FaPenNib } from "react-icons/fa";
import BlogCard from "../../components/blog/BlogCard";
import BlogFilterBar from "../../components/blog/BlogFilterBar";
import { useBlogs } from "../../hook/useBlogs";

const Blogs = () => {
    const {
        blogs,
        currentPage,
        totalPages,
        setCurrentPage,
        filters,
        categories,
        handleFilterChange,
        handleReset
    } = useBlogs();

    return (
        <div className="panel-theme min-h-screen py-8 px-4 md:px-16 lg:px-24 text-text font-sans">
            <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden bg-gray-900 mb-10 rounded-2xl shadow-xl border border-border/30">
                <img
                    src={`${import.meta.env.BASE_URL}images/blogs/blog-banner.png`}
                    alt="blog banner"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="container mx-auto">
                <div className=" flex items-center gap-4 mb-8 border-b border-border pb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-lg opacity-40 rounded-full"></div>
                        <div className="relative p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg">
                            <FaPenNib size={26}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            BLOGS
                        </h2>
                        <p className=" text-text_light dark:text-textMuted font-medium text-sm md:text-base">
                            Tin tức · Review · Thế giới game
                        </p>
                    </div>
                </div>

                <BlogFilterBar
                    filters={filters}
                    categories={categories}
                    onChange={handleFilterChange}
                    onReset={handleReset}
                />

                {blogs && blogs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog}/>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-textMuted border border-dashed border-border rounded-2xl">
                        Không tìm thấy bài viết nào phù hợp.
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => {
                                setCurrentPage(currentPage - 1);
                                window.scrollTo({ top: 400, behavior: 'smooth' });
                            }}
                            className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40 border-white border-[1px]"
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }).map((_, index) => {
                            const page = index + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        window.scrollTo({ top: 400, behavior: 'smooth' });
                                    }}
                                    className={`px-3 py-1 rounded ${
                                        currentPage === page
                                            ? "dark:bg-gray-800 bg-blue-500 text-white font-bold border-white border-[1px]"
                                            : "bg-gray-700 text-white hover:bg-gray-600 border-white border-[1px]"
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => {
                                setCurrentPage(currentPage + 1);
                                window.scrollTo({ top: 400, behavior: 'smooth' });
                            }}
                            className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40 border-white border-[1px]"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;