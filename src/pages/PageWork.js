import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';

import { useEffect } from 'react';

// thumbnail images
import moviewaveThumbImg from '../assets/moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/portfolio/portfolio-thumbnail.png';

const PageWork = () => {
  useEffect(() => {
    document.title = 'Work | Jimmy Tan';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  //data for project thumbnails
  const thumbnailData = [
    {
      title: 'MovieWave',
      description:
        'A dynamic web app for users to browsing, searching and bookmarking movies.',
      tools: ['ReactJS', 'HTML5', 'Sass', 'REST API', 'GitHub'],
      imgUrl: moviewaveThumbImg,
      slug: 'moviewave',
      route: '/work-moviewave',
      livesite: 'https://ztan.ca/moviewave/',
      github: 'https://github.com/jimmytan123/movieWave',
    },
    {
      title: 'Portfolio Site',
      description:
        'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
      tools: ['ReactJS', 'HTML5', 'Sass'],
      imgUrl: portfolioThumbImg,
      slug: 'portfolio',
      route: '/work-portfolio',
      livesite: 'google.ca',
      github: 'google.ca',
    },
  ];

  return (
    <div className="work-container">
      <div className="projects-intro">
        <h1>Projects.</h1>
        <p>
          A collection of my featured technical projects as a front-end
          developer.
        </p>
      </div>
      {thumbnailData.map((thumbnail, index) => {
        return (
          <Thumbnail
            title={thumbnail.title}
            description={thumbnail.description}
            tools={thumbnail.tools}
            imgUrl={thumbnail.imgUrl}
            slug={thumbnail.slug}
            route={thumbnail.route}
            livesite={thumbnail.livesite}
            github={thumbnail.github}
            key={index}
          />
        );
      })}
      <Contact />
    </div>
  );
};

export default PageWork;
