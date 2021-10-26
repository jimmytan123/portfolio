import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';
import SortButtonGroup from '../components/SortButtonGroup';
import { rawProjectData } from '../data/rawProjectData';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PageWork = () => {
  // State to track projectData that is coming from rawThumbnailData
  const [projectsData, setProjectsData] = useState(rawProjectData);

  // function for handle click event for filter buttons
  // updating state projectData based on chosen filter
  const handleCategory = (selectedCat) => {
    if (selectedCat === 'all') {
      setProjectsData(rawProjectData);
    } else {
      setProjectsData(
        rawProjectData.filter((project) => project.category === selectedCat)
      );
    }
  };

  return (
    <motion.div
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Jimmy Tan | Work</title>
        <meta
          name="description"
          content="A list of project thumbnails to showcase Jimmy Tan's work as a Front-End Developer."
        />
      </Helmet>
      <section className="projects-intro">
        <h1>Projects.</h1>
        <p>
          A collection of my featured technical projects, fun projects as a
          front-end developer. <br />
          Stay tune for more...
        </p>
        <div className="sort-btns-group">
          <SortButtonGroup
            handleCategory={handleCategory}
            buttons={[
              { name: 'All Projects', slug: 'all' },
              { name: 'Featured Projects', slug: 'featured' },
              { name: 'Fun Projects', slug: 'fun' },
            ]}
          />
        </div>
      </section>
      <section className="projects-list">
        {projectsData &&
          projectsData.map((projectData, i) => {
            return (
              <Thumbnail
                title={projectData.title}
                briefDescription={projectData.briefDescription}
                tags={projectData.tags}
                thumbnailImgUrl={projectData.thumbnailImgUrl}
                id={projectData.id}
                moreInfo={projectData.moreInfo}
                livesite={projectData.livesite}
                github={projectData.github}
                key={i}
              />
            );
          })}
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageWork;
