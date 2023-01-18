import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <div className={styles.moviewrap__moviebox}>
        <img
          className={styles.moviewrap__moviebox__left}
          src={coverImg}
          alt={title}
        />
        <div className={styles.moviewrap__moviebox__right}>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
