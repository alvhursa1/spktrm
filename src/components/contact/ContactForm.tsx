'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted', { name, email })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col justify-center h-full -mt-[10%]">
      <h2 className="text-center font-marcellus text-[1.25rem] font-bold mb-14">
        CONTACT US
      </h2>
      <div className="flex w-full mb-4">
        <div className="w-1/2 pr-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border-b border-white bg-transparent font-marcellus text-[1rem] focus:outline-none"
          />
        </div>
        <div className="w-1/2 pl-2 border-l border-white">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border-b border-white bg-transparent font-marcellus text-[1rem] focus:outline-none"
          />
        </div>
      </div>
      <button type="submit" className="mt-8 mx-auto block">
        <div className="flex flex-col items-center">
          <div className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100" />
          </div>
          <span className="block mt-2 text-center whitespace-nowrap text-[1.125rem] font-broone">
            SUBMIT
          </span>
        </div>
      </button>
    </form>
  )
}