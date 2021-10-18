import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';

import { useState, useEffect } from 'react';

// thumbnail images
import moviewaveThumbImg from '../assets/moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/portfolio/portfolio-thumbnail.png';
import codeBreakerThumbImg from '../assets/codeBreaker/codeBreaker-thumbnail.png';

const PageWork = () => {
  useEffect(() => {
    document.title = 'Work | Jimmy Tan';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // data for project thumbnails
  const thumbnailData = [
    {
      title: 'MovieWave',
      description:
        'A dynamic web app for users to browsing, searching and bookmarking movies.',
      tools: ['ReactJS', 'HTML5', 'Sass', 'REST API', 'GitHub'],
      imgUrl: moviewaveThumbImg,
      slug: 'moviewave',
      moreInfo: true,
      route: '/work-moviewave',
      livesite: 'https://ztan.ca/moviewave/',
      github: 'https://github.com/jimmytan123/movieWave',
      category: 'featured',
    },
    {
      title: 'Portfolio Site',
      description:
        'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
      tools: ['ReactJS', 'HTML5', 'Sass'],
      imgUrl: portfolioThumbImg,
      slug: 'portfolio',
      moreInfo: true,
      route: '/work-portfolio',
      livesite: '/',
      github: 'google.ca',
      category: 'featured',
    },
    {
      title: 'Code Breaker',
      description:
        'A browser based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with mode selection, timing and star rating features.',
      tools: ['jQuery', 'JavaScript', 'HTML5', 'CSS', 'BootStrap'],
      imgUrl: codeBreakerThumbImg,
      slug: 'codeBreaker',
      moreInfo: false,
      //route: '',
      livesite: 'https://ztan.ca/jimmyTan-js_game/',
      github: 'https://github.com/jimmytan123/Code-Breaker-Game',
      category: 'mini',
    },
  ];

  // State for keeping track of work category -- featured projects or mini projects
  const [workCategory, setWorkCategory] = useState('All');

  // function for handle click event for filter buttons
  // updating states
  const handleCategory = (selectedCat) => {
    if (selectedCat) {
      setWorkCategory(selectedCat);
    }
  };

  // function to filtering thumbnail data and return list of thumbnail items
  const displayThumbnails = () => {
    // if selected All, return all the projects
    if (workCategory === 'All') {
      const data = thumbnailData.map((thumbnail, index) => {
        return (
          <Thumbnail
            title={thumbnail.title}
            description={thumbnail.description}
            tools={thumbnail.tools}
            imgUrl={thumbnail.imgUrl}
            slug={thumbnail.slug}
            moreInfo={thumbnail.moreInfo}
            route={thumbnail.route}
            livesite={thumbnail.livesite}
            github={thumbnail.github}
            key={index}
          />
        );
      });

      return data;
    } else {
      // if selected a filter option, return the filtering projects
      const data = thumbnailData
        .filter((thumbnail) => thumbnail.category === workCategory)
        .map((thumbnail, index) => {
          return (
            <Thumbnail
              title={thumbnail.title}
              description={thumbnail.description}
              tools={thumbnail.tools}
              imgUrl={thumbnail.imgUrl}
              slug={thumbnail.slug}
              moreInfo={thumbnail.moreInfo}
              route={thumbnail.route}
              livesite={thumbnail.livesite}
              github={thumbnail.github}
              key={index}
            />
          );
        });

      return data;
    }
  };

  return (
    <div className="work-container">
      <div className="projects-intro">
        <h1>Projects.</h1>
        <p>
          A collection of my featured technical projects, mini/passion projects
          as a front-end developer. Stay tune for more...
        </p>
        <button onClick={() => handleCategory('All')}>All</button>
        <button onClick={() => handleCategory('featured')}>
          Featured Projects
        </button>
        <button onClick={() => handleCategory('mini')}>Mini Projects</button>
      </div>
      {displayThumbnails()}
      <Contact />
    </div>
  );
};

export default PageWork;
