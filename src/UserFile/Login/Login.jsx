import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import img1 from '../../assets/user/Login.jpg';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [captchaValid, setCaptchaValid] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (captchaValid) {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User Login Successful.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } else {
      Swal.fire({
        title: "Please validate the captcha.",
        icon: "error",
      });
    }
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setCaptchaValid(true);
      setDisabled(false);
    } else {
      setCaptchaValid(false);
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>MMJ Food | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold pb-5">Login now!</h1>
            <img className="rounded-xl" src={img1} alt="food"/>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered mb-2"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-primary"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-3">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex justify-center items-center h-full text-center">
              <p className="mr-1"> Do not have an account?</p>
              <button>
                <Link to="/signup">
                  <span className="text-green-500 font-bold">Signup</span>
                </Link>
              </button>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
