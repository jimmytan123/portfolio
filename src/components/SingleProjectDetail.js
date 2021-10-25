import { useEffect } from 'react';
import SingeProjectSlider from './SingeProjectSlider';

const SingleProjectDetail = ({ singleProject }) => {
  useEffect(() => {
    document.title = `Jimmy Tan | ${singleProject.title}`;
    window.scrollTo(0, 0);
  }, [singleProject.title]);

  return (
    <section className="single-project-content">
      <div className="banner-wrapper">
        <img
          className="banner-img"
          src={singleProject.bannerImgUrl}
          alt={`banner of ${singleProject.title}`}
        />
      </div>
      <div className="single-project-basic-info">
        <h1>{singleProject.title}</h1>
        <div className="overview-wrapper">
          <h2>Overview</h2>
          <p>
            {singleProject.overview
              ? singleProject.overview
              : 'Overview coming soon...'}
          </p>
        </div>
        <div className="external-links">
          {singleProject.livesite && (
            <a
              className="url-link"
              href={singleProject.livesite}
              target="_blank"
              rel="noreferrer"
            >
              View Live
            </a>
          )}
          {singleProject.github && (
            <a
              className="url-link"
              href={singleProject.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          )}
        </div>
        <div className="info-grid">
          {singleProject.duration && (
            <div className="duration-wrapper">
              <h3>Duration</h3>
              <p>{singleProject.duration}</p>
            </div>
          )}
          {singleProject.team && (
            <div className="team-wrapper">
              <h3>Team</h3>
              <ul>
                {singleProject.team &&
                  singleProject.team.map((member, i) => {
                    return <li key={i}>{member}</li>;
                  })}
              </ul>
            </div>
          )}
          <div className="roles-wrapper">
            <h3>Roles</h3>
            <ul>
              {singleProject.roles ? (
                singleProject.roles.map((role, i) => {
                  return <li key={i}>{role}</li>;
                })
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
          <div className="dev-stack-wrapper">
            <h3>Development Stack</h3>
            <ul>
              {singleProject.stack ? (
                singleProject.stack.map((oneTool, i) => {
                  return <li key={i}>{oneTool}</li>;
                })
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {singleProject.designProcess && (
        <div className="design-info">
          <h2>Design</h2>
          {singleProject.designProcess.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
          {singleProject.designURL && (
            <a
              className="url-link"
              href={singleProject.designURL.link}
              target="_blank"
              rel="noreferrer"
            >
              View {singleProject.designURL.title}
            </a>
          )}
        </div>
      )}
      {singleProject.development && (
        <div className="development-info">
          <h2>Development</h2>
          {singleProject.development.map((block, i) => {
            return (
              <div className="feature-block" key={i}>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </div>
            );
          })}
        </div>
      )}
      <SingeProjectSlider
        imgs={singleProject.imgSlider}
        title={singleProject.sliderTitle}
        description={singleProject.sliderDescription}
      />
      {singleProject.reflection && (
        <div className="reflection-info">
          <h2>Reflection</h2>
          <p>{singleProject.reflection}</p>
        </div>
      )}
    </section>
  );
};

export default SingleProjectDetail;
