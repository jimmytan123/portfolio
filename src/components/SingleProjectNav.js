import { Link } from 'react-router-dom';

const SingleProjectNav = ({ nextProjectId }) => {
  return (
    <section className="single-project-nav">
      <Link to={'/'}>Return Home</Link>
      <Link to={`/project-${nextProjectId}`}>Next Project</Link>
    </section>
  );
};

export default SingleProjectNav;
