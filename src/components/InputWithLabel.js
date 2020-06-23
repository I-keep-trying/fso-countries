import React, { useEffect, useRef } from 'react'

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  onInputSubmit,
  onInputSubmit1,
  onReset,
  children,
}) => {
  // With 'children' the 'label' prop was no longer needed; idk why
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.select()
  }, [inputRef])

  return (
    <>
      <form onClick={() => inputRef.current.select()} onSubmit={onInputSubmit}>
        <label htmlFor={id}>{children}</label>
        <input
          id={id}
          type={type}
          value={value}
          autoFocus={isFocused}
          onChange={onInputChange}
          ref={inputRef}
        />
        <input type="submit" value="Name starts with" />
        <button onClick={onInputSubmit1}>Name Includes</button>
        <button onClick={onReset}>Reset</button>
      </form>
    </>
  )
}

export default InputWithLabel
