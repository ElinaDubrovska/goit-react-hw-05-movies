import { getCastById } from "components/api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledList } from "components/commonStyled/CommonStyledList";
import { StyledListItem } from "components/commonStyled/CommonStyledListItem";


const Cast = () => {
    const [cast, setCast] = useState([])
    const { movieId } = useParams();
   
    useEffect(() => {
        async function GetCast() {
            try {
                const cast = await getCastById(movieId)
                setCast(cast)
            } catch (error) { console.log(error) }
        }
        GetCast()
    }, [movieId])
    
    return (<>
        {cast && 
            <StyledList>
                {cast.map(({name, id, character, profile_path
                }) => {
                    return <StyledListItem key={id}>
                        <img src={profile_path === null
                ? `https://via.placeholder.com/64x96`
                : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={`${name}`}  />
                        <p>Name : {name}</p>
                        <p>Character : {character }</p>
</StyledListItem>})}
            </StyledList>}
    </>)
       
}

export default Cast