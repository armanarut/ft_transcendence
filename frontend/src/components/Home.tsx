import React from "react"
import { Link } from 'react-router-dom'
import photo from '@SRC_DIR/assets/images/pong.jpg';
import Contacts from './Contacts';


const Home = () => {
    return (
    <div >
        <div className="items-center justify-center relative backdrop-blur-md z-[668] min-w-full  sm:text-center container mx-auto pt-5 text-2xl font-bold flex">
            <Link
                to="/login"
                className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
            >
                Login
            </Link>
            <Link
                to="/contacts"
                className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
            >
                Contacts
            </Link>
            <Link
                to="./thegame"
                className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
            >
                THE GAME
            </Link>
            <Link
                to="/chanels"
                className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
            >
                Chanels
            </Link>
            <Link
                to="/profile"
                className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
            >
                Profile
            </Link>
        </div>
        <div style={{height:"100%"}} className="flex">
            <img
                className="mt-8 w-full h-full"
                src={photo}
                alt="layer"
            />
        </div>
    </div>);
};

export default Home;