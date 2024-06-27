import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });

    };

    const handleSubmit = async (e) => {
        try {
            setLoading(true);
            setError(false);
            e.preventDefault();
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
        
            });
            const data = await response.json();
            console.log(data);
            setLoading(false);
            if(data.success === false) {
                setError(true);
                return;
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }
        
    }


    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />
                <button disabled={loading} className="bg-slate-700 text-white p-3 hover:opacity-95 disabled:opacity-80 rounded-lg">
                    {loading ? "Loading..." : "Sign Up"}
                </button>
            </form>

            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-600">Sign in</span>
                </Link>
            </div>
            <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
        </div>
    );
}

export default SignUp;
