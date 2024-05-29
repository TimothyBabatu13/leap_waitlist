import Link from 'next/link'
import React from 'react'
import { SmileEmoji } from './Svgs'

const RedirectButton = ({ href, text }) => {
  return (
    <Link 
        className="bg-primary py-[8px] px-[12px] rounded-[16px] flex justify-center items-center"
        href={href}
    >
        <SmileEmoji />
        <div className="ml-[12px] text-fourteen font-fourHundrend text-secondary">{text}</div>
    </Link>
  )
}

export default RedirectButton