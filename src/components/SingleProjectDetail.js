import { useEffect } from 'react';

const SingleProjectDetail = ({ singleProject }) => {
  useEffect(() => {
    document.title = `Jimmy Tan | ${singleProject.title}`;
  }, [singleProject.title]);

  return (
    <section className="single-project-content">
      <h1>{singleProject.title}</h1>
      <h2>Overview:</h2>
      <p>{singleProject.overview}</p>
      <a href={singleProject.livesite} target="_blank" rel="noreferrer">
        View Live
      </a>
      <a href={singleProject.github} target="_blank" rel="noreferrer">
        View Github
      </a>
      <h2>Duration</h2>
      <p>{singleProject.duration}</p>
      <h2>Team</h2>
      <p>{singleProject.team}</p>
      <h2>Roles</h2>
      <ul>
        {singleProject.roles &&
          singleProject.roles.map((role, i) => {
            return <li key={i}>{role}</li>;
          })}
      </ul>
      <h2>Development Stack</h2>
      <ul>
        {singleProject.stack &&
          singleProject.stack.map((oneTool, i) => {
            return <li key={i}>{oneTool}</li>;
          })}
      </ul>
    </section>
  );
};

export default SingleProjectDetail;
