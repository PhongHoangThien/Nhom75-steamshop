import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import BlogCard from "../../components/blog/BlogCard";
import { useBlogDetail } from "../../hook/useBlogDetail";

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { blog, relatedBlogs, exists } = useBlogDetail(id);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    if (!exists || !blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-danger">
                Bài viết không tồn tại
            </div>
        );
    }

    return (
        <div className=" panel-theme bg-white min-h-screen px-4 md:px-16 lg:px-24 py-10">
        <div className="rounded-2xl box-shadow dark:bg-panel bg-white min-h-screen px-4 md:px-16 lg:px-24 py-10 max-w-10xl m-auto">
            <div className="max-w-5xl mx-auto">
                <div className="w-full h-[360px] rounded-2xl overflow-hidden mb-8 box-shadow">
                    <img
                        src={`${import.meta.env.BASE_URL}images/blogs/${blog.image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="mb-4">
                    <span className="inline-block bg-danger text-white px-4 py-1 rounded-full text-sm font-bold">
                        {blog.category}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                    {blog.title}
                </h1>
                <div className="mt-auto text-sm text-gray-500 dark:text-gray-400 font-medium mb-8">
                    <span>{blog.date}</span>
                    <span className="mx-1">bởi</span>
                    <span
                        className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:underline transition-all"
                    >
                        {blog.author}
                    </span>
                </div>
                <div className="prose dark:prose-invert max-w-none leading-relaxed">
                    {blog.content.trim().split("\n\n").map((p, i) => (
                        <p key={i} className="mb-6">{p}</p>
                    ))}
                </div>
                {relatedBlogs.length > 0 && (
                    <div className="border-t border-border pt-10 mt-12">
                        <h2 className="text-2xl font-extrabold mb-6">Bài viết liên quan</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {relatedBlogs.map(item => (
                                <BlogCard key={item.id} blog={item} />
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                to="/blogs"
                                className="inline-block btn-theme px-6 py-3 rounded-xl font-bold"
                            >
                                Xem thêm blog
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default BlogDetail;