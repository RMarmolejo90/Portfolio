import React from 'react'

export default function Clear() {

    // write a Prompt that asks if you are sure. the Yes button should clear local storage and refresh the page

    const clear = () => {
        localStorage.clear();
        window.location.reload(false);
    }

  return (
    <div>
        <button onClick={clear}>
            Clear
        </button>
    </div>
  )
}
