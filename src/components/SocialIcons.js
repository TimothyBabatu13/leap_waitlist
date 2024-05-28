import Image from "next/image"
import Link from "next/link"


const SocialIcons = ({ href, children }) => {
  return (
    <Link href={href} className="mr-[10px] sm:mr-[21px]">
        {children}
    </Link>
  )
}

export default SocialIcons