import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';
import SortButtonGroup from '../components/SortButtonGroup';
import { rawProjectData } from '../data/rawProjectData';
import { useState, useEffect } from 'react';

const PageWork = () => {
  useEffect(() => {
    document.title = 'Jimmy Tan | Work';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
    <div className="work-container">
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
    </div>
  );
};

export default PageWork;
