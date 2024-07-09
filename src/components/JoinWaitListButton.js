// 'use client';
// import { useContext } from "react";
// import { context } from "./ClientLayout";
import Link from "next/link"
import { SmileEmoji } from "./Svgs"

const JoinWaitListButton = () => {
    // const { func } = useContext(context);

    // const handleClick = (event) => {
        // func(true);
    // }
  return (
    <Link 
        className="bg-primary py-[8px] px-[12px] rounded-[16px] flex items-center"
        href={"/"}
       // target="_blank"
        // onClick={handleClick}
    >
        <SmileEmoji />
        <div className="ml-[12px] text-fourteen font-fourHundrend text-secondary">Join waitlist</div>
    </Link>
  )
}

export default JoinWaitListButton
