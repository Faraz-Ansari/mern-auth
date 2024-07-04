import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            const response = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            const data = await response.json();
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    return (
        <button
            type="button"
            className="bg-red-700 text-white rounded-lg p-3 hover:opacity-95"
            onClick={handleGoogleClick}
        >
            CONTINUE WITH GOOGLE
        </button>
    );
};

export default OAuth;
