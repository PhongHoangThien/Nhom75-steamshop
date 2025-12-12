import {Link} from "react-router-dom";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className='bg-blue-500 shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold text-white'>
                    <Link to="/" className="flex items-center justify-center">
                        <img src="/images/logo.png" alt="" className="w-24 h-auto"/>
                        MULTIPLE-SHOP
                    </Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type="text" placeholder="Search" className='w-full py-2' />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 h-full px-3 bg-blue-700 flex items-center justify-center"
                        >
                            <FaSearch className="w-5 h-5 text-white" />
                        </button>
                    </form>
                </div>
                <div className='flex items-center space-x-4 text-white'>
                    <button className=''>
                        <FaUser className='w-5 h-5' />
                    </button>
                    <button className=''>Login</button>
                    <button className=''>Register</button>

                    <Link to="/cart" className='flex flex-row border border-white px-2 py-2 rounded-md space-x-2'>
                        <FaShoppingCart className='w-6 h-6 text-white'/>
                        Giỏ hàng
                        <p className='bg-white text-black text-center rounded-md'>0</p>
                    </Link>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-10 text-sm text-white font-bold'>
                <Link to="/">
                    Home
                </Link>
                <Link to={"/"}>
                    Shop
                </Link>
                <Link to={"/"}>
                    About
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;