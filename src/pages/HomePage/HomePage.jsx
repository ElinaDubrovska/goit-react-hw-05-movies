import { getTrendingMovies } from "components/api"
import { useState, useEffect } from "react"

import TrendingList from "components/TrendingList/TrendingList"

const HomePage = () => {
    const [trends, setTrends] = useState([])
    
    useEffect(() => {
       async function GetTrends () {
            try {
                const movies = await getTrendingMovies()
                setTrends(movies)
            } catch (error) { console.log(error) }
        }
        GetTrends()
    }, [])

    return (<main>
        <h1>Trending today</h1>
        <TrendingList trends={ trends} />
    </main>
      )
}

export default HomePage