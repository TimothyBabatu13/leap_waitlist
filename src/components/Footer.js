
import SocialIcons from './SocialIcons'
import { Facebook, Instagram, Linkedln, Reddit, Tiktok, Twitch, Twitter } from './Svgs'

const data  = [
    {
        "href": '/',
        "children": <Linkedln /> 
    },
    {
        "href": '/',
        "children": <Instagram />
    },
    {
        "href": '/',
        "children": <Facebook />
    },
    {
        "href": 'https://twitter.com/learn_earn_play',
        "children": <Twitter /> 
    },
    {
        "href": '/',
        "children": <Reddit />
    },
    {
        "href": '/',
        "children": <Tiktok />
    },
    {
        "href": '/',
        "children": <Twitch />
    },
]

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center'>
        <div className='flex items-center mb-[28px]'>
            {data.map((item, id) => (
                <SocialIcons 
                    href={item.href}
                    children={item.children}
                    key={id}
                />
            ))}
        </div>
        <h5 className='text-primary text-[16px] sm:text-[20px] font-fourHundrend'>© All Rights Reserved. </h5>
    </footer>
  )
}

export default Footer