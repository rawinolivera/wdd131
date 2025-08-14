faq = [
  {
    "question": "What is software development, and how does it work?",
    "answer": "Software development is the process of planning, designing, coding, testing, managing, launching, and updating digital products, such as computer systems, mobile and web apps, and connected hardware devices. It transforms strategic or creative ideas into reality through a series of steps and methodologies."
  },
  {
    "question": "Why is continuous improvement important in software development?",
    "answer": "Continuous improvement allows teams to optimize processes, reduce errors, and increase software quality. Implementing agile practices and automation helps adapt quickly to changes and enhance user satisfaction."
  },
  {
    "question": "What are some common software development methodologies?",
    "answer": "Common methodologies include:\n\nAgile: Emphasizes iterative development and collaboration.\nScrum: A framework within Agile focusing on fixed-length iterations called sprints.\nDevOps: Combines development and operations to improve collaboration and productivity."
  },
  {
    "question": "What tools are essential for modern software development?",
    "answer": "Essential tools include:\n\nVersion Control: Git, GitHub\nCI/CD: Jenkins, GitLab CI\nProject Management: Jira, Trello\nCode Quality: SonarQube, ESLint\nContainerization: Docker"
  },
  {
    "question": "What skills are important for a software developer?",
    "answer": "A successful software developer needs both technical and soft skills. Technical skills include proficiency in programming languages, understanding algorithms and data structures, and experience with frameworks and tools relevant to their field. Soft skills include problem-solving, communication, adaptability, and teamwork, which are essential for collaborating effectively and delivering quality results."
  },
  {
    "question": "How do testing and quality assurance contribute to software success?",
    "answer": "Testing and quality assurance (QA) ensure that software functions correctly, meets requirements, and provides a positive user experience. Through methods such as unit testing, integration testing, and user acceptance testing, teams can detect and fix defects early, reducing costs and avoiding issues after release. QA also helps maintain software reliability and user trust."
  }
]

const faqContent = document.querySelector(".faq");

function createFaq () {
  let div = document.createElement("div");
  faq.forEach(item => {
    let h2 = document.createElement("h2");
    let a = document.createElement("a");
    let p = document.createElement("p");

    a.textContent = `${item.question}`
    p.textContent = `${item.answer}`
    h2.appendChild(a);
    div.appendChild(h2);
    div.appendChild(p);
  })
  faqContent.appendChild(div);
};

createFaq();

recResources = {
  "recommended_resources": {
    "books": [
      {
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "description": "Fundamentals for writing clean and maintainable code."
      },
      {
        "title": "The Phoenix Project",
        "author": "Gene Kim",
        "description": "A novel illustrating DevOps principles."
      },
      {
        "title": "Accelerate",
        "author": "Nicole Forsgren",
        "description": "Studies on practices leading to high performance in software teams."
      }
    ],
    "websites": [
      {
        "name": "Stack Overflow",
        "url": "https://stackoverflow.com/",
        "description": "Active community for resolving technical questions."
      },
      {
        "name": "GitHub",
        "url": "https://github.com/",
        "description": "Repository for open-source projects and collaboration."
      },
      {
        "name": "Dev.to",
        "url": "https://dev.to/",
        "description": "Platform for sharing articles and experiences on software development."
      }
    ],
    "youtube_channels": [
      {
        "name": "ArjanCodes",
        "description": "Tutorials on design patterns and software architecture.",
        "url":"https://www.youtube.com/arjancodes"
      },
      {
        "name": "Academind",
        "description": "Clear explanations on modern technologies and practices.",
        "url":"https://www.youtube.com/@academind"
      },
      {
        "name": "The Net Ninja",
        "description": "Courses on web development and programming tools.",
        "url":"https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
      }
    ]
  }
}

resources = document.querySelector("resources")
