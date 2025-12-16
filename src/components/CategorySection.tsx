
const CategorySection = () => {
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
    ]
    return (
        <div className="container mx-auto grid gird-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
            {categories.map((category, index) => (
                <div key={index} className="relative h-64 card-hover">
                    <img src={`./images/games/${category.image}`} alt={category.title} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute top-5 left-5 bg-panel/50 p-3">
                        <p className="text-title text-text font-bold">{category.title}</p>
                        {/*<p className="">Xem tất cả</p>*/}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategorySection