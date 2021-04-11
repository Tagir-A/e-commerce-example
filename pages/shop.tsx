import React from "react"
import Link from "next/link"

import { Header } from "../components/Header"
import { Grid } from "../components/Grid"
import { Text } from "../components/Text"
import { initSupabase } from "../supabase/initSupabase"

export async function getStaticProps(context) {
  const supabase = initSupabase(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  const { data, error } = await supabase.from("Items").select("*")
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
      <div className="p-2">
        <Grid>
          {data.map((item) => (
            <Grid.Item key={item.__EMPTY}>
              <Grid.ItemImage src={item.image} />
              <Grid.ItemContent>
                <Grid.ItemTitle>
                  <Link href={`/items/${encodeURIComponent(item.__EMPTY)}`}>
                    <a>
                      <Text>{item.name}</Text>
                    </a>
                  </Link>
                </Grid.ItemTitle>
              </Grid.ItemContent>
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Shop
