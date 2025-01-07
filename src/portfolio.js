/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cal-Graham",
  title: "Hi, I'm Cal",
  subTitle: emoji(
    "I am an Engineer, Consultant, Photographer, and Rock Climber. Currently I am pursuing my interest in solving complex problems and passion for measurable and viable environmental change through work as an Operations Consultant."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  //gmail: "saadpasta70@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Work with companies and experts to unlock value by prioritizing and tackling complex problems",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queen's University",
      logo: require("./assets/images/queens.png"),
      subHeader: "Bachelor of Applied Science",
      duration: "September 2019 - April 2023",
      desc: "Engineering Physics - Electrical Specialization",
      descBullets: [
        "Dean’s List, Internship Program, Work Study Program",
        "Scholarships: Applied Science Class of ’68, Victor Alfred Betts Merit-Based Admission",
        "Co-authored: Design of a Simulator for Testing Satellite Attitude Determination and Control Systems (JUEPPEQ)"

      ]
    },
    {
      schoolName: "Queen's Space Engineering Team",
      logo: require("./assets/images/QSET.png"),
      subHeader: "ADCS Team Manager, Technical Consultant",
      duration: "September 2019 - April 2023",
      desc: "As the Attitude Determination and Control System (ADCS) Manager my role was to identify and create opportunities for my team to exercise practical applications of engineering science",
      descBullets: ["CAN-SBX: Earned the opportunity to launch an ADCS payload via stratospheric balloon in collaboration with the Canadian Space Agency",
                    "CSDC: Designed and prototyped ADCS systems for the Canadian Cube-Satellite Design Competition (CSDC)"
      ]
    },
    {
      schoolName: "Work Study Program - Queen's University",
      logo: require("./assets/images/ctl.png"),
      subHeader: "Centre for Teaching and Learning, Engineering Teaching and Learning Team, Civil Engineering Labs",
      duration: "September 2018 - April 2023",
      desc: "Took on part-time roles supporting University faculty while enrolled in a full Engineering course load",
      descBullets: ["2020-2021 Centre for Teaching and Learning: Worked one-on-one with professors to facilitate transition to online delivery during COVID-19 pandemic",
                    "2019-2020 Engineering Teaching and Learning Team: Collaborated with education specialists to advise instructors on curriculum delivery",
                    "2018-2019 Civil Engineering Laboratory: Maintained multiple lab spaces and experiments for post-graduate researchers"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Operations Consultant",
      company: "Stroud International",
      companylogo: require("./assets/images/StroudLogo_.png"),
      date: "September 2023 – Present",
      desc: "Led client improvement teams over six projects to solve complex and high value manufacturing challenges.",
      descBullets: [
        "Identified $8.2M of raw material waste corresponding to 5K tonnes of CO2e",
        "Increased capacity of medical-grade product 20% sitewide, without capital expense",
        "Proposed and established a Carbon Accounting team designed to attract climate-conscious clients",
        "Directed IT globally, enacted accounting, cybersecurity, and cloud service improvements"
      ]
    },
    {
      role: "Optical Engineering Intern",
      company: "Viavi Solutions",
      companylogo: require("./assets/images/ViaviLogo.png"),
      date: "May 2021 – September 2022",
      desc: "Analyzed, developed, and quantified optical technologies to address client needs",
      descBullets: [
        "Led weekly meetings triaging customer requirements and development goals to maintain and grow $10M project",
        "Initiated productivity boost up to 5% by developing and deploying a cloud-based logistics applet",
        "Designed testing to address potential of cutting-edge optical products, advising development team based on findings"
      ]
    },
    {
      role: "Barista and Front of House",
      company: "Tea Room",
      companylogo: require("./assets/images/smith.png"),
      date: "Sept 2021 – Sept 2022",
      desc: "Staff member at the Queen's Engineering Society's Carbon Neutral cafe",
      descBullets: [
        "Engaged in community development events and initiatives",
        "Supported the business' goal of modelling a fiscally competitive carbon-neutral business"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Achievements and Certifications",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/duke.jpg"),
      projectName: "Duke of Edinburgh's Gold Level Award",
      projectDesc: "Earned the Duke of Edinburgh Gold Award by investing 500+ hours into volunteer work (water safety classes, youth leadership workshops), skill development (learning Mandarin, understanding of photography), and personal improvement (sport, and organizing group portaging trips)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dukeofed.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/esa.png"),
      projectName: "European Space Agency - Course on Satellite Operations",
      projectDesc: "Attended a two-week ESA course on satellite operations to supplement my understanding of Attitude Determination and Control Systems (ADCS) and inform my work as ADCS Manager for Queen's Space Engineering Team",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.esa.int/Education/ESA_Academy/Ladybird_Guide_to_Spacecraft_Operations_Training_Course_2024_open_for_applications"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "SoidWorks and 3D Printing - Faceshield Design and Manufacture",
      subtitle:
        "Designed and manufactured 200+ face shields for local hospital staff during COVID shortages",
      image: require("./assets/images/Shield.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "MATLAB and Simulink - Satellite Attitude Simulation",
      subtitle:
        "A simulation of satellite orientation based on reaction wheel control mechanisms. These simulations were used to design QSAT's ADCS systems, as well as the basis for my group's paper on satellite control published by JUEPPEQ (linked below)",
      image: require("./assets/images/sat.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "JUEPPEQ Paper",
          url: "https://ojs.library.queensu.ca/index.php/JUEPPEQ/article/view/16417"
        }
      ]
    },
    {
      title: "MATLAB - Live Projectile Prediction and Response",
      subtitle: "A mechanism which applied knowledge of Control Theory and Numerical Methods in order to solve multiple projectiles' real-time positions and predicted trajectories via a set of atmospheric and location observations",
      image: require("./assets/images/SIDEVIEW.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "Python and C - Attitude Controller Prototype",
      subtitle:
        "A combination of hardware and software used to control orientation of a ‘one-U’ cube sat. The first iteration of reaction-wheel control hardware employed a raspberry pi and motor with integrated PWM signal controller on a single axis testing bed. The second iteration of control hardware employed an arduino with a control algorithm written in C.",
      image: require("./assets/images/sat.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "Python - Simulating Energy Spectra of Bound Particles",
      subtitle:
        "A model which applied numerical methods to determine the change in a bound particle’s state and energy spectra based on variation in the potential function binding the particle. Specifically considering potential functions representing the transition between well-known analytical solutions to the Infinite Square Well and Harmonic Oscillator problems.",
      image: require("./assets/images/state.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "C - Serial Communication for CAN-SBX Balloon",
      subtitle:
        "Multiple arduinos running serial communication functions within a real time operating system. The microcontrollers work in tandem to read, save, and transfer position and orientation data onboard the CSA’s new stratospheric balloon platform (QSET’s CAN-SBX project).",
      image: require("./assets/images/serial2.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "Python and HTML - Networked 3D Printer Controller",
      subtitle:
        "A customized a 3D printer control server based on Octoprint. Integrated the server with the printer chassis and electronics while upgrading motor drivers, hot end, and enclosure.",
      image: require("./assets/images/octo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "Sensor Design and Python - Espresso Machine Networked Interface",
      subtitle:
        "Refurbished and repaired a vintage La Pavoni Pub commercial-scale espresso machine. Added temperature sensors, pressure sensors, flow sensors and control via Raspberry Pi driven network interface (B.E.A.N.S.).",
      image: require("./assets/images/beans.1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "B.E.A.N.S.",
          url: "https://github.com/Cal-graham/beans"
        }
      ]
    },
    {
      title: "Rock Climbing Wall",
      subtitle:
        "Manufactured a 300 square foot adjustable rock climbing wall including belay and redundant safety mechanisms. 3D printed custom SolidWorks designs and shaped recycled wood to create custom climbing holds.",
      image: require("./assets/images/wall.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "Camera Repair and Lens Adaptors",
      subtitle:
        "Repaired multiple digital cameras and 3D printed lens mount adaptors to enable use of reclaimed film photography lenses.",
      image: require("./assets/images/adaptor.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "Design of Radio Telescope for Recording 2024 Eclipse in Inclement Weather",
      subtitle:
        "Designed the optical geometry, selected sensors, and created a budget for a radio-telecscope with the goal of enabling a direct-light recording of the 2024 eclipse from Kingston should there have been inclement weather (cloudcover).",
      image: require("./assets/images/Screenshot 2023-03-22 094115.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Cal Graham - Portfolio"),
  subtitle:
    "",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
