import { getMovieById } from 'components/api';
import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { StyledBtn } from 'components/commonStyled/CommonStyledBtn';
import { Section, StyledLink } from 'pages/MovieDetails/StyledMovieDetails';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    async function GetMovie() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    GetMovie();
  }, [movieId]);

  const movieScore = score => {
    return Math.floor(score * 10) + '%';
  };
  const movieGanres = genres => {
    if (genres === null) return;
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      <StyledBtn type="button" onClick={onGoBack}>
        Back to movies list
      </StyledBtn>

      {movie && (
        <Section>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User score : {`${movieScore(movie.vote_average)}`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{`${movieGanres(movie.genres)}`}</p>
          </div>

          <div>
            <h3>Additional infromation</h3>
            <div>
              <StyledLink to={`/movies/${movie.id}/cast`} state={location.state}>
                Cast
              </StyledLink>
            </div>
            <div>
              <StyledLink to={`/movies/${movie.id}/reviews`} state={location.state}>
                Reviews
              </StyledLink>
            </div>
          </div>
        </Section>
      )}

      <Outlet />
    </>
  );
};

export default MovieDetails;