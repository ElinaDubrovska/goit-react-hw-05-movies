import Layout from "components/Layout/Layout"
// import HomePage from "pages/HomePage/HomePage"
// import MovieDetails from "pages/MovieDetails/MovieDetails"
import Cast from "components/Cast/Cast"
import Reviews from "components/Reviews/Reviews"
// import Movies from "pages/Movies/Movies"
import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
const HomePage = lazy(() => import("pages/HomePage/HomePage"))
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"))
const Movies = lazy(()=> import("pages/Movies/Movies"))



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
       
       
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};