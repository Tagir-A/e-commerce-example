import React from "react"
import Zoom from "react-medium-image-zoom"
import Image from "next/image"

interface Props {
  children: React.ReactNode
}

export const Grid = ({ children }: Props) => {
  return <div className="grid gap-2  lg:grid-cols-4 grid-cols-2">{children}</div>
}

const GridItem = ({ children }: Props) => {
  return <div className="p-2 rounded-lg h-80 grid grid-rows-3 hover:shadow-md">{children}</div>
}

const GridItemContent = ({ children }: Props) => {
  return <div className="row-span-1 p-2">{children}</div>
}

const GridItemTitle = ({ children }: Props) => {
  return <div className="line-clamp-2">{children}</div>
}

const GridItemImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="row-span-2 w-full h-full">
      <Zoom wrapStyle={{ width: "100%", height: "100%" }}>
        <Image className="h-full w-full" src={src} alt={alt} layout="fill" objectFit="contain" />
        {/* <div className="h-full w-full bg-gray-700 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}>
          <img src={src} />
        </div> */}
      </Zoom>
    </div>
  )
}

Grid.Item = GridItem
Grid.ItemContent = GridItemContent
Grid.ItemTitle = GridItemTitle
Grid.ItemImage = GridItemImage
