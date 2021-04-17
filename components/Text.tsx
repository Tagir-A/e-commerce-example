import React from "react"

interface Props {
  children: React.ReactNode
}

export const Text = ({ children }: Props) => {
  return <span className="font-sans font-semibold subpixel-antialiased text-sm md:text-lg">{children}</span>
}
