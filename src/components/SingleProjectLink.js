const SingleProjectLink = ({ url, name, customClass }) => {
  return (
    <a
      className={customClass ? `url-link ${customClass}` : 'url-link'}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};

export default SingleProjectLink;
