import MovieListItem from "components/MovieListItem/MovieListItem"
import { StyledList } from "components/commonStyled/CommonStyledList";
import PropTypes from 'prop-types';
const MovieList = ({ movies }) => {
  return (
   
      <StyledList>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </StyledList>
  );
};

export default MovieList

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
    }))
}