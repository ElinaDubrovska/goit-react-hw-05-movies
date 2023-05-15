import { Link, useLocation } from 'react-router-dom';
import { StyledListItem } from 'components/commonStyled/CommonStyledListItem';
import PropTypes from 'prop-types';
const MovieListItem = ({ movie }) => {
  const { title, id } = movie;
 const location = useLocation();

  return (
    <StyledListItem>
<Link
          to={`/movies/${id}`}
          state={{
        from: location.pathname + location.search,
      }}
      >
         {title }
  
    </Link>
    </StyledListItem>
    
  );
};

export default MovieListItem

MovieListItem.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    }))
}