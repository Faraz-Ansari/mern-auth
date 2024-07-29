import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className="bg-slate-200">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold">NexusGuard</h1>
                </Link>
                <ul className="flex gap-4 ">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/profile">
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
        </div>
    );
}

export default Header;
