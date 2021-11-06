import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';
import FilterButtonGroup from '../components/FilterButtonGroup';
import { rawProjectData } from '../data/rawProjectData';
import { downArrow } from '../globals/icon';

import { Flipper, Flipped } from 'react-flip-toolkit';

const PageWork = () => {
  // state to track project data to render
  const [projectsData, setProjectsData] = useState(null);

  // state to track filter, initially is showing all projects
  const [filter, setFilter] = useState('all');

  // useEffect to update project data, running when first load and filter changes
  useEffect(() => {
    handleChangeCategory(filter);
  }, [filter]);

  // function for handling click event for filter buttons and updating state projectData based on chosen filter
  const handleChangeCategory = (selectedCat) => {
    if (selectedCat === 'all') {
      setProjectsData(rawProjectData);
    } else {
      setProjectsData(
        rawProjectData.filter((project) => project.category === selectedCat)
      );
    }
  };

  // for scroll to down button
  const elementRef = useRef(null);
  const executeScroll = () =>
    elementRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div
      className="work-container main-wrapper"
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
      <section className="projects-intro" data-aos="fade-right">
        <h1>Projects.</h1>
        <p>
          A collection of my featured technical projects, fun projects as a
          front-end developer. <br />
          Stay tune for more...
        </p>
        <div className="sort-btns-group">
          <FilterButtonGroup
            setFilter={setFilter}
            buttons={[
              { name: 'All Projects', slug: 'all' },
              { name: 'Featured Projects', slug: 'featured' },
              { name: 'Fun Projects', slug: 'fun' },
            ]}
          />
        </div>
        <button onClick={executeScroll} className="scroll-btn">
          {downArrow}
        </button>
      </section>
      {projectsData && (
        // Flipper & Flipped - animation for project lists when switching categories(state changes and data changes)
        // flipKey - data to be tracked
        // stiffness - Stiffness of the spring. Higher values will create more sudden movement.
        // damping - Damping, strength of opposing force. If set to 0, spring will oscillate indefinitely.
        <Flipper
          flipKey={projectsData}
          spring={{ stiffness: 125, damping: 20 }}
        >
          <Flipped flipId="animatedProjectListDiv">
            <section ref={elementRef} className="projects-list">
              {projectsData.map((projectData, i) => {
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
          </Flipped>
        </Flipper>
      )}
      <Contact />
    </motion.div>
  );
};

export default PageWork;
