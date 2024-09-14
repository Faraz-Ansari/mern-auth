import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <header className="shadow-md">
            <div className="flex justify-between items-center max-w-4xl mx-auto p-3">
                <Link to="/">
                    <h1 className="text-sm md:text-3xl font-bold flex flex-wrap">
                        <span className="text-blue-600">Nexus</span>
                        <span className="text-slate-800">Guard</span>
                    </h1>
                </Link>
                <ul className="flex gap-5 md:text-lg ">
                    <Link to="/" className="hover:text-red-700">
                        <li>Home</li>
                    </Link>
                    <Link to="/profile" className="hover:text-red-700">
                        {currentUser ? (
                            <img
                                src={currentUser.profilePicture}
                                className="h-7 w-7 rounded-full object-cover"
                            ></img>
                        ) : (
                            <li>Sign In</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;
