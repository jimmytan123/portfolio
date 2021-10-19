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
    livesite: 'https://ztan.ca/moviewave/',
    github: 'https://github.com/jimmytan123/movieWave',
    category: 'featured',
    moreInfo: true,
    overview:
      'MovieWave is a single-page web app built in React JS that allows users to browse movie information and keep track of movies. It is an online movie database where movie lovers can find the relevant movie information based on popular, top-rated, now playing and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also be able to search and save movies to their favourites. A dark/light theme is also included in this application to improve the user experience.',
    duration: '4 weeks',
    role: 'UI/UX Design, Front-End Development',
    stack: [
      'ReactJS',
      'HTML5',
      'Sass',
      'GitHub',
      'Adobe XD',
      'Adobe Photoshop',
    ],
    team: ['Jimmy Tan'],
    designProcess:
      'The web app design was approached with the mind of a modern, clean interface. For an energetic and dynamic mood, light blue and orange were chosen to use as main accent colours on the dark/light background. I chose Montserrat as the font for the web app for good readability.',
    features: [
      {
        name: 'Filter and More Movies',
        description:
          'Filter was made to allow users to view movies according to popular, top-rated, now playing and upcoming. The impactful hero image section will change based on the selected filter. A page selector was introduced to allow users to see even more movies in each filter. Each page contains 20 movies.',
      },
      {
        name: 'Add to Favourites',
        description:
          'The Add to Favourites feature allows user to add their favourite movies into the local storage in their browsers. The global state was created and used to keep track of favourited movies across different React components. The favourited movies will display on a dedicated page and also has a button that allows users to add/remove favourites on every page.',
      },
      {
        name: 'Movie Search',
        description:
          'Search functionality was incorporated to provide an opportunity for users to discover any movies available on the database.',
      },
      {
        name: 'Dark/Light Theme Toggle',
        description:
          'The React useEffect hook was used to implement dark/light theme toggle functionality to create a better user experience.',
      },
    ],
    reflection:
      'This is the first project in the BCIT FWD program that allows me to implement a complete design, development and deployment process. There were differences between the prototype and the final product. These changes were made based on the personal usability testing that went through all the development processes until it was published. This project also helped me to get familiar with React JS and also various Webpack that I used in this application. I would say this application achieves the basic functionality of an online movie database. In the future, I am planning to add more features/sections into this application such as having a movie review section.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['ReactJS', 'HTML5', 'Sass'],
    thumbnailImgUrl: portfolioThumbImg,
    livesite: '/',
    github: 'google.ca',
    category: 'featured',
    moreInfo: true,
  },
  {
    id: 'codeBreaker',
    title: 'Code Breaker',
    briefDescription:
      'A browser based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with mode selection, countdown timer and star rating features.',
    tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS', 'BootStrap'],
    thumbnailImgUrl: codeBreakerThumbImg,
    livesite: 'https://ztan.ca/jimmyTan-js_game/',
    github: 'https://github.com/jimmytan123/Code-Breaker-Game',
    category: 'fun',
    moreInfo: false,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    briefDescription:
      'The reponsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
    tags: ['JavaScript', 'HTML5', 'Sass'],
    thumbnailImgUrl: weatherAppThumbImg,
    livesite: 'https://ztan.ca/weather-app/',
    category: 'fun',
    moreInfo: false,
  },
  {
    id: 'gallery',
    title: 'Gallery',
    briefDescription:
      'A responsive masonry gallery that showcases my interests in landscape photography. All the images can be uploaded from local devices via the site.',
    tags: ['ReactJS', 'Sass', 'Firebase'],
    thumbnailImgUrl: galleryThumbImg,
    livesite: 'https://ztan.ca/jimmy-gallery/',
    category: 'fun',
    moreInfo: false,
  },
];
