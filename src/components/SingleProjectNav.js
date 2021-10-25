import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SingleProjectNav = ({ nextProjectId }) => {
  return (
    <section className="single-project-nav">
      <Link to={'/work'}>
        <span>
          <FaAngleLeft />
        </span>
        Return Work
      </Link>
      <Link to={`/project-${nextProjectId}`}>
        Next Project{' '}
        <span>
          <FaAngleRight />
        </span>
      </Link>
    </section>
  );
};

export default SingleProjectNav;
