import React from 'react'
import { MessageSquareMore, PaperclipIcon } from "lucide-react"; 


const DateO = () => {
  return (
    <div className='flex items-center justify-between px-4'>
     <button className="text-lg text-red-500 rounded-lg bg-pink-200 p-2">
            {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })}
       </button>

        <div className='flex space-x-5'>
        <div className='flex'>
        <MessageSquareMore />
        <p>4</p>

        </div>
        <div className='flex'>
        <PaperclipIcon />
            <p>2</p>
        </div>
        </div>
          </div>
  )
}

export default DateO