
import { useFetch } from 'app/hooks/useFetch'
import { AdvertBanner, List } from 'app/components'

export default function IndexPage() {
  const { data, loading } = useFetch('http://localhost:4000/products')

  if (loading) return <h1>Loader goes here</h1>

  return (
    <>
      <AdvertBanner
        header="UP TO 50% OFF WARDROBE WINS!"
        subheader="See website for Ts&Cs. Selected products only."
        path="/promos"
      />
      <List list={data} />
    </>
  )
}
