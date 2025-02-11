"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [response, setResponse] = useState(""); // Tracks Yes/No response

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4">
      {response === "" ? (
        <>
          <Image
            src="/confusion-love-teddy.gif"
            width={300}
            height={300}
            alt="Confused Teddy Love"
            className="w-[80%] max-w-[300px] h-auto"
          />
          <h1 className="text-2xl md:text-3xl font-bold">Do you love me?</h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[300px]">
            <button
              onClick={() => setResponse("yes")}
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all w-full"
            >
              Yes
            </button>
            <button
              onClick={() => setResponse("no")}
              className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all w-full"
            >
              No
            </button>
          </div>
        </>
      ) : response === "yes" ? (
        <div className="text-lg font-medium text-gray-700 px-4">
          <p>I knew it! You love me so well.</p>
          <p>That&apos;s why I always love you and will stay with you ❤️</p>
          <Image
            src="/teddy-love.gif"
            width={350}
            height={350}
            alt="Cute couple"
            className="w-[80%] max-w-[350px] h-auto mt-4"
          />
        </div>
      ) : (
        <div className="text-lg font-medium text-red-600 px-4">
          <p>Why you are lying? 😢</p>
          <Image
            src="/no-no.gif"
            width={350}
            height={350}
            alt="No-No GIF"
            className="w-[80%] max-w-[350px] h-auto mt-4"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm font-semibold mt-8">
        Build by FahimDev
      </footer>
    </div>
  );
}
