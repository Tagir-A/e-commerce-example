import React from "react"
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import Zoom from "react-medium-image-zoom"

import { initSupabase } from "../../supabase/initSupabase"
import { Header } from "../../components/Header"
import { Text } from "../../components/Text"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { iid: "0" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { iid } }) => {
  const supabase = initSupabase(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  let { data: items, error } = await supabase.from("Items").select("*").eq("__EMPTY", iid)
  return {
    props: {
      items,
    },
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ItemPage = ({ items }: Props) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  const item = items[0]
  console.log(item)
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-full grid grid-rows-3 grid-cols-3">
        <Zoom wrapStyle={{width: '100%'}}>
          <div
            className=" w-80 h-80 bg-gray-700 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </Zoom>
      </div>
      <div>
        Footer
        <Text>{item.name}</Text>
      </div>
    </div>
  )
}

export default ItemPage
