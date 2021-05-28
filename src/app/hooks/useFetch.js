import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.error(err, err.message)
      }
    }
    fetchProducts()
  }, [url])

  return {
    data,
    loading
  }
}