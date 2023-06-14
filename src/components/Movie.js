import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const getImg = `https://image.tmdb.org/t/p/`;

function Movie({ id, poster, title, overview, vote }) {
  return (
    <div>
      <img src={`${getImg}w200/${poster}`} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{overview}</p>
      <p>{vote}</p>
    </div>
  );
}

Movie.PropType = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Movie;
