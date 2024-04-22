import React, { useRef } from 'react';

export default function RefHook() {
  const inputRef = useRef('val');

  function focusInput() {
    console.log(inputRef.current)
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}