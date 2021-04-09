import React from "react"

interface Props {
  children: React.ReactNode
}

export const Grid = ({ children }: Props) => {
  return <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">{children}</div>
}

const GridItem = ({ children }: Props) => {
  return <div className="bg-blue-200 p-2 rounded-lg h-80 grid grid-rows-3">{children}</div>
}

const GridItemContent = ({ children }: Props) => {
  return <div className="row-span-1 p-2">{children}</div>
}

const GridItemTitle = ({ children }: Props) => {
  return <div className="line-clamp-2">{children}</div>
}

const GridItemImage = ({ src }: { src: string }) => {
  return (
    <div className="row-span-2 bg-gray-700 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}>
      {/* <img src={src} /> */}
    </div>
  )
}

Grid.Item = GridItem
Grid.ItemContent = GridItemContent
Grid.ItemTitle = GridItemTitle
Grid.ItemImage = GridItemImage
