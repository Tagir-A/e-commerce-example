import Head from "next/head"
import Link from "next/link"

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/shop">
          <a>
            <h3>Shop &rarr;</h3>
          </a>
        </Link>
      </main>
    </div>
  )
}
