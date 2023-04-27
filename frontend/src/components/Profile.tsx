import React from "react"
import { Layout } from "./Layout";
import photo from '@SRC_DIR/assets/images/pong.jpg';


const Profile = () => {
    return (
        <Layout>
            <div className="mt-8 relative w-full h-screen">
                <img className="absolute w-full h-full object-cover mix-blend-overlay" src={photo} alt="/" />

            <div className="grid place-items-center h-screen">
                <div className="rounded=3xl p-6 w-[450] text-white h-[250] bg-[#171822]">
                    Hi
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default Profile;
