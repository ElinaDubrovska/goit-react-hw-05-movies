import { getReviewsById } from "components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledList } from "components/commonStyled/CommonStyledList";
import { StyledListItem } from "components/commonStyled/CommonStyledListItem";
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();
   
    useEffect(() => {
        async function GetReviews() {
            try {
                const review = await getReviewsById(movieId)
                
                setReviews(review)
                
            } catch (error) { console.log(error) }
        }
        GetReviews()
    }, [movieId])
    
    return (<>
        {reviews.length === 0  ? <p>No reviews</p> : <StyledList>
                {reviews.map(({author, id,content}) => {
                    return <StyledListItem key={id}>
                        <p>Name : {author}</p>
                        <p>Comment : {content}</p>
                    </StyledListItem>
                })
        }
            </StyledList>}
    </>)
       
}

export default Reviews