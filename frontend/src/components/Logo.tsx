import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@SRC_DIR/assets/logo.svg';

export const Logo = ({children}) => {
    return (
        <div className="">       
              <div>
                <div className="bg-wblack/50 box-border h-12 w-12 p-8 border-1">
                    <Link
                        to="../"
                        style={{backgroundImage: `url(${logo})`,
                         backgroundRepeat: "no-repeat",}}
                        className="px-10 text-1xl mx-14 font-semibold leading-7 text-black-900"
                    >
                        Logo
                    </Link>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}