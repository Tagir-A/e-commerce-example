import React from "react"
import Link from "next/link"

import { Header } from "../components/Header"
import { Grid } from "../components/Grid"
import { Text } from "../components/Text"
import { initSupabase } from "../supabase/initSupabase"
import { BottomNavigation } from "../components/BottomNavigation"
import { Button } from "../components/Button"

export async function getStaticProps(context) {
  const supabase = initSupabase(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  const { data, error } = await supabase.from("Items").select("*").limit(10)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

function Shop({ data }) {
  return (
    <div>
      <Header />
      <div className="p-2 max-w-screen-xl m-auto pb-14 md:pb-0">
        <Grid>
          {data.map((item) => (
            <Grid.Item key={item.__EMPTY}>
              <Grid.ItemImage src={item.image} alt={item.name} />
              <Link href={`/items/${encodeURIComponent(item.__EMPTY)}`}>
                <a>
                  <Grid.ItemContent>
                    <Grid.ItemTitle>
                      <Text>{item.name}</Text>
                    </Grid.ItemTitle>
                    <Button onClick={e => {
                      e.preventDefault()
                    }}>В корзину</Button>
                  </Grid.ItemContent>
                </a>
              </Link>
            </Grid.Item>
          ))}
        </Grid>
        <BottomNavigation />
      </div>
    </div>
  )
}

export default Shop
