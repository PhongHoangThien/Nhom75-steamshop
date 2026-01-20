import {useNavbarSearch} from "../../hook/useNavbarSearch";
import {useEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const NavbarSearch = () => {
    const {
        search,
        suggestions,
        setSuggestions,
        handleSearch,
        handleChange,
    } = useNavbarSearch();

    const searchRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(e.target as Node)
            ) {
                setSuggestions([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='relative flex-1 mx-4' ref={searchRef}>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Tìm kiếm sản phẩm"
                       className='dark:bg-panelLight/30 bg-text border-theme-nav w-full py-2 px-3 rounded-md'
                       value={search}
                       onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn-theme-nav border-theme-nav absolute right-0 top-0 h-full px-3 flex items-center justify-center rounded-r-md "
                >
                    <FaSearch className="w-5 h-5"/>
                </button>

                {suggestions.length > 0 && (
                    <div className="absolute z-50 w-full panel-theme border border-theme-nav rounded-md mt-1">
                        {suggestions.map((item) => (
                            <div
                                onClick={() => setSuggestions([])}
                                key={item.id}
                                className="btn-theme px-3 py-2 cursor-pointer"
                            >
                                <Link className="col-span-5 flex gap-4" to={`/product/${item.id}`}>
                                    <img
                                        src={`./images/games/${item.image}`}
                                        alt={item.name}
                                        className="w-32 h-16 object-cover card-hover"
                                    />
                                    <div className="text-xs mt-1 space-y-2">
                                        <h3 className="text-base font-bold">
                                            {item.name}
                                        </h3>
                                        <p>{item.category}</p>
                                        <p>{item.publisher}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};

export default NavbarSearch;
