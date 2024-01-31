import React from 'react'
import {  useNavigate } from "react-router-dom";
export const Breadcrumbstatus = () => {
    const navigate = useNavigate();
  return (
    <div
    onClick={() => { 
      {shareStatus ? navigate(`/Drive`) : navigate(`/ShareDrive`)}
      removeAllFolderHistory()
    }}
      // href="/Drive"
      class="inline-flex items-center text-xl cursor-pointer font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      <svg
        class="w-3 h-3 me-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
      </svg>
      Home
    </div>
  )
}
