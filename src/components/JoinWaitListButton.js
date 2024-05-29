// 'use client';
// import { useContext } from "react";
// import { context } from "./ClientLayout";
import { SmileEmoji } from "./Svgs"

const JoinWaitListButton = () => {
    // const { func } = useContext(context);

    // const handleClick = (event) => {
        // func(true);
    // }
  return (
    <button 
        className="bg-primary py-[8px] px-[12px] rounded-[16px] flex items-center"
        // onClick={handleClick}
    >
        <SmileEmoji />
        <div className="ml-[12px] text-fourteen font-fourHundrend text-secondary">Join waitlist</div>
    </button>
  )
}

export default JoinWaitListButton