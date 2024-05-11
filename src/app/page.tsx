"use client";

import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const messageListener = window.addEventListener(
      "message",
      (nativeEvent) => {
        console.log(nativeEvent?.data);
      }
    );

    return () => {
      return messageListener;
    };
  }, []);

  const sendMessage = () => {
    window.postMessage("Hi from web app");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="social-login text-center z-10">
          <button
            onClick={sendMessage}
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-20 py-5 rounded-md shadow-md"
          >
            Google
          </button>
        </div>
      </div>
    </main>
  );
}
