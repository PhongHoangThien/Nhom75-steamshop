import { useNavigate } from "react-router-dom";

const CategorySection = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: 'Rougelike',
            image: 'hades.png',
        },
        {
            title: 'Survival',
            image: 'green-hell.png',
        },
        {
            title: 'Online',
            image: 'path-of-exile.png',
        },
        {
            title: 'Offline',
            image: 'red-dead.png',
        },
        {
            title: 'Shooter',
            image: 'doom.png',
        },
        {
            title: 'Adventure',
            image: 'minecraft.png',
        },
    ];

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onClick={() =>
                        navigate(`/products?category=${encodeURIComponent(category.title)}`)
                    }
                    className="relative h-64 card-hover cursor-pointer transform hover:scale-105 transition duration-300"
                >
                    <img
                        src={`./images/games/${category.image}`}
                        alt={category.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-5 left-5 bg-panel/70 backdrop-blur-sm p-3 rounded-lg">
                        <p className="text-title text-text font-bold text-lg">
                            {category.title}
                        </p>
                        {/*<p className="text-2xl text-gray-300">Xem tất cả</p>*/}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySection;
