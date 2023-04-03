import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register, handleSubmit ,formState:{errors}, } = useForm();
  const{signIn} = useContext(AuthContext);
  const [loginError,setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from =location.state?.from?.pathname || '/';
  
  const handleLogin = data =>{
    console.log(data);
    setLoginError('');
    signIn(data.email,data.password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true});
    })
    .catch(error =>{ 
        console.log(error.message)
        setLoginError(error.message);
  });
  }


  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email",{required:"Email Address is required"})} className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className="text-red-400">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password",{required:"Password is required",minLength: { value: 8, message: "atlast 8 chartacters" }})} className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p className="text-red-400">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>
          <input className="btn bg-slate-700 w-full" type="submit" />
        <div>
            {loginError && <p>{loginError}</p>}
        </div>
        </form>
        <p>New to doctor portal  <Link className="text-sky-400" to="/signup">Create a new Account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
