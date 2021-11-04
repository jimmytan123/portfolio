import { Link } from 'react-router-dom';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const SingleProjectNav = ({ nextProjectId }) => {
  return (
    <section className="single-project-nav">
      <Link to={'/work'}>
        <span>
          <BiChevronLeft title="Left arrow icon" />
        </span>
        Return Work
      </Link>
      <Link to={`/project-${nextProjectId}`}>
        Next Project{' '}
        <span>
          <BiChevronRight title="Right arrow icon" />
        </span>
      </Link>
    </section>
  );
};

export default SingleProjectNav;
