import React, { ReactElement } from 'react';

const ContactForm = (): ReactElement => {
  return (
    <form className="w-full rounded-lg flex flex-col items-center p-4 border">
      <h2 className="text-2xl font-bold">Отправить сообщение</h2>

      <label htmlFor="fullName" className="font-light mt-8">
        Ваше имя<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        className="w-full bg-transparent border-b py-2 pl-4 focus:border-none focus:outline-none focus:rounded-md focus:ring-1 font-light ring-neutral-400"
      />

      <label htmlFor="email" className="font-light mt-4">
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="w-full bg-transparent border-b py-2 pl-4 focus:border-none focus:outline-none focus:rounded-md focus:ring-1 font-light ring-neutral-400"
      />

      <label htmlFor="subject" className="font-light mt-4">
        Тема<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className="w-full bg-transparent border-b py-2 pl-4 focus:border-none focus:outline-none focus:rounded-md focus:ring-1 font-light ring-neutral-400"
      />

      <label htmlFor="message" className="font-light mt-4">
        Сообщение<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        className="w-full bg-transparent border-b py-2 pl-4 focus:border-none focus:outline-none focus:rounded-md focus:ring-1 font-light ring-neutral-400"
      ></textarea>
      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 font-light rounded-md text-lg flex flex-row items-center border hover:bg-black hover:text-gray-50"
        >
          Отправить
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
