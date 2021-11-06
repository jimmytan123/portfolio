import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import SingleProjectDetail from '../components/SingleProjectDetail';
import SingleProjectNav from '../components/SingleProjectNav';
import Contact from '../components/Contact';
import { rawProjectData } from '../data/rawProjectData';

const PageSingleProject = () => {
  let { id } = useParams();

  // state for single project
  const [singleProject, setSingleProject] = useState(null);

  // fetch rawProjectData and search for the single project item based on id
  // update the singleProject state
  useEffect(() => {
    const project = rawProjectData.filter(
      (project) => project.id === id && project.moreInfo === true
    )[0];
    setSingleProject(project);
  }, [id]);

  // function to return the id of the next project that has a single page(moreInfo = true)
  const getNextProjectId = () => {
    // get an array only contains the projects that has more info(single project page)
    const projectsHasMoreInfo = rawProjectData.filter(
      (project) => project.moreInfo === true
    );

    // get the current project index in the array projectsHasMoreInfo
    const currentProjectIndex = projectsHasMoreInfo.findIndex((oneProject) => {
      return oneProject.id === id;
    });

    // if the current project is the last project in the array projectsHasMoreInfo, next project will be the first project in the array
    if (currentProjectIndex + 1 === projectsHasMoreInfo.length) {
      return projectsHasMoreInfo[0].id;
    } else {
      return projectsHasMoreInfo[currentProjectIndex + 1].id;
    }
  };

  return (
    <motion.div
      className="single-project-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      {singleProject ? (
        <>
          <SingleProjectDetail singleProject={singleProject} />
          <SingleProjectNav nextProjectId={getNextProjectId()} />
        </>
      ) : (
        <section className="no-project-detail">
          <h1>Still in Progress</h1>
          <p>
            This project currently does not have a single detail page, please
            check other projects.
          </p>
          <div className="button-group">
            <Link to="/work">View Other Projects</Link>
            <Link to="/">Return Home</Link>
          </div>
        </section>
      )}
      <Contact />
    </motion.div>
  );
};

export default PageSingleProject;
