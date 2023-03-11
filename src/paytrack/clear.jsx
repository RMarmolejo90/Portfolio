import React from 'react'

export default function Clear() {

    // write a Prompt that asks if you are sure. the Yes button should clear local storage and refresh the page

    const clear = () => {
        localStorage.clear();
        window.location.reload(false);
    }

  return (
    <div className='py-12'>
        <button onClick={clear} className="bg-slate-600 p-1 rounded-md font-semibold text-sm text-white">
            Reset All
        </button>
    </div>
  )
}
