import { Link } from 'react-router-dom';

const Thumbnail = ({
  title,
  briefDescription,
  tags,
  thumbnailImgUrl,
  id,
  moreInfo,
  livesite,
  github,
}) => {
  return (
    <div className={`project-thumbnail project-thumbnail-${id}`}>
      <div className="thumbnail-wrapper" data-aos="fade-left">
        <div className="project-thumbnail-image">
          <a href={livesite} target="_blank" rel="noreferrer">
            <img src={thumbnailImgUrl} alt={`${title} Thumbnail`} />
          </a>
        </div>
        <div className="thumbnail-text">
          <h2 className="project-thumbnail-title">{title}</h2>
          <ul className="tools-list">
            {tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
          <p className="project-thumbnail-overview">{briefDescription}</p>
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
            {moreInfo && <Link to={`/project-${id}`}>More Info</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
