import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const {register,handleSubmit,formState: { errors } } =useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError,setSignUPError ] =useState();
    const handleSignUp =(data) =>{
        console.log(data);
        setSignUPError('');
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('user created sucessfully')
            const userInfo = {
                displayName:data.name
            }
            updateUser(userInfo)
            .then( () =>{})
            .catch(err =>console.log(err));
        })
        .catch(error =>{ console.log(error)
        setSignUPError(error.message)
        });

    }
    return (
        <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-2xl text-center">SignUp</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name",{required:"name is required"})}className="input input-bordered w-full max-w-xs"/>
              {errors.name && <p className="text-red-400">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email",{required:"email is required"})}className="input input-bordered w-full max-w-xs"/>
              {errors.email && <p className="text-red-400">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password",{required:"Password is required",minLength: { value: 8, message: "atlast 8 chartacters" }})} className="input input-bordered w-full max-w-xs"/>
              {errors.password && <p className="text-red-400">{errors.password?.message}</p>}
            </div>
            <input className="btn bg-slate-700 w-full mt-8" value="Sign Up" type="submit" />
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
          </form>
          <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;