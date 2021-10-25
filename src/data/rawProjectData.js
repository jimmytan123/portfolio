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
import moviewaveThumbImg from '../assets/assets-moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/assets-portfolio/portfolio-thumbnail.png';
import codeBreakerThumbImg from '../assets/assets-codeBreaker/codeBreaker-thumbnail.png';
import weatherAppThumbImg from '../assets/assets-weather-app/weatherApp-thumbnail.png';
import galleryThumbImg from '../assets/assets-gallery/gallery-thumbnail.png';

// import banner images for single project page
import moviewaveBanner from '../assets/assets-moviewave/moviewave-banner.png';
import portfolioBanner from '../assets/assets-portfolio/portfolio-banner.png';

// import slider images for single project page
import moviewaveSlider1 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-1.png';
import moviewaveSlider2 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-2.png';
import moviewaveSlider3 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-3.png';
import moviewaveSlider4 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-4.png';
import moviewaveSlider5 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-5.png';

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
    bannerImgUrl: moviewaveBanner,
    overview:
      'MovieWave is a single-page web app built in ReactJS that allows users to browse movie information and keep track of movies. It is an online movie database where movie lovers can find the relevant movie information based on popular, top-rated, now playing and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also be able to search and save movies to their favourites. A dark/light theme is also included in this application to improve the user experience.',
    duration: '4 Weeks',
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['ReactJS', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Photoshop'],
    team: ['Jimmy Tan'],
    designProcess: [
      'The web app design was approached with the mind of a modern, clean interface. For an energetic and dynamic mood, light blue and orange were chosen to use as main accent colours on the dark/light background. High-fidelity mock-ups and interactive prototypes were created to provide clear guidance for the development phase.',
      'To see the design and the prototype, please click the link below.',
    ],
    designURL: {
      title: 'Prototype',
      link: 'https://xd.adobe.com/view/91c321b5-ac56-40eb-87a9-11907794c25c-c490/',
    },
    development: [
      {
        title: 'Filter',
        description:
          'A dropdown filter was made to allow users to view movies according to popular, top-rated, now playing and upcoming. This feature required the manipulation of the TMDb API with React useState and useEffect hooks. The impactful hero image section on the home page will also change based on the selected filter.',
      },
      {
        title: 'Multiple Pages',
        description:
          'The page selector buttons will allow users to browse more movies without having a long page to scroll. Each page will display 20 movies, with 5 pages and 100 movies in total.',
      },
      {
        title: 'Add to Favourites',
        description:
          'The Add to Favourites feature allows user to add their favourite movies into the local storage in their browsers. The global state was created and used to keep track of favourited movies across different React components. The favourited movies will display on a dedicated page and also has a button that allows users to add/remove favourites on every page.',
      },
      {
        title: 'Movie Search',
        description:
          'Search functionality was incorporated to provide an opportunity for users to discover any movies available on the database. When there is no movie result or the search term is empty, the corresponding messages will display to users.',
      },
      {
        title: 'Dark/Light Theme Toggle',
        description:
          'The React useEffect hook was used to implement dark/light theme toggle functionality to create a better user experience.',
      },
    ],
    sliderTitle: 'Fully Responsive',
    sliderDescription:
      'A mobile-first design approach to ensure the layout of the movie cards and the movie detail information is to best fit the page in different devices without being too overcrowded or too much white space. The website is responsive for mobile, tablet and desktop devices.',
    imgSlider: [
      moviewaveSlider1,
      moviewaveSlider2,
      moviewaveSlider3,
      moviewaveSlider4,
      moviewaveSlider5,
    ],

    reflection:
      'This is the first project in the BCIT FWD program that allows me to implement a complete design, development and deployment process. There were differences between the prototype and the final product. These changes were made based on the personal usability testing that went through all the development processes until it was published. In addition, compare to the design prototype, I added a lot of additional movie information such as a trailer from Youtube, poster images carousel and cast information in the movie detail page based on my discovery in the API documents. This project also helped me to get familiar with React JS and also its ecosystem. I would say this application achieves the basic functionality of an online movie database. In the future, I am planning to add more features/sections into this application such as having a movie review section.',
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
    bannerImgUrl: portfolioBanner,
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
