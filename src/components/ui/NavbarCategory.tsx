import { useEffect, useRef } from "react";
import { FaList } from "react-icons/fa";
import { CATEGORY_MENU } from "../../data/categoryMenu";
import { useNavbarCategory } from "../../hook/useNavbarCategory";
import { useNavigate } from "react-router-dom";

const CategoryDropdown = () => {
    const {
        open,
        onHover,
        onLeave,
        onClickToggle,
        close,
        selectCategory
    } = useNavbarCategory();
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                open &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                close();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onClick={onClickToggle}
                className="flex items-center gap-2 cursor-pointer font-bold
                           hover:scale-110 transition text-text dark:hover:text-primary"
            >
                <span>Danh mục</span>
                <FaList />
            </div>

            {open && (
                <div className="absolute left-0 top-full mt-4 z-50
                                panel-theme w-[1080px] p-6 grid grid-cols-3 gap-6">
                    <div>
                        <h4 className="mb-3 font-semibold opacity-80">
                            Danh mục
                        </h4>
                        <ul className="space-y-2">
                            {CATEGORY_MENU.categories.map(cat => (
                                <li
                                    key={cat}
                                    onClick={() => selectCategory(cat)}
                                    className="px-3 py-2 rounded-md cursor-pointer
                                               hover:bg-transparent/20"
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 font-semibold opacity-80">
                            Khám phá
                        </h4>
                        <ul className="space-y-2">
                            {CATEGORY_MENU.quickLinks.map(link => (
                                <li
                                    key={link.label}
                                    onClick={() => {
                                        navigate(link.path);
                                        close();
                                    }}
                                    className="flex items-center gap-2 px-3 py-2
                                               rounded-md cursor-pointer
                                               hover:bg-transparent/20"
                                >
                                    <link.icon className="opacity-80" />
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        onClick={() => {
                            navigate(CATEGORY_MENU.highlight.path);
                            close();
                        }}
                        className="rounded-lg cursor-pointer
                                   bg-gradient-to-br from-primary/30 to-primary/10
                                   p-4 flex flex-col justify-between
                                   hover:scale-[1.02] transition"
                    >
                        <div>
                            <h3 className="text-lg font-bold">
                                {CATEGORY_MENU.highlight.title}
                            </h3>
                            <p className="text-sm opacity-80 mt-2">
                                {CATEGORY_MENU.highlight.description}
                            </p>
                        </div>
                        <span className="text-sm font-semibold mt-4">
                            Xem ngay →
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
