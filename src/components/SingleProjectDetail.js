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
    <section className="single-project-content">
      <Helmet>
        <title>Jimmy Tan | {singleProject.title}</title>
        <meta
          name="description"
          content="A project detail page to show Jimmy Tan's web development project. It includes the summary of the individual project, tools used and design/development process."
        />
      </Helmet>
      <SimpleReactLightbox>
        <div className="banner-wrapper">
          <motion.img
            className="banner-img"
            src={singleProject.bannerImgUrl}
            alt={`banner of ${singleProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.2 }}
          />
        </div>
        <div className="single-project-basic-info" data-aos="fade-up">
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
          {singleProject.planning && (
            <div className="planning-info">
              <h2>Planning</h2>
              {singleProject.planning.map((planningBlock, i) => {
                return (
                  <div className="design-block" key={i}>
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
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

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
                    {designBlock.designURL && (
                      <SingleProjectLink
                        url={designBlock.designURL.link}
                        name={`View ${designBlock.designURL.title}`}
                      />
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
                  <div className="development-block" key={i}>
                    <h3>{devBlock.title}</h3>
                    {devBlock.description &&
                      devBlock.description.map((paragraph, i) => {
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
