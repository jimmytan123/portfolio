/* 
   Overview: the rawProjectData consists of data that will be 
   used in Page Work thumbnail section and single project detail page(if exist)
   
   id - id for the project [String]
   title - name of the projec [String]
   briefDescription - A simple and brief summary of the project that will be displayed in the thumbnail section [String]
   tags - A highlight tools about the project that will be displayed in the thumbnail section [Array of Strings]
   thumbnailImgUrl - screenshot of the project that will be displayed in the thumbnail section [Image Path]
   livesite - URL of the live site of the project [External URL] (OPTIONAL)
   github - URL of the GitHub repo of the project [External URL] (OPTIONAL)
   category - featured/fun, used for filter feature in Page Work [String]
   moreInfo - boolean value, true if the project has a single project detail page [Boolean]

   <--- OPTIONAL || If a project has a single detail page, need to add the following data --->
   bannerImgUrl - local img URL, for displaying banner image in single project detail page [Image Path]
   bannerImgMobileUrl - local img URL, when browser width smaller than 499px(mobile devices) [Image Path]
   overview - the overview of the project in single project detail page [String]
   duration - duration of the project in single project detail page [String] (OPTIONAL)
   team - team of the project [Array of String] (OPTIONAL)
   roles - roles of the project in single project detail page [Array of String]
   stack - tools/languages used in single project detail page [Array of String]
   design - design aspect of the project, an array consists of objects [Array of Objects] (OPTIONAL)
          -- title -> object property, represents the title of a deisgn block [String]
          -- description -> object property, represents the paragraphs of a topic in a deisgn block [Array of Strings]
          -- designURL -> object property, represents the external design related URL (Prototype/Mockup), has a title and link property [Array of Object] (OPTIONAL)
          -- img -> object property, represents a image of a topic in a deisgn block [Image Path] (OPTIONAL)
   development - development aspect of the project, an array consists of objects [Array of Objects] (OPTIONAL)
              -- title -> object property, represents the title of a development block [String]
              -- description -> object property, represents the paragraphs of a topic in a development block [Array of Strings]
              -- img -> object property, represents a image of a topic in a development block [Image Path] (OPTIONAL)
   imgSlider - image slider, passing it as a prop to SingeProjectSlider component [Object] (OPTIONAL)
             -- sliderTitle -> title of the slider block [String] (OPTIONAL)
             -- sliderDescription --> description paragraph of the slider block [String] (OPTIONAL)
             -- imgs --> image file for the slider [Array of Image Path]
    reflection - paragraph to summerize and reflect the project [String] (OPTIONAL)
*/

// import thumbnail images
import moviewaveThumbImg from '../assets/assets-moviewave/moviewave-thumbnail.png';
import portfolioThumbImg from '../assets/assets-portfolio/portfolio-thumbnail.png';
import codeBreakerThumbImg from '../assets/assets-codeBreaker/codeBreaker-thumbnail.png';
import weatherAppThumbImg from '../assets/assets-weather-app/weatherApp-thumbnail.png';
import galleryThumbImg from '../assets/assets-gallery/gallery-thumbnail.png';

// import banner images for single project page
import moviewaveBanner from '../assets/assets-moviewave/moviewave-banner.png';
import moviewaveBannerMobile from '../assets/assets-moviewave/moviewave-banner-mobile.png';
import portfolioBanner from '../assets/assets-portfolio/portfolio-banner.png';
import portfolioBannerMobile from '../assets/assets-portfolio/portfolio-banner-mobile.png';

// import slider images for single project page
import moviewaveSlider1 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-1.png';
import moviewaveSlider2 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-2.png';
import moviewaveSlider3 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-3.png';
import moviewaveSlider4 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-4.png';
import moviewaveSlider5 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-5.png';

//import images for development section in single project page
import moviewavePageSelector from '../assets/assets-moviewave/moviewave-page-selector.png';
import moviewaveSearch from '../assets/assets-moviewave/moviewave-search.png';
import portfolioIA from '../assets/assets-portfolio/portfolio-IA.png';
import portfolioDataFile from '../assets/assets-portfolio/portfolio-dataFile.png';
import portfolioProjectFilter from '../assets/assets-portfolio/portfolio-project-filter.png';
import portfolioResponsiveImg from '../assets/assets-portfolio/portfolio-responsiveImg.png';

export const rawProjectData = [
  {
    id: 'moviewave',
    title: 'MovieWave',
    briefDescription:
      'A dynamic web app for users to browsing, searching and bookmarking movies.',
    tags: ['React', 'HTML5', 'Sass', 'REST API', 'GitHub'],
    thumbnailImgUrl: moviewaveThumbImg,
    livesite: 'https://ztan.ca/moviewave/',
    github: 'https://github.com/jimmytan123/movieWave',
    category: 'featured',
    moreInfo: true,
    bannerImgUrl: moviewaveBanner,
    bannerImgMobileUrl: moviewaveBannerMobile,
    overview:
      'MovieWave is a single-page web app built in ReactJS that allows users to browse movie information and keep track of movies. It is an online movie database where movie lovers can find the relevant movie information based on popular, top-rated, now playing and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also be able to search and save movies to their favourites. A dark/light theme is also included in this application to improve the user experience.',
    duration: '4 Weeks',
    team: ['Jimmy Tan'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['React', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Photoshop'],
    design: [
      {
        title: 'Design Theme and Prototype',
        description: [
          'The web app design was approached with the mind of a modern, clean interface. For an energetic and dynamic mood, deep sky blue and neon orange were chosen to use as main accent colours on the dark/light background.',
          'High-fidelity mockups were created through Adobe Photoshop as a start point for the design phase. After that, an interactive prototype by Adobe XD was made to provide clear interactive guidance for the development phase.',
          'To view the design and the interactive prototype, please click the link below.',
        ],
        designURL: [
          {
            title: 'Mobile Prototype',
            link: 'https://xd.adobe.com/view/d8ed41bb-f200-4a16-b54c-369b384e72ad-8dbe/',
          },
          {
            title: 'Desktop Prototype',
            link: 'https://xd.adobe.com/view/511689db-6a40-44cf-a51d-954defc40927-0445/',
          },
        ],
      },
    ],
    development: [
      {
        title: 'Movie Filter',
        description: [
          'A movie filter was made to allow users to view movies according to popular, top-rated, now playing and upcoming. This feature required the manipulation of the TMDb API with React useState and useEffect hooks. The impactful hero image section on the home page will also change based on the selected filter.',
        ],
      },
      {
        title: 'Multiple Pages',
        description: [
          'The page selector buttons will allow users to browse more movies without having a long page to scroll. Each page will display 20 movies, with 5 pages and 100 movies in total.',
        ],
        img: moviewavePageSelector,
      },
      {
        title: 'Add to Favourites',
        description: [
          'The Add to Favourites feature allows user to add their favourite movies into the local storage in their browsers. The global state was created and used to keep track of favourited movies across different React components. The favourited movies will display on a dedicated page and also has a button that allows users to add/remove favourites on every page.',
        ],
      },
      {
        title: 'Movie Search',
        description: [
          'Search functionality was incorporated to provide an opportunity for users to discover any movies available on the database. When there is no movie result or the search term is empty, the corresponding messages will display to users.',
        ],
        img: moviewaveSearch,
      },
      {
        title: 'Dark/Light Theme Toggle',
        description: [
          'The React useState hook was used to implement dark/light theme toggle functionality to create a better user experience.',
        ],
      },
      {
        title: 'Fully Responsive',
        description: [
          'A mobile-first design approach to ensure the layout of the movie cards and the movie detail information is to best fit the page in different devices without being too overcrowded or too much white space. The website is responsive for mobile, tablet and desktop devices.',
        ],
      },
    ],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
      // sliderDescription: 'enter description here...',
      imgs: [
        moviewaveSlider1,
        moviewaveSlider2,
        moviewaveSlider3,
        moviewaveSlider4,
        moviewaveSlider5,
      ],
    },
    reflection:
      'This is the first project in the BCIT FWD program that allows me to implement a complete design, development and deployment process. There were differences between the prototype and the final product. These changes were made based on the personal usability testing that went through all the development processes until it was published. In addition, compare to the design prototype, I added a lot of additional movie information such as a trailer from YouTube, poster images carousel and cast information in the movie detail page based on my discovery in the API documents. This project also helped me to get familiar with React JS and also its ecosystem. I would say this application achieves the basic functionality of an online movie database. In the future, I am planning to add more features/sections into this application such as having a movie review section.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['React', 'HTML5', 'Sass'],
    thumbnailImgUrl: portfolioThumbImg,
    livesite: '/',
    github: 'https://www.google.ca/',
    category: 'featured',
    moreInfo: true,
    bannerImgUrl: portfolioBanner,
    bannerImgMobileUrl: portfolioBannerMobile,
    overview:
      "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable, I decided to build my portfolio using React since I can update my projects easier with React's reusable components.",
    duration: '4 Weeks',
    team: ['Jimmy Tan'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['React', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Figma', 'SEO'],
    planning: [
      {
        title: 'Project Goal & Planning',
        description: [
          'The goal of the portfolio site project is to demonstrate Jimmy Tan’s web design and development skills. Since I value the content of the portfolio site to be the most important component of the website, the website should demonstrate the content in a clear and user-friendly way. In addition, the website should be easy for me to manage as the project lists may be updated regularly to showcase my latest skills and knowledge.',
          'After doing research and comparing hard-coded websites, React applications and CMS websites, I decided to build my portfolio by React. Thanks to React’s component-based architecture, I can create reusable components and divide a large app into smaller parts. It is easier for me to add more features to the website and maintain the projects data.',
          'I also created a content plan, information architecture, wireframe, interactive prototype and style guide to allow me to be well-planned before the development phase.',
        ],
      },
      {
        title: 'Information Architecture',
        img: portfolioIA,
      },
    ],
    design: [
      {
        title: 'Wireframe',
        description: [
          'The wireframe was created based on the content plan and information architecture. To let users focus on the content, the theme of the website is based on a white background, dark grey text, and a lot of whitespaces. On the project list page, I delicately set different background colours for different projects to add some uniqueness to each project. ',
          'To view the interactive wireframe, please click the links below.',
        ],
        designURL: [
          {
            title: 'Mobile Wireframe',
            link: 'https://xd.adobe.com/view/18848f33-a96e-43f3-94c3-698d505d9168-4dd7/',
          },
          {
            title: 'Desktop Wireframe',
            link: 'https://xd.adobe.com/view/db189623-7188-42d6-86ad-874107258803-8e4b/',
          },
        ],
      },
    ],
    development: [
      {
        title: 'Project Filter',
        description: [
          'The project filter helps to organize the projects into categories, which makes the users view the projects that they are interested in easier. To make the filter feature works, it needs to use React useState hook, event listeners and array filtering techniques.',
        ],
        img: portfolioProjectFilter,
      },
      {
        title: 'One Data File, Long Data File',
        description: [
          'To make the projects more manageable, I designed and created one data file containing a list of projects information. I created reusable React components to fetch data from the data file and output the content. It makes updating/adding/deleting projects really convenient and efficient.',
        ],
        img: portfolioDataFile,
      },
      {
        title: 'Responsive Images',
        description: [
          'The banner image in the single project page is responsive (art direction) for users with different sizes of devices.',
        ],
        img: portfolioResponsiveImg,
      },
    ],
  },
  {
    id: 'codeBreaker',
    title: 'Code Breaker',
    briefDescription:
      'A browser based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with mode selection, countdown timer and star rating features.',
    tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS', 'BootStrap'],
    thumbnailImgUrl: codeBreakerThumbImg,
    livesite: 'https://ztan.ca/code-breaker/',
    github: 'https://github.com/jimmytan123/Code-Breaker-Game',
    category: 'fun',
    moreInfo: false,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    briefDescription:
      'The responsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
    tags: ['JavaScript', 'HTML5', 'Sass'],
    thumbnailImgUrl: weatherAppThumbImg,
    livesite: 'https://ztan.ca/weather-app/',
    github: 'https://github.com/jimmytan123/weather-app',
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
    livesite: 'https://ztan.ca/gallery/',
    category: 'fun',
    moreInfo: false,
  },
];
