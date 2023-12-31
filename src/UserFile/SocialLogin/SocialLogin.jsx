import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email}
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
      .then((res) => res.json())
      .then(() =>{          
          navigate(from, { replace: true });        
      })
      .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <div className="divider divider-success">Login with Google</div>
      <div className="text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-success w-3/4">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
