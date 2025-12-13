// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import ignouLogo from './assets/education_logo/ignouLogo.png';
import pwLogo from './assets/education_logo/pw.jpeg'


// Project Section Logo's
import amazonLogo from './assets/work_logo/amazon.png';
import apni_shopLogo from './assets/work_logo/apni_shop.png';
import livingLineLogo from './assets/work_logo/livingLine.png';
import flipkartLogo from './assets/work_logo/flipkart.png';
import foodOrderingLogo from './assets/work_logo/food_ordering.png';
import quizLogo from './assets/work_logo/quiz.png';
import rockpaperLogo from './assets/work_logo/rock_paper.png';
import tictacLogo from './assets/work_logo/tic-tac.png';
import weatherLogo from './assets/work_logo/weather_app.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img: ignouLogo,
    collage: "Indira Gandhi National Open University (IGNOU)",
    date: "Jan 2019 - July 2022",
    grade: "Graduation Completed",
    desc: "I completed my Bachelor's degree in History (Honours) from IGNOU. Although my academic background is in Arts, I discovered a deep interest in technology and decided to shift my career towards web development. This transition shows my adaptability and strong determination to learn and grow in the tech field.",
    degree: "Bachelor of Arts - History (Hons)",
  },
  {
    id: 1,
    img: pwLogo,
    collage: "PW Skills (Physics Wallah)",
    date: "July 2024 - January 2025",
    grade: "Course Completed",
    desc: "I have completed the Full Stack Web Development course from PW Skills with a strong focus on Frontend Development. I gained hands-on experience building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and modern tools like Tailwind CSS and Bootstrap. My strength lies in creating clean, accessible, and visually engaging frontend designs. I am confident in developing high-quality frontend applications that provide great user experience.",
    degree: "Full Stack Web Development (Certification Course)",
  },

];

export const projects = [
  {
    id: 0,
    title: "Food Ordering Website",
    description:
      "Displayed food items with images, names, and prices using reusable components. Integrated responsive design to ensure compatibility across devices (mobile, tablet, desktop). Implemented Add to Cart functionality with real-time item count and total price using React useState. Used React Router DOM for seamless navigation between pages like Home, Menu, and Contact.",
    image: foodOrderingLogo,
    tags: ["React JS", "Vite", "Tailwind CSS", "Redux", "React Router DOM"],
    github: "https://github.com/isimrangupta/Food-ordering-app",
    webapp: "https://food-ordering-app-rose-two.vercel.app/",
  },

  {
    id: 1,
    title: "LivingLines Website",
     description:"Built a fully responsive LivingLines website using Next.js and Tailwind CSS. Implemented dynamic Hero section with Swiper slides, Marquee animation with useState/useEffect, Gallery & Testimonials from JSON data, Video Banner with CTA, Services & Design Process sections. Focused on responsive design, modern UI practices, and deployed on Vercel.",
    image: livingLineLogo,
     tags: ["Next.js", "React", "Tailwind CSS", "Swiper JS", "useState", "useEffect", "Responsive Design", "JSON Data", "Video Banner", "Gallery", "Testimonials"],
    github: "https://github.com/isimrangupta/LivingLines-website",
    webapp: "https://living-lines-website.vercel.app/",
  },

  {
    id: 2,
    title: "Quiz App",
    description:
      "Created an interactive quiz application using HTML, CSS, and JavaScript with a clean user interface. Implemented multiple-choice questions with real-time answer validation and instant feedback. Designed a mobile-responsive layout for smooth quiz interaction across all devices. Implemented a scoring system that provides immediate feedback after quiz completion.",
    image: quizLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/isimrangupta/Quiz-App",
    webapp: "https://quiz-app-kappa-sand.vercel.app/",
  },

  {
    id: 3,
    title: "ApniShop Ecommerce",
    description:
      "Implemented Add to Cart feature using React state hooks for real-time updates and cart management. Built a fully responsive e-commerce platform using ReactJS, featuring smooth navigation with React Router DOM. Developed product listing pages with detailed views, dynamic filtering, and search functionality. Integrated product search functionality to filter items based on user input.",
    image: apni_shopLogo,
    tags: ["React JS", "React Router DOM", "State Hooks", "Search Filter", "Responsive UI"],
    github: "https://github.com/isimrangupta/ApniShop-ecommerce",
    webapp: "https://apni-shop-ecommerce-ikng.vercel.app/",
  },

  {
    id: 4,
    title: "Amazon Clone",
    description:
      "Built a basic responsive clone of Amazon using only HTML and CSS. The layout includes a navigation bar, product grid, banner section, and footer. The design is mobile-friendly and provides a simple representation of the original Amazon website structure.",
    image: amazonLogo,
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/isimrangupta/Amazon-Clone",
    webapp: "https://amazon-clone-rust-two.vercel.app",
  },

  {
    id: 5,
    title: "Flipkart Clone",
    description:
      "Created a simple and responsive Flipkart homepage layout using only HTML and CSS. It features a header, category banners, and product showcase. The design adapts to different screen sizes for better user experience.",
    image: flipkartLogo,
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/isimrangupta/Flipkart-clone",
    webapp: "https://flipkart-clone-eta-five.vercel.app",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Developed a responsive weather forecast application using HTML, CSS, and JavaScript. The app fetches real-time weather data using an external API and displays city-wise temperature, weather condition, and icon. It is fully responsive and works across devices.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive"],
    github: "https://github.com/isimrangupta/Weather-Api",
    webapp: "https://weather-api-five-flame.vercel.app",
  },
  {
    id: 7,
    title: "Rock Paper Scissors Game",
    description:
      "Created an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript. The game allows the user to play against the computer with live score updates and animated results. The UI is mobile-friendly and fully responsive.",
    image: rockpaperLogo,
    tags: ["HTML", "CSS", "JavaScript", "Game", "Responsive"],
    github: "https://github.com/isimrangupta/Rock-Paper-Scissors-game",
    webapp: "https://rock-paper-scissors-game-nine-tau.vercel.app",
  },
  {
    id: 8,
    title: "Tic Tac Toe Game",
    description:
      "Designed and developed a responsive Tic Tac Toe game using HTML, CSS, and JavaScript. Features include game start, reset, and new game buttons. Real-time win detection, draw condition, and turn indication are also implemented to enhance gameplay.",
    image: tictacLogo,
    tags: ["HTML", "CSS", "JavaScript", "Game", "Responsive"],
    github: "https://github.com/isimrangupta/Tic-Tac-Toe-game",
    webapp: "https://tic-tac-toe-game-rho-liard.vercel.app",
  },

];  