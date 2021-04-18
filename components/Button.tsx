import React from 'react'
import Ripples from "react-ripples"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({children, ...props}: Props) => {
  return (
    <Ripples>
      <button className="bg-pink-200 p-2 rounded-md font-semibold" {...props}>
        {children}
      </button>
    </Ripples>
  )
}
