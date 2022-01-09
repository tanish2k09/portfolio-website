import React from 'react';

export default function ContactForm(props) {

  return (
    <form name="contact" method="post" className="py-8 font-body">
      <input type="hidden" name="form-name" value="contact" />

      <div className="border-2 border-contactlight dark:border-contactdark inline-block py-32 px-64 w-full rounded-lg">
        <div className="">
          <label id="user-name-hint" className="text-contactlight dark:text-contactdark text-md">Your Name:</label>
          <input className="
              block w-full
              bg-transparent 
              text-black text-xl
              border-b-2 border-contactlight dark:border-contactdark
            focus:border-black dark:focus:border-black focus:outline-none
              required"
            type="text"
            name="name"
            aria-describedby="user-name-hint"
          />
        </div>

        <div className="mt-8">
          <label id="user-email-hint" className="text-contactlight dark:text-contactdark text-md">Your Email:</label>
          <input className="
              block w-full
              bg-transparent 
              text-black text-lg
              border-b-2 border-contactlight dark:border-contactdark
            focus:border-black focus:outline-none
              required"
            type="email"
            name="email"
            aria-describedby="user-email-hint"
          />
        </div>

        <div className="mt-8">
          <label id="message-hint" className="text-contactlight dark:text-contactdark text-md">Message:</label>
          <textarea className="
              block w-full min-h-32 max-h-64
              bg-transparent 
              text-black text-lg
              border-b-2 border-contactlight dark:border-contactdark
            focus:border-black focus:outline-none
              required"
            name="message"
            aria-describedby="message-hint"
            rows={5}
          />
        </div>

        <div className='mt-16'>
          <button className="
            px-4 py-2
            border-contactlight dark:border-contactdark border-2 rounded-md 
            hover:bg-black dark:hover:bg-black
            hover:border-black dark:hover:border-black
            text-contactlight dark:text-contactdark
            hover:text-primary dark:hover:text-primary
            transition-all duration-500" 
            type="submit">Send</button>
        </div>
      </div>
    </form>
  )
}