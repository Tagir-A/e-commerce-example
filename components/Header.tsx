import React from "react"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full bg-blue-200">
      <Link href="/shop">
        <a>
          <h1 className="text-4xl">Pikinails</h1>
        </a>
      </Link>
    </header>
  )
}
