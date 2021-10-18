import { Link } from 'react-router-dom';

const Thumbnail = ({
  title,
  description,
  tools,
  imgUrl,
  slug,
  moreInfo,
  route,
  livesite,
  github,
}) => {
  return (
    <div className={`project-thumbnail project-thumbnail-${slug}`}>
      <div className="thumbnail-wrapper">
        <div className="project-thumbnail-image">
          <a href={livesite} target="_blank" rel="noreferrer">
            <img src={imgUrl} alt={`${title} Banner`} />
          </a>
        </div>
        <div className="thumbnail-text">
          <h2 className="project-thumbnail-title">{title}</h2>
          <ul className="tools-list">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <p className="project-thumbnail-overview">{description}</p>
          <div className="action-buttons">
            {livesite && (
              <a href={livesite} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {moreInfo && <Link to={route}>More Info</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
