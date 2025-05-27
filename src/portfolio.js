/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Somanath Reddy",
  title: "Hi all, I'm Somanath Reddy",
  subTitle: emoji(
    "A passionate AI/ML Developer 🚀 having an experience of building AI/ML applications with Python / Machine Learning / TensorFlow / Huggingface and some other cool ML libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P-EkmE0neT7GyyuhcLpCzYZS43FhmVeK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/somanatz",
  linkedin: "https://www.linkedin.com/in/somanath-reddy",
  gmail: "Onsreddy2002@gmail.com",
  gitlab: "https://gitlab.com/somanatz",
  medium: "https://medium.com/@onsreddy2002",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY AI/ML DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive AI and ML User Interfaces for your web and applications"
    ),
    emoji("⚡ Progressive AI Applications for small and medium scale businesses"),
    emoji(
      "⚡ Integration of third party services such as AWS / Huggingface / Google Cloud for AI/ML applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fab fa-ml"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fab fa-tensorflow"
    },
    {
      skillName: "computer-vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-nlp"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fab fa-postgresql"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "huggingface",
      fontAwesomeClassname: "fas fa-huggingface"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chadalawada Ramanamma Engineering College",
      logo: require("./assets/images/crectirupati_logo.jpg"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "September 2020 - May 2023",
      desc: "Graduated with a strong foundation in AI/ML, and Electronics, achieving a GPA of 8.14.",
      descBullets: [
        "Gained expertise in Python, R, and SQL through coursework and hands-on projects.",
        "Directed team efforts in analytical solutions, enhancing project outcomes.",
        "Achieved certification for a paper presentation on Cloud Computing."
      ]
    },
    {
      schoolName: "Govt. Polytechnic College, Obulavaripalli",
      logo: require("./assets/images/sbtet_Logo.png"), // Replace with actual logo
      subHeader: "Diploma in Electronics and Communication Engineering",
      duration: "April 2017 - July 2020",
      desc: "Completed a diploma that built a strong foundation in electronics, communication, and embedded systems.",
      descBullets: [
        "Consistently ranked among the top 10% of students through academic excellence.",
        "Gained hands-on experience through internships, enhancing practical knowledge.",
        "Developed a solid technical foundation in circuit design, microcontrollers, and signal processing.",
        "Selected this institute for its excellent faculty and resources, which greatly contributed to my academic and professional growth."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack : "Python", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Django Rest Framework",
      progressPercentage: "60%"
    },
    {
      Stack: "machine learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "tensorflow",
      progressPercentage: "70%"
    },
    {
      Stack: "huggingface",
      progressPercentage: "80%"
    },
    {
      Stack: "OpenAI API & Gemini API",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer (AI/ML Developer)",
      company: "T-Machine Software Solutions",
      companylogo: require("./assets/images/channels4_profile.jpg"),
      date: "Nov 2024 – Present",
      desc: "Developing AI-driven solutions with a focus on financial analytics and computer vision applications. Engaged in research and implementation of deep learning models for real-world problems.",
      descBullets: [
        "Developed and optimized AI models for **Financial AI**, enhancing risk assessment and fraud detection.",
        "Implemented **Eye Gaze Tracking** algorithms to improve human-computer interaction using computer vision.",
        "Designed and fine-tuned deep learning pipelines for predictive analytics and pattern recognition.",
        "Worked on deploying AI models in scalable cloud-based environments for real-time processing."
      ]
    },
    {
      role: "Data Science Intern",
      company: "StarAgile (Highcatch private ltd)",
      companylogo: require("./assets/images/unnamed.png"),
      date: "Nov 2023 – Jun 2024",
      desc: "During my internship at StarAgile, I developed and implemented data analysis and machine learning models to solve real-world business problems. Utilizing Python, R, and SQL for data manipulation, analysis, and visualization, I created dashboards and visualizations using Tableau and Power BI to present insights to stakeholders. I worked with large datasets using Apache Spark for distributed data processing and improved data processing efficiency by 20% through optimized SQL queries and data cleaning techniques. My capstone projects included developing a deep learning model using TensorFlow and Keras to detect COVID-19 from X-ray images, achieving 92% accuracy. I also built a sentiment analysis model using LSTM in TensorFlow to classify tweets as positive, negative, or neutral, and implemented a real-time face detection system using OpenCV."
    },
    {
      role: "Embedded Developer Intern",
      company: "Takeoff Edu Pvt Ltd",
      companylogo: require("./assets/images/takeoff.png"),
      date: "Apr 2019 - Sep 2019",
      desc: "I gained hands-on experience in embedded systems and electronics through real-world projects, where I worked under expert guidance to acquire practical knowledge in circuit design, signal processing, and embedded technology. I also collaborated closely with industry experts, contributing to innovative solutions and learning best practices in electronics and communication engineering (ECE) within a team-driven environment. My project-based learning approach allowed me to develop strong technical and analytical skills, particularly in solving complex tasks related to hardware-software integration."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: emoji("THE PROJECTS THAT I'M WORKING ON OR HAVE WORKED ON RECENTLY 😎"),
  projects: [
    {
      image: require("./assets/images/quizify.png"),
      projectName: emoji("🧙 Quizify - AI Powered Quiz Generator"),
      projectDesc: "Quizify is an AI-powered quiz generator that creates quizzes based on user input. It uses OpenAI's GPT-3.5 Turbo model to generate questions and answers, providing a unique and engaging quiz experience. Quizify allows users to customize quizzes by specifying topics, difficulty levels, and question types, making it suitable for educational purposes, training sessions, or just for fun. The application is built with a user-friendly interface that makes it easy to create and share quize results with emails.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-quizify.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shl.png"),
      projectName: "SHL AI Assessment Recommender",
      projectDesc: "SHL AI Assessment Recommender is an intelligent tool designed to streamline the candidate evaluation process by suggesting the most suitable SHL assessments based on job roles, required skills, and organizational goals. Leveraging AI and data-driven insights, the system analyzes role-specific competencies and aligns them with SHL's vast library of psychometric and skill-based assessments, ensuring that recruiters and HR professionals make informed decisions with greater efficiency and accuracy. This project showcases the practical application of AI in talent management and enhances the hiring process by promoting fairness, relevance, and precision in assessment selection.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shl-ai-assessment-recommender.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Genai.png"),
      projectName: "GenAI-Campus",
      projectDesc: "GenAI-Campus is an AI-powered learning platform currently in progress, designed to empower schools, teachers, students, and parents with a personalized and engaging educational experience. The platform offers schools tools for managing digital classrooms, teachers features to deliver and track interactive content, students access to chapter-wise AI-guided learning materials, summaries, and Q&A, and parents insights into their child’s progress. Its main purpose is to simplify and enhance the learning journey through intelligent content, real-time support, and seamless collaboration among all users.",
      footerLink: [
        {
          name: "View Code Repo",
          url: "https://github.com/Somanatz/Learn_StepWise"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified Data Scientist",
      subtitle:
        "Certified Data Scientist by StarAgile, with a specialization in Machine Learning and Deep Learning.",
      image: require("./assets/images/unnamed.png"),
      imageAlt: "StarAgile Certified Data Scientist",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ouEglFYYLDSPH38ZJjFAPCGxcLO5Hk97/view?usp=sharing"
        }
      ]
    },
    {
      title: "Applied Data Science lab",
      subtitle:
        "Completed the Applied Data Science lab course by WorldQuant University, which covers the basics of data science and Machine Learning, including data visualization, data analysis, and machine learning.",
      image: require("./assets/images/WQU_logo_color.png"),
      imageAlt: "WorldQuant University",
      footerLink: [
        {
          name: "certification",
          url: "https://drive.google.com/file/d/1x7ei8_1_sNwkfZnuSg5eqQQcQ-yGqCH1/view?usp=sharing"
        }
      ]
    },

    {
      title: "NPTEL Believer certification",
      subtitle: "Completed the NPTEL course on Cloud computing, which covers the basics of Python programming, aws, and SQL.",
      image: require("./assets/images/nptel.jpg"),
      imageAlt: "NPTEL",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/14g0iEs0VCwZVTFeBJ4QGXRjneDq819My/view?usp=sharing"
        },
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
      url: "https://www.linkedin.com/pulse/day-8-time-build-your-first-machine-learning-model-obili-narugari-gavnc/?trackingId=e9CEH84oQiuYICJHY6kmiQ%3D%3D",
      title: "Time to Build Your First Machine Learning Model!",
      description:
        "In this blog, I will guide you through building your first machine learning model using Python and Scikit-learn."
    },
    {
      url: "https://www.linkedin.com/pulse/day-13-mastering-advanced-nlp-techniques-named-ner-obili-narugari-zmzpc/?trackingId=e9CEH84oQiuYICJHY6kmiQ%3D%3D",
      title: "Mastering Advanced NLP Techniques: Named Entity Recognition",
      description:
        "In this blog, I will guide you through Named Entity Recognition (NER) and how to implement it using Python and the Spacy library."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9666969012",
  email_address: "Onsreddy2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
