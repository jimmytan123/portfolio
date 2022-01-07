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
import tranquilTofinoCabinsThumbImg from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-thumbnail.png';
import noteTakerThumbImg from '../assets/assets-note-taker/note-taker-thumbnail.png';

// import banner images for single project page
import moviewaveBanner from '../assets/assets-moviewave/moviewave-banner.png';
import moviewaveBannerMobile from '../assets/assets-moviewave/moviewave-banner-mobile.png';
import portfolioBanner from '../assets/assets-portfolio/portfolio-banner.png';
import portfolioBannerMobile from '../assets/assets-portfolio/portfolio-banner-mobile.png';
import tranquilTofinoCabinsBanner from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-banner.png';
import tranquilTofinoCabinsBannerMobile from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-banner-mobile.png';

//import images for planning/design/development/slider section in single project page

/* for project MovieWave */
import moviewavePageSelector from '../assets/assets-moviewave/moviewave-page-selector.png';
import moviewaveSearch from '../assets/assets-moviewave/moviewave-search.png';
import moviewaveSlider1 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-1.png';
import moviewaveSlider2 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-2.png';
import moviewaveSlider3 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-3.png';
import moviewaveSlider4 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-4.png';
import moviewaveSlider5 from '../assets/assets-moviewave/moviewave-slider/moviewave-slider-5.png';

/* for project Portfolio */
import portfolioIA from '../assets/assets-portfolio/portfolio-IA.png';
import portfolioDataFile from '../assets/assets-portfolio/portfolio-dataFile.png';
import portfolioProjectFilter from '../assets/assets-portfolio/portfolio-project-filter.png';
import portfolioResponsiveImg from '../assets/assets-portfolio/portfolio-responsiveImg.png';
import portfolioSlider1 from '../assets/assets-portfolio/portfolio-slider-1.png';
import portfolioSlider2 from '../assets/assets-portfolio/portfolio-slider-2.png';
import portfolioSlider3 from '../assets/assets-portfolio/portfolio-slider-3.png';
import portfolioSlider4 from '../assets/assets-portfolio/portfolio-slider-4.png';
import portfolioSlider5 from '../assets/assets-portfolio/portfolio-slider-5.png';

/* for project Tranquil Tofino Cabins */
import tranquilTofinoCabinsTrello from '../assets/assets-tranquil-tofino-cabins/tranquilTofinoCabinsTrello.png';
import tranquilTofinoCabinsBookings from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-bookings.png';
import tranquilTofinoCabinsCode from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-code.png';
import tranquilTofinoCabinsSlider1 from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-slider-1.png';
import tranquilTofinoCabinsSlider2 from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-slider-2.png';
import tranquilTofinoCabinsSlider3 from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-slider-3.png';
import tranquilTofinoCabinsSlider4 from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-slider-4.png';
import tranquilTofinoCabinsSlider5 from '../assets/assets-tranquil-tofino-cabins/tranquil-tofino-cabins-slider-5.png';

export const rawProjectData = [
  {
    id: 'moviewave',
    title: 'MovieWave',
    subtitle: 'React Movie Database',
    briefDescription:
      'A dynamic web app for users to browse, search and bookmark movies.',
    tags: ['React', 'HTML5', 'Sass', 'REST API', 'GitHub'],
    thumbnailImgUrl: moviewaveThumbImg,
    livesite: 'https://ztan.ca/moviewave/',
    github: 'https://github.com/jimmytan123/movieWave',
    category: ['featured', 'featured-home'],
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
    reflection: [
      'This is the first project in the BCIT FWD program that allows me to implement a complete design, development and deployment process. There were differences between the prototype and the final product. These changes were made based on the personal usability testing that went through all the development processes until it was published. In addition, compare to the design prototype, I added a lot of additional movie information such as a trailer from YouTube, poster images carousel and cast information in the movie detail page based on my discovery in the API documents.',
      'This project also helped me to get familiar with React JS and also its ecosystem. I would say this application achieves the basic functionality of an online movie database. In the future, I am planning to add more features/sections into this application such as having a movie review section.',
    ],
  },
  {
    id: 'tranquil-tofino-cabins',
    title: 'Tranquil Tofino Cabins',
    subtitle: 'WordPress & WooCommerce Website',
    briefDescription:
      'A fully customized cabin rental business website that comes with an online booking feature. The site was developed using WordPress and WooCommerce plugins in a collaborative team.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'Sass'],
    thumbnailImgUrl: tranquilTofinoCabinsThumbImg,
    livesite: 'https://tranquiltofino.bcitwebdeveloper.ca/',
    category: ['featured', 'featured-home'],
    moreInfo: true,
    bannerImgUrl: tranquilTofinoCabinsBanner,
    bannerImgMobileUrl: tranquilTofinoCabinsBannerMobile,
    overview:
      'Tranquil Tofino Cabins is an e-commerce website project for the cabin rental business. This is a collaborative project that was designed and developed from scratch with 3 other team members. We built a fully custom WordPress theme based on the starter theme Underscores. The project involves project management principles, UI/UX design, content planning and customized WordPress development with the WooCommerce plugin. I mainly focused on WordPress development such as creating the development plan with one of my team members, modifying template files and plugin files, using hooks to control the content output.',
    duration: '5 Weeks',
    team: ['Jimmy Tan', 'John Maguss', 'Patrick Neil', 'Vivi Zeng'],
    roles: ['Content Planning', 'WordPress Development', 'Styling'],
    stack: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'HTML5',
      'JavaScript',
      'Sass',
      'Figma',
      'GitHub',
      'Trello',
    ],
    planning: [
      {
        title: 'Project Goal & Planning',
        description: [
          'The goal for this project was to help our fictional client to build a cabin rental website that has online booking functionality. Our team started by reviewing the project brief then researched some cabin rentals website competitors to gain inspiration for design and features. We summarized our findings and prepared questions for the client. We then had a discovery meeting with our fictional client and created a memo of understanding after the meeting.',
          'From there, we began to create a content plan and information architecture for the site. The planning process will guide the design and development of the website.',
          'Due to Covid-19, we had to do the project remotely. In order to manage our project efficiently, our team lead set up a Trello workspace and we used its task boards to update our to-dos and current status. We also utilized Slack, Zoom to communicate effectively on a daily basis. We used GitHub to share files that we edited and used Google Drive to store assets.',
        ],
      },
      {
        title: 'Project Management Using Trello',
        img: tranquilTofinoCabinsTrello,
      },
    ],
    design: [
      {
        title: 'Theme & Wireframe',
        description: [
          'The design of this site is to convey relaxation. The primary colour for the website will be dark green to express the feeling of relaxation and also represents the natural beauty of Tofino, BC.',
        ],
        designURL: [
          {
            title: 'Wireframe',
            link: 'https://www.figma.com/file/2GVwycuVmxJLLopxLScpid/Tranquil-Tofino-Cabin-Wireframes?node-id=0%3A1',
          },
        ],
      },
    ],
    development: [
      {
        title: 'Booking Feature',
        description: [
          "We used the WooCommerce plugins and adjust the booking settings according to our clients' requirements. The booking feature allows users to select the bookable dates, create an account and checkout.",
        ],
        img: tranquilTofinoCabinsBookings,
      },
      {
        title: 'Customized Theme',
        description: [
          'We started with configuring the backend of WordPress then dived into template and plugin files. To have better control of the content, we created custom fields using the ACF(Advanced Custom Fields) plugin and output the content of the fields using appropriate template files.',
          'We also used action hooks and filter hooks to organize the content to position it in the way we want based on the wireframes. We made sure our clients can easily update the content on their own and display them properly without touching the template files.',
        ],
        img: tranquilTofinoCabinsCode,
      },
    ],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
      imgs: [
        tranquilTofinoCabinsSlider1,
        tranquilTofinoCabinsSlider2,
        tranquilTofinoCabinsSlider3,
        tranquilTofinoCabinsSlider4,
        tranquilTofinoCabinsSlider5,
      ],
    },
  },
  {
    id: 'note-taker',
    title: 'TS Note-Taking App',
    subtitle: 'React TypeScript CRUD App',
    briefDescription:
      'A functional note-taker app with CRUD feature using TypeScript, React JS, LocalStorage and BootStrap.',
    tags: ['TypeScript', 'ReactJS', 'BootStrap', 'LocalStorage'],
    thumbnailImgUrl: noteTakerThumbImg,
    livesite: 'https://ztan.ca/note-taker/',
    github: 'https://github.com/jimmytan123/TypeScript-React-Note-App',
    category: ['fun'],
    moreInfo: false,
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'React Portfolio Website',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['React', 'HTML5', 'Sass'],
    thumbnailImgUrl: portfolioThumbImg,
    livesite: 'https://ztan.ca/',
    github: 'https://github.com/jimmytan123/portfolio',
    category: ['featured', 'featured-home'],
    moreInfo: true,
    bannerImgUrl: portfolioBanner,
    bannerImgMobileUrl: portfolioBannerMobile,
    overview:
      "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable, I decided to build my portfolio using React since I can update my projects easier with React's reusable components.",
    duration: '5 Weeks',
    team: ['Jimmy Tan'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['React', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Figma', 'SEO'],
    planning: [
      {
        title: 'Project Goal & Planning',
        description: [
          'The goal of the portfolio site project is to demonstrate Jimmy Tan’s web design and development skills. The website should display the content in a clear and user-friendly way since I value the content of this site to be the most important. In addition, the website should be easy for me to manage as the project lists may be updated regularly to showcase my latest skills and knowledge.',
          'Thanks to React’s component-based architecture, I can create reusable components and divide a large app into smaller parts. It is easier for me to add more features to the website and maintain the projects data.',
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
          'The project filter helps to organize the projects into categories, which makes the users view the projects that they are interested in easier. The filter feature needs to use React useState hook, event listeners, and array filtering techniques. I also used React state to determine the default filter.',
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
      {
        title: 'SEO',
        description: [
          'In order to increase the visibility of the portfolio website in search engines, I used React Helmet to optimize the SEO. Therefore, it allowed me to have every page have its own custom meta tags.',
        ],
      },
    ],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
      imgs: [
        portfolioSlider1,
        portfolioSlider2,
        portfolioSlider3,
        portfolioSlider4,
        portfolioSlider5,
      ],
    },
    reflection: [
      'This portfolio project gave me an opportunity to try out new skills and get familiar with React during the process. It also let me realize how React components are useful when building templates to serve project data. I spent a lot of time planning before the design and development phase. Breaking down the project into small pieces, following the plan allows me to make the workflow smoother and more efficient. ',
      'One thing that I learned during this project is to put myself in the user’s shoes. Only when we have learnt more about the target users, we can create a website that has the features/design that is more suitable to their needs. I initially think of putting my contact information as an individual page, but I decided to put it as a section to locate at the end of every page based on user experience consideration. ',
      'In the middle of the development phase, I realized React, as a single-page application, has limited capabilities of improving SEO. Although I  have used React Helmet to get around the issue, I think using a static site generator such as Gatsby to build a portfolio site will be a more SEO-friendly solution. I am going to learn Gatsby or Next.js to rebuild my portfolio website in the future.',
    ],
  },
  {
    id: 'codeBreaker',
    title: 'Code Breaker',
    subtitle: 'JavaScript Game',
    briefDescription:
      'A browser-based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with difficulty level selection, countdown timer and star rating features.',
    tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS3', 'BootStrap'],
    thumbnailImgUrl: codeBreakerThumbImg,
    livesite: 'https://ztan.ca/code-breaker/',
    github: 'https://github.com/jimmytan123/Code-Breaker-Game',
    category: ['fun'],
    moreInfo: false,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'JavaScript Weather App',
    briefDescription:
      'The responsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
    tags: ['JavaScript', 'HTML5', 'Sass'],
    thumbnailImgUrl: weatherAppThumbImg,
    livesite: 'https://ztan.ca/weather-app/',
    github: 'https://github.com/jimmytan123/weather-app',
    category: ['fun'],
    moreInfo: false,
  },
  {
    id: 'gallery',
    title: 'Gallery',
    subtitle: 'React Image Gallery',
    briefDescription:
      'A responsive masonry gallery that showcases my interests in landscape photography. All the images can be uploaded from local devices via the site.',
    tags: ['ReactJS', 'Sass', 'Firebase'],
    thumbnailImgUrl: galleryThumbImg,
    livesite: 'https://ztan.ca/gallery/',
    category: ['fun'],
    moreInfo: false,
  },
];
