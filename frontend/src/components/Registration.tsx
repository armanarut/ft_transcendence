import React, {useState} from 'react'
import { Layout } from './Layout'
import { Logo } from './Logo'
import { Link, useLocation } from 'react-router-dom'
import photo from '@SRC_DIR/assets/images/pong.jpg';
import { instance } from "./utils"



const AutoRootComponent = () => {
    const [firstname, setFirstname] = useState('')
    const [lasttname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const lacation = useLocation()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const userData = {
            firstname,
            lasttname,
            username,
            email,
            gender,
            password
        }
        const user = await instance.post('/login', userData)
        console.log(user.data)
    }
}

const Registration = () => {
    return (
   <Logo>
            <div style={{backgroundImage: `url(${photo})`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "cover"}}
                className="flex min-h-full items-center justify-center px-4 py-52 sm:px-6 lg:px-8 ">
                
                <div className="bg-white/95 box-border h-62 w-62 p-8 border-1">
                <div className="mt-1 w-full h-full max-w-md space-y-8">
                    <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Registration</h2>
                    <p className=" mt-2 text-center text-sm text-gray-900 text-center px-10 mx-28"><a>or  </a>
                        <Link
                            to="/login"
                            className=" font-medium  hover:text-indigo-500"
                             >
                             Login
                             
                        </Link>
                    </p>
                    </div>
                    <form  className="mt-8 space-y-6" action="#" method="POST">
                            <input 
                                type="hidden" 
                                name="remember" 
                                value="true"
                            />
                            <div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="first-name" 
                                        className="sr-only">First name
                                    </label>
                                    <input 
                                        id="first-name" 
                                        name="first" 
                                        type="first" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="First name"
                                        />
                                </div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="last-name" 
                                        className="sr-only">Last name
                                    </label>
                                    <input 
                                        id="last-name" 
                                        name="last" 
                                        type="last" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="user-name" 
                                        className="sr-only">Username
                                        </label>
                                    <input 
                                        id="user-name" 
                                        name="username" 
                                        type="username" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="email-address" 
                                        className="sr-only">Email address
                                        </label>
                                    <input 
                                        id="email-address" 
                                        name="email" 
                                        type="email" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="gen-der" 
                                        className="sr-only">Gender
                                        </label>
                                    <input 
                                        id="gen-der" 
                                        name="gender" 
                                        type="gender" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="Gender"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label 
                                        htmlFor="password" 
                                        className="sr-only">Password
                                        </label>
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        required className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="flex items-center justify-between">

                            </div>

                            <div>
                                <button 
                                    type="submit" 
                                    className="group relative flex w-full justify-center rounded-md bg-black/75 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg 
                                        className="h-5 w-5 group-hover:text-indigo-400" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor" 
                                        aria-hidden="true">
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" 
                                        clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Create your account
                                </button>
                            </div>
                    </form>
                </div>
                </div>

            </div>
    </Logo>
    );
};

export default Registration;
