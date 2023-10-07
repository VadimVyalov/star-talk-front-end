
import Image from "next/image"
import instagram_icon from "../../../public/assets/icons/instagram.svg"
import telegram_icon from "../../../public/assets/icons/telegram.svg"
const Social = () => {
    return (
        <div className="flex gap-x-5">
            <a href="#insta" title="Instagram" className=' '>
                <Image
                    src={instagram_icon}
                    alt="instagram icon"
                    width={32}
                    height={32}
                />
            </a>
            <a href="#telega" title="Telegram">
                <Image
                    src={telegram_icon}
                    alt="telegram icon"
                    width={32}
                    height={32}
                />
            </a>

        </div>
    )
}

export default Social