import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { rawProjectData } from '../data/rawProjectData';

const HomeFeaturedProjects = () => {
  const [homeFeaturedProjects, setHomeFeaturedProjects] = useState(null);

  useEffect(() => {
    const featuredProjects = rawProjectData.filter((project) =>
      project.category.includes('featured-home')
    );
    setHomeFeaturedProjects(featuredProjects);
  }, []);

  return (
    <section className="home-featured-projects">
      <div className="home-featured-projects-content">
        <h2>Featured Projects</h2>
        {homeFeaturedProjects &&
          homeFeaturedProjects.map((homeFeaturedProject, index) => {
            return (
              <div className="featured-project-card" key={index}>
                <div className="project-card-content">
                  <img
                    src={homeFeaturedProject.thumbnailImgUrl}
                    alt={`cover of the project ${homeFeaturedProject.title}`}
                  />
                  <div className="project-card-text">
                    <a
                      href={homeFeaturedProject.livesite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>{homeFeaturedProject.title}</h3>
                    </a>
                    <p>{homeFeaturedProject.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <Link className="work-btn homepage-btn all-works-btn" to="/work">
          All Projects
          <div className="overlay"></div>
        </Link>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
