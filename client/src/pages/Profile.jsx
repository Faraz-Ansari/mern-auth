import { useSelector } from "react-redux";

function Profile() {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className="max-w-lg p-3 mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
            <form className="flex flex-col gap-4">
                <img
                    src={currentUser.restOfUser.profilePicture}
                    alt="profile picture"
                    className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
                />

                <input
                    type="text"
                    defaultValue={currentUser.restOfUser.username}
                    id="username"
                    placeholder="Username"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <input
                    type="email"
                    defaultValue={currentUser.restOfUser.email}
                    id="email"
                    placeholder="Email"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="bg-slate-100 p-3 rounded-lg"
                />

                <button
                    className="bg-slate-700 text-white p-3 rounded-lg 
                    hover:opacity-95 disabled:opacity-80"
                >
                    UPDATE
                </button>
            </form>
            <div className="flex justify-between mt-5">
                <span className="text-red-700 cursor-pointer">Delete Account</span>
                <span className="text-red-700 cursor-pointer">Sign out</span>
            </div>
        </div>
    );
}

export default Profile;
