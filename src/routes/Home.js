import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const KEY = "8eca3d304c4f33b2f17497dffd27d5ba";
const URL = "https://api.themoviedb.org/3/movie/popular?api_key=";

function Home() {
  // state
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // function
  const getMovies = async () => {
    const json = await (await fetch(`${URL}${KEY}&language=ko-KR`)).json();
    setMovies(json.results);
    setLoading(false);
  };

  //useEffect
  useEffect(() => {
    getMovies();
  }, []);

  // return
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
