import React from 'react';

export default function ContactForm(props) {

  return (
    <form name="contact" method="post" className="py-8 font-body">
      <input type="hidden" name="form-name" value="contact" />

      <div className="
          border-2 border-contactlight dark:border-contactdark 
          inline-block 
          py-12 px-16 md:py-24 md:px-48 xl:px-64 
          w-full rounded-lg transition-colors duration-500">
        <div className="">
          <label id="user-name-hint" className="text-contactlight dark:text-contactdark text-sm md:text-md font-medium transition-colors duration-500">Your Name:
            <input className="
                block w-full
                bg-transparent transition-colors duration-500
                text-black dark:text-accenttrim text-md md:text-lg
                border-b-2 border-contactlight dark:border-contactdark
              focus:border-black dark:focus:border-accenttrim focus:outline-none"
              type="text"
              name="name"
              aria-describedby="user-name-hint"
              required
              autoComplete='name'
            />
          </label>
        </div>

        <div className="mt-8">
          <label id="user-email-hint" className="text-contactlight dark:text-contactdark text-sm md:text-md font-medium transition-colors duration-500">Your Email:
            <input className="
                block w-full
                bg-transparent transition-colors duration-500
                text-black dark:text-accenttrim text-md md:text-lg
                border-b-2 border-contactlight dark:border-contactdark
              focus:border-black dark:focus:border-accenttrim focus:outline-none
                required"
              type="email"
              name="email"
              aria-describedby="user-email-hint"
              required
              autoComplete='email'
            />
          </label>
        </div>

        <div className="mt-8">
          <label id="message-hint" className="text-contactlight dark:text-contactdark text-sm md:text-md font-medium transition-colors duration-500">Message:
            <textarea className="
                block w-full min-h-32 max-h-64
                bg-transparent transition-colors duration-500
                text-black dark:text-accenttrim text-md md:text-lg
                border-b-2 border-contactlight dark:border-contactdark
              focus:border-black dark:focus:border-accenttrim focus:outline-none
                required"
              name="message"
              aria-describedby="message-hint"
              rows={5}
              required
            />
          </label>
        </div>

        <div className='mt-16'>
          <button className="
            px-4 py-2
            border-contactlight dark:border-contactdark border-2 rounded-md 
            hover:bg-black dark:hover:bg-accenttrim
            hover:border-black dark:hover:border-accenttrim
            text-contactlight dark:text-contactdark
            hover:text-primary dark:hover:text-black
            transition-all duration-500
            font-body font-medium text-sm md:text-md"
            type="submit">Send</button>
        </div>
      </div>
    </form>
  )
}