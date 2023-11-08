import cn from "@/helpers";
import Icon from "../Icon";
const Social = ({ className = '' }) => {
    return (
        <div className={cn("flex gap-x-5", className)}>
            <a href="#insta" title="Instagram" className='flex shrink-0 icon '>
                <Icon name='/assets/icons/social.svg' id='instagram'
                    className={cn('w-8 h-8 shrink-0')}
                />
            </a>
            <a href="https://t.me/test" title="Telegram" className="flex shrink-0 icon">
                <Icon name='/assets/icons/social.svg' id='telegram'
                    className={cn('w-8 h-8 shrink-0')}
                />
            </a>
        </div>
    )
}

export default Social