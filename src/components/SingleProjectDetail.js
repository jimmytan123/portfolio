import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import SingeProjectSlider from './SingeProjectSlider';
import SingleProjectLink from './SingleProjectLink';

const SingleProjectDetail = ({ singleProject }) => {
  //settings for simple-react-lightbox
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
    <section
      className={`single-project-content single-project-content-${singleProject.id}`}
    >
      <Helmet>
        <title>Jimmy Tan | {singleProject.title}</title>
        <meta
          name="description"
          content="A project detail page to show Jimmy Tan's web development project. It includes the summary of the individual project, tools used and design/development process."
        />
      </Helmet>
      <SimpleReactLightbox>
        {/* banner image */}
        <div className="banner-wrapper">
          {/* Responsive images */}
          <picture>
            <source
              media="(max-width: 499px)"
              srcSet={singleProject.bannerImgMobileUrl}
            />
            <motion.img
              className="banner-img"
              src={singleProject.bannerImgUrl}
              alt={`banner of ${singleProject.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.2 }}
            />
          </picture>
        </div>
        {/* basic project info */}
        <div className="single-project-basic-info">
          <h1 data-aos="fade-up">{singleProject.title}</h1>
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
              <SingleProjectLink
                url={singleProject.livesite}
                name="View Live"
              />
            )}
            {singleProject.github && (
              <SingleProjectLink
                url={singleProject.github}
                name="View GitHub"
              />
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
              <h3>Tech Stack</h3>
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
          {/* project planning info */}
          {singleProject.planning && (
            <div className="planning-info">
              <h2>Planning</h2>
              {singleProject.planning.map((planningBlock, i) => {
                return (
                  <div className="planning-block" key={i}>
                    <h3>{planningBlock.title}</h3>
                    {planningBlock.description &&
                      planningBlock.description.map((paragraph, i) => {
                        return <p key={i}>{paragraph}</p>;
                      })}
                    {planningBlock.img && (
                      <img
                        className="block-img"
                        src={planningBlock.img}
                        alt={planningBlock.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* project design info */}
          {singleProject.design && (
            <div className="design-info">
              <h2>Design</h2>
              {singleProject.design.map((designBlock, i) => {
                return (
                  <div className="design-block" key={i}>
                    <h3>{designBlock.title}</h3>
                    {designBlock.description &&
                      designBlock.description.map((paragraph, i) => {
                        return <p key={i}>{paragraph}</p>;
                      })}
                    {designBlock.designURL &&
                      designBlock.designURL.map((oneUrl, i) => {
                        return (
                          <SingleProjectLink
                            key={i}
                            url={oneUrl.link}
                            name={`View ${oneUrl.title}`}
                            customClass="design-external-link"
                          />
                        );
                      })}
                    {designBlock.img && (
                      <img
                        className="block-img"
                        src={designBlock.img}
                        alt={designBlock.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* project development info */}
          {singleProject.development && (
            <div className="development-info">
              <h2>Development</h2>
              {singleProject.development.map((devBlock, i) => {
                return (
                  <div className="development-block" key={i}>
                    <div className="development-block-text">
                      <h3>{devBlock.title}</h3>
                      {devBlock.description &&
                        devBlock.description.map((paragraph, i) => {
                          return <p key={i}>{paragraph}</p>;
                        })}
                    </div>
                    {devBlock.img && (
                      <img
                        className="block-img"
                        src={devBlock.img}
                        alt={devBlock.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </SRLWrapper>
        {/* image slider section */}
        <SingeProjectSlider imgSlider={singleProject.imgSlider} />
        {/* project reflection info */}
        {singleProject.reflection && (
          <article className="reflection-info">
            <h2>Reflection</h2>
            {singleProject.reflection.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </article>
        )}
      </SimpleReactLightbox>
    </section>
  );
};

export default SingleProjectDetail;
