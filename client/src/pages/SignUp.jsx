import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <button className="bg-slate-700 text-white p-3 hover:opacity-95 disabled:opacity-80 rounded-lg">
                    SIGN UP
                </button>
            </form>

            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-600">Sign in</span>
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
