import { useParams } from 'react-router';
import { rawProjectData } from '../data/rawProjectData';

const PageSingleProject = () => {
  let { id } = useParams();
  console.log(rawProjectData);

  const targetData = rawProjectData.filter((project) => project.id === id);
  console.log(targetData[0]);

  return (
    <div>
      <h1>{targetData[0].title}</h1>
      <h2>Overview:</h2>
      <p>{targetData[0].overview}</p>
    </div>
  );
};

export default PageSingleProject;
