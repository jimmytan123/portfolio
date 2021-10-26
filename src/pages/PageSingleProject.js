import { useParams } from 'react-router';
import { rawProjectData } from '../data/rawProjectData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleProjectDetail from '../components/SingleProjectDetail';
import SingleProjectNav from '../components/SingleProjectNav';
import Contact from '../components/Contact';

import { motion } from 'framer-motion';

const PageSingleProject = () => {
  let { id } = useParams();

  //console.log(rawProjectData);

  // state for single project
  const [singleProject, setSingleProject] = useState(null);

  // fetch rawProjectData and search for the single project item based on id
  // update the state
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const project = rawProjectData.filter(
      (project) => project.id === id && project.moreInfo === true
    )[0];
    setSingleProject(project);
  }, [id]);

  // function to return the id of the next project that has a single page(moreInfo = true)
  const getNextProjectId = () => {
    // get an array only contains the projects that has more info(single project page)
    const projectHasMoreInfo = rawProjectData.filter(
      (project) => project.moreInfo === true
    );

    //console.log(projectHasMoreInfo);

    // get the current project index in the array projectHasMoreInfo
    const currentProjectIndex = projectHasMoreInfo.findIndex((oneProject) => {
      return oneProject.id === id;
    });

    //console.log(currentProjectIndex);

    // if the current project is the last project in the array projectHasMoreInfo, next project will be the first project in the array
    if (currentProjectIndex + 1 === projectHasMoreInfo.length) {
      return projectHasMoreInfo[0].id;
    } else {
      return projectHasMoreInfo[currentProjectIndex + 1].id;
    }
  };

  return (
    <motion.div
      className="single-project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      {singleProject ? (
        <>
          <SingleProjectDetail singleProject={singleProject} />
          <SingleProjectNav nextProjectId={getNextProjectId()} />
          <Contact />
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
    </motion.div>
  );
};

export default PageSingleProject;
