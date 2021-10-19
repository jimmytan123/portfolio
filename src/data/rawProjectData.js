/* 
   Overview: the rawProjectData consists of data that will be 
   used in Page Work thumbnail section and single project page(if exist)
   
   id - id for the project
   title - name of the projec
   briefDescription - A simple and brief summary of the project that will be displayed in the thumbnail section
   tags - A highlight tools about the project that will be displayed in the thumbnail section
   thumbnailImgUrl - screenshot of the project that will be displayed in the thumbnail section
   moreInfo - boolean value, true if the project has a single detail page
   livesite - URL of the live site of the project
   github - URL of the GitHub repo of the project
   category - featured/fun, used for filter feature in Page Work
*/

// import thumbnail images
import moviewaveThumbImg from '../assets/moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/portfolio/portfolio-thumbnail.png';
import codeBreakerThumbImg from '../assets/codeBreaker/codeBreaker-thumbnail.png';
import weatherAppThumbImg from '../assets/weather-app/weatherApp-thumbnail.png';
import galleryThumbImg from '../assets/gallery/gallery-thumbnail.png';

export const rawProjectData = [
  {
    id: 'moviewave',
    title: 'MovieWave',
    briefDescription:
      'A dynamic web app for users to browsing, searching and bookmarking movies.',
    tags: ['ReactJS', 'HTML5', 'Sass', 'REST API', 'GitHub'],
    thumbnailImgUrl: moviewaveThumbImg,
    moreInfo: true,
    livesite: 'https://ztan.ca/moviewave/',
    github: 'https://github.com/jimmytan123/movieWave',
    category: 'featured',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['ReactJS', 'HTML5', 'Sass'],
    thumbnailImgUrl: portfolioThumbImg,
    moreInfo: true,
    livesite: '/',
    github: 'google.ca',
    category: 'featured',
  },
  {
    id: 'codeBreaker',
    title: 'Code Breaker',
    briefDescription:
      'A browser based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with mode selection, countdown timer and star rating features.',
    tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS', 'BootStrap'],
    thumbnailImgUrl: codeBreakerThumbImg,
    moreInfo: false,
    livesite: 'https://ztan.ca/jimmyTan-js_game/',
    github: 'https://github.com/jimmytan123/Code-Breaker-Game',
    category: 'fun',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    briefDescription:
      'The reponsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
    tags: ['JavaScript', 'HTML5', 'Sass'],
    thumbnailImgUrl: weatherAppThumbImg,
    moreInfo: false,
    livesite: 'https://ztan.ca/weather-app/',
    category: 'fun',
  },
  {
    id: 'gallery',
    title: 'Gallery',
    briefDescription:
      'A responsive masonry gallery that showcases my interests in landscape photography. All the images can be uploaded from local devices via the site.',
    tags: ['ReactJS', 'Sass', 'Firebase'],
    thumbnailImgUrl: galleryThumbImg,
    moreInfo: false,
    livesite: 'https://ztan.ca/jimmy-gallery/',
    category: 'fun',
  },
];
