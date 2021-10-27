import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import SingeProjectSlider from './SingeProjectSlider';

const SingleProjectDetail = ({ singleProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //options for simple react lightbox
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showCloseButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
    },
    settings: {
      overlayColor: 'rgba(0, 0, 0, 0.9)',
      lightboxTransitionTimingFunction: 'easeInOut',
      slideTransitionTimingFunction: 'easeInOut',
      disableWheelControls: true,
    },
  };

  return (
    <section className="single-project-content">
      <Helmet>
        <title>Jimmy Tan | {singleProject.title}</title>
        <meta
          name="description"
          content="A front-end project detail page that includes the summary of the individual project, tools used and design/development process."
        />
      </Helmet>
      <SimpleReactLightbox>
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
        <SRLWrapper options={options}>
          {singleProject.design && (
            <div className="design-info">
              <h2>Design</h2>
              {singleProject.design.map((designBlock, i) => {
                return (
                  <div className="design-block" key={i}>
                    <h3>{designBlock.title}</h3>
                    {designBlock.description.map((paragraph, i) => {
                      return <p key={i}>{paragraph}</p>;
                    })}
                    {designBlock.designURL && (
                      <a
                        className="url-link"
                        href={designBlock.designURL.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View {designBlock.designURL.title}
                      </a>
                    )}
                    {designBlock.img && (
                      <img
                        className="block-img"
                        src={designBlock.img}
                        alt={designBlock.title}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {singleProject.development && (
            <div className="development-info">
              <h2>Development</h2>
              {singleProject.development.map((devBlock, i) => {
                return (
                  <div className="feature-block" key={i}>
                    <h3>{devBlock.title}</h3>
                    {devBlock.description.map((paragraph, i) => {
                      return <p key={i}>{paragraph}</p>;
                    })}
                    {devBlock.img && (
                      <img
                        className="block-img"
                        src={devBlock.img}
                        alt={devBlock.title}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </SRLWrapper>
        <SingeProjectSlider imgSlider={singleProject.imgSlider} />
        {singleProject.reflection && (
          <div className="reflection-info">
            <h2>Reflection</h2>
            <p>{singleProject.reflection}</p>
          </div>
        )}
      </SimpleReactLightbox>
    </section>
  );
};

export default SingleProjectDetail;
