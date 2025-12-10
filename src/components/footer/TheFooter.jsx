import React from "react";

export default function TheFooter() {
  return (
    <footer className="w-full max-w-full min-h-50 flex flex-col items-center justify-center border-t border-gray-400 px-1.5 gap-y-5">
      <div className="flex flex-row items-center justify-center gap-x-2.5">
        <img
          src="/logos/micaclick_logo.svg"
          alt="MicaClick_Logo"
          className="w-12 h-12"
        />
        <h1 className="font-momoTrust text-4xl font-bold text-vintageGreen">
          MicaClick
        </h1>
      </div>
      <p className="text-center">
        &copy; 2025 MicaClick. Developed with ❤️ by{" "}
        <a
          href="https://github.com/LA4th"
          target="_blank"
          className="underline"
        >
          LA4TH
        </a>
        .
      </p>
    </footer>
  );
}
