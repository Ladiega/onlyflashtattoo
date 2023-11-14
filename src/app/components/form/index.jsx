'use client'

import { useRef } from 'react';
import Image from 'next/image';
import logoGrisAzul from '../../../../public/img/logogrisazul.svg'

export default function Form() {

const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (
    <div>
      
    <form  className="flex flex-col gap-3 text-center">
      <Image
        src={logoGrisAzul}
        alt="logo onlyflash"
        width={200}
      />

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your email"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
        
      />

        <button onSubmit={subscribeUser} type="submit" value="" name="subscribe" className=' bg-slate-700 text-yellow-50 p-2 rounded-md mx-1 mb-4 '>
        Subscribe
      </button> 
      
    </form>
    </div>
  );
}