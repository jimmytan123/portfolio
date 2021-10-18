import Contact from '../components/Contact';
import Thumbnail from '../components/Thumbnail';

import { useState, useEffect } from 'react';

// thumbnail images
import moviewaveThumbImg from '../assets/moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/portfolio/portfolio-thumbnail.png';
import codeBreakerThumbImg from '../assets/codeBreaker/codeBreaker-thumbnail.png';
import SortButtonGroup from '../components/SortButtonGroup';

const PageWork = () => {
  useEffect(() => {
    document.title = 'Jimmy Tan | Work';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // data for project thumbnails
  const rawThumbnailData = [
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

  // State to track projectData that is coming from rawThumbnailData
  const [projectsData, setProjectsData] = useState(rawThumbnailData);

  // function for handle click event for filter buttons
  // updating state projectData based on chosen filter
  const handleCategory = (selectedCat) => {
    if (selectedCat === 'all') {
      setProjectsData(rawThumbnailData);
    } else if (selectedCat === 'featured' || selectedCat === 'mini') {
      setProjectsData(
        rawThumbnailData.filter(
          (thumbnail) => thumbnail.category === selectedCat
        )
      );
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
        <div className="sort-btns-group">
          <SortButtonGroup
            handleCategory={handleCategory}
            buttons={[
              { name: 'All Projects', slug: 'all' },
              { name: 'Featured Projects', slug: 'featured' },
              { name: 'Mini Projects', slug: 'mini' },
            ]}
          />
        </div>
      </div>
      {projectsData.map((projectData, index) => {
        return (
          <Thumbnail
            title={projectData.title}
            description={projectData.description}
            tools={projectData.tools}
            imgUrl={projectData.imgUrl}
            slug={projectData.slug}
            moreInfo={projectData.moreInfo}
            route={projectData.route}
            livesite={projectData.livesite}
            github={projectData.github}
            key={index}
          />
        );
      })}
      <Contact />
    </div>
  );
};

export default PageWork;
