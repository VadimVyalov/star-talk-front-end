
//import Image from "next/image"
//import instagram_icon from "../../../public/assets/icons/instagram.svg"
import telegram_icon from "../../../public/assets/icons/telegram.svg"

import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { url } from "inspector";
const Social = () => {
    return (
        <div className="flex gap-x-5">
            <a href="#insta" title="Instagram" className=' '>

                <BsInstagram className=" icon" />
            </a>
            <a href="#telega" title="Telegram">

                <BsTelegram className="icon" />


            </a>

        </div>
    )
}

export default Social