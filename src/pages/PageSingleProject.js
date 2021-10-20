import { useParams } from 'react-router';
import { rawProjectData } from '../data/rawProjectData';
import { useEffect } from 'react';

const PageSingleProject = () => {
  let { id } = useParams();

  const project = rawProjectData.filter((project) => project.id === id)[0];
  console.log(project);

  useEffect(() => {
    document.title = `Jimmy Tan | ${project.title}`;
  }, [project.title]);

  return (
    <div className="single-project-container">
      <h1>{project.title}</h1>
      <h2>Overview:</h2>
      <p>{project.overview}</p>
      <a href={project.livesite} target="_blank" rel="noreferrer">
        View Live
      </a>
      <a href={project.github} target="_blank" rel="noreferrer">
        View Github
      </a>
      <h2>Duration</h2>
      <p>{project.duration}</p>
      <h2>Team</h2>
      <p>{project.team}</p>
      <h2>Roles</h2>
      <ul>
        {project.roles &&
          project.roles.map((role, i) => {
            return <li key={i}>{role}</li>;
          })}
      </ul>
      <h2>Development Stack</h2>
      <ul>
        {project.stack &&
          project.stack.map((oneTool, i) => {
            return <li key={i}>{oneTool}</li>;
          })}
      </ul>
    </div>
  );
};

export default PageSingleProject;
