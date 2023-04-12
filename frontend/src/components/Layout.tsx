import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({children}) => {
    return (
        <div className="">
            <div className="">
              <div>
                <div className="items-center justify-center relative backdrop-blur-md z-[668] min-w-full  sm:text-center container mx-auto pt-5 text-2xl font-bold flex">
                    <Link
                        to="../"
                        className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
                    >
                        Home
                    </Link>
                    <Link
                        to="/contacts"
                        className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
                    >
                        Contacts
                    </Link>
                    <Link
                        to="/thegame"
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
              </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export type LayoutType = typeof Layout