import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieList from "components/MovieList/MovieList"
import { getMovieByName } from "components/api"
import { StyledBtn } from "components/commonStyled/CommonStyledBtn"
import { StyledInput } from "components/commonStyled/InputStyled"


const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchQuery, setSearchQuery] = useState("")

   
    const handleSubmit = event => {
        event.preventDefault()
         const newQuery = event.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      alert("Please enter the movie");
      return;
    }
        setSearchParams(searchQuery !== "" ? { query: searchQuery } : {})
        
       
    }

    const query = searchParams.get("query") ?? "";
    
    
    useEffect(() => {
        if (!query) { return }
        async function GetMoviesName() {
            try {
                const films = await getMovieByName(query)
                if (films.length === 0) {
                    alert("sorry we didn't find any movies")
                    return
                }
                setSearchedMovies(films)
               
            } catch (error) {console.log(error)}
        }
        GetMoviesName ()
     }, [query])


   

    


    return (<main>
        <form onSubmit={handleSubmit}>
            <StyledInput type="text" name="query" onChange={(event)=> setSearchQuery(event.target.value)} />
            <StyledBtn>Search</StyledBtn>
        </form>
        {searchedMovies && < MovieList movies={searchedMovies} />}
     
    </main>)
}

export default Movies