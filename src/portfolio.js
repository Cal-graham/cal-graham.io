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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Cal-Graham",
  title: "Hi, I'm Cal",
  subTitle: emoji(
    "I am an Engineer, Consultant, Photographer, and Rock Climber. Currently I am pursuing my interest in solving complex problems and passion for environmental change through work as a Operations Consultant."
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
      descBullets: ["2022-2023 Tea Room: Barista at carbon neutral cafe run by the Engineering Society",
                    "2020-2021 Centre for Teaching and Learning: Worked one-on-one with professors to facilitate transition to online delivery during COVID-19 pandemic",
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
        "Led a commercial food manufacturer to identify $8.2M of raw ingredient losses corresponding to 5K tonnes of CO2e",
        "Initiated an internal team and toolset for assessing carbon impact with the goal of improving commercial-scale carbon reduction projects",
        "As the global IT lead I led efforts to improve internal accounting, standardize cybersecurity training, and transition cloud services"
      ]
    },
    {
      role: "Optical Engineering Intern",
      company: "Viavi Solutions",
      companylogo: require("./assets/images/ViaviLogo.png"),
      date: "May 2021 – September 2022",
      desc: "Analyzed, developed, and quantified optical technologies to address client needs",
      descBullets: [
        "Presented quantified solutions applying cutting-edge technologies to address client needs",
        "Led weekly meetings triaging customer requirements and development goals to maintain and grow $10M project",
        "Initiated team productivity boost of up to 5%/week through development of a Microsoft Cloud integrated logistics applet – tracking lab equipment through passive network scanning"
      ]
    },
    {
      role: "Technician's Assistant",
      company: "Queen's Civil Engineering Department",
      companylogo: require("./assets/images/smith.png"),
      date: "Sept 2018 – Sept 2019",
      desc: "Maintained multiple lab spaces and experiments for post-graduate researchers."
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
        "",
      image: require("./assets/images/Shield.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "MATLAB and Simulink - Satellite Attitude Simulation",
      subtitle:
        "",
      image: require("./assets/images/sat.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "MATLAB - Live Projectile Prediction and Response",
      subtitle: "",
      image: require("./assets/images/SIDEVIEW.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "Python and C - Attitude Controller Prototype",
      subtitle:
        "",
      image: require("./assets/images/sat.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Python - Simulating Energy Spectra of Bound Particles",
      subtitle:
        "",
      image: require("./assets/images/state.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "C - Serial Communication for CAN-SBX Balloon",
      subtitle:
        "",
      image: require("./assets/images/serial2.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "Python and HTML - Networked 3D Printer Controller",
      subtitle:
        "",
      image: require("./assets/images/octo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "Sensor Design and Python - Espresso Machine Networked Interface",
      subtitle:
        "",
      image: require("./assets/images/beans1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "Rock Climbing Wall",
      subtitle:
        "",
      image: require("./assets/images/wall.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "Camera Repair and Lens Adaptors",
      subtitle:
        "",
      image: require("./assets/images/adaptor.WEB.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
      ]
    },
    {
      title: "Design of Radio Telescope for Recording 2024 Eclipse in Inclement Weather",
      subtitle:
        "",
      image: require("./assets/images/duke.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://www.dukeofed.org/"
        }
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
