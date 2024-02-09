import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import React from 'react';
import signupimg from "../../../../public/image/signupimg.png"
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { signup, signInWithGoogle } = useContext(AuthContext)
    const navugate = useNavigate()
    const handlecreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name)
        signup(email, password, name)
            .then(result => {
                const user = result.user;
                navugate('/')
            })
            .catch(error => {
                navugate('/')
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                alert("ncie")
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="grid items-center h-screen gap-10 px-12 py-20 md:grid-cols-2">
            <div>
                <img className="rounded-xl h-[750px]" src={signupimg} alt="" />
            </div>
            <section className="bg-gray-1 rounded-xl  shadow-2xl shadow-[#d5dadc] ...   dark:bg-dark lg:py-[10px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                                <div className="mb-10 text-center md:mb-16">
                                    <a
                                        href="/#"
                                        className="mx-auto inline-block max-w-[180px]"
                                    >
                                        <h1 className="text-3xl font-extrabold text-orange-500">E-Shopping</h1>
                                    </a>
                                </div>

                                {/* login from */}
                                <form onSubmit={handlecreateUser}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="mt-6 form-control">
                                        <button className="w-full px-5 py-3 text-base font-medium text-white transition bg-orange-500 border rounded-md shadow-lg cursor-pointer border-ora500bg-orange-500 hover:border-orange-500 shadow-orange-500/50 hover:bg-orange-500 hover:bg-opacity-90">Sign Up</button>
                                    </div>
                                </form>
                                {/*  */}

                                <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                                    <div className="font-bold text-orange-500 divider">Or</div>
                                </p>
                                <ul className="flex justify-between mb-12 -mx-2">
                                    <div className="w-full px-2">
                                        <li>
                                            <a
                                                href="/#"
                                                className="flex h-11 items-center justify-center rounded-md bg-[#0d89ee] hover:bg-opacity-90"
                                            >
                                                <svg
                                                    width="10"
                                                    height="20"
                                                    viewBox="0 0 10 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </div>
                                    <div className="w-full px-2">
                                        <li>
                                            <a onClick={handleGoogleSignIn}

                                                className="flex h-11 items-center justify-center rounded-md bg-[#0a7917] hover:bg-opacity-90"
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                                <p className="text-base text-body-color dark:text-dark-6">
                                    <span className="pr-0.5"> have any account? </span>
                                    <Link to={'/signin'}
                                        className="font-bold text-orange-500 underline"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SignUp