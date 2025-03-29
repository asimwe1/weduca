
import React from 'react';

const LogoHeader = () => {
  return (
    <div className="flex items-center mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-600"
      >
        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
        <path d="M12 13v9" />
        <path d="M5 13v2a4 4 0 0 0 4 4h4" />
      </svg>
      <span className="text-green-600 font-bold text-2xl ml-2">Weduca Apply LTD</span>
    </div>
  );
};

export default LogoHeader;
