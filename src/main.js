const menuToggler = document.querySelector("#menu-toggler")
const mobileNav = document.querySelector("#mobile-nav-menu-items")

menuToggler.addEventListener("click", () => {

    menuToggler.classList.toggle("text-white")
    mobileNav.classList.toggle("hidden")
})


const skills = [
    {
        "id": "language-skill-0",
        "type": "programming",
        "language": "C++",
        "systems": [],
        "frameworks": ["Qt", "C++ Builder", "Dear ImGUI"],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "language-skill-1",
        "type": "programming",
        "language": "PHP",
        "systems": [],
        "frameworks": ["Symfony", "Laravel"],
        "libraries": ["PHPMailer"],
        "testing": ["Behat", "PHPUnit"]
    },

    {
        "id": "language-skill-2",
        "type": "programming",
        "language": "JavaScript",
        "systems": [],
        "frameworks": [
            "jQuery",
            "Angular",
            "Vue",
            "ExpressJS",
            "NextJS",
            "NustJS",
            "NestJS",
            "React Native",
            "Adonis"
        ],
        "libraries": ["React", "Redux", "Socket.io"],
        "testing": ["Jest"]
    },

    {
        "id": "language-skill-3",
        "type": "programming",
        "language": "Python",
        "systems": [],
        "frameworks": ["Django"],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "language-skill-4",
        "type": "programming",
        "language": "Dart",
        "systems": [],
        "frameworks": ["Flutter"],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "language-skill-5",
        "type": "programming",
        "language": "Go",
        "systems": [],
        "frameworks": [],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "database-skill-0",
        "type": "database",
        "language": "SQL",
        "systems": ["SQL Server", "MYSQL", "PostgreSQL"],
        "frameworks": [],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "database-skill-1",
        "type": "database",
        "language": "NoSQL",
        "systems": ["MongoDB", "Redis"],
        "frameworks": [],
        "libraries": ["Mongoose"],
        "testing": [],
        "miscs": []
    },

    {
        "id": "database-skill-2",
        "type": "database",
        "language": "GraphQL",
        "systems": [],
        "frameworks": [],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "database-skill-3",
        "type": "database",
        "language": "Neo4J",
        "systems": [],
        "frameworks": [],
        "libraries": [],
        "testing": [],
        "miscs": []
    },

    {
        "id": "design-skill-0",
        "type": "design",
        "language": "CSS",
        "systems": [],
        "frameworks": ["Bootstrap", "Tailwind", "Bulma"],
        "libraries": ["Material UI"],
        "testing": [],
        "miscs": [{ "type": "pre-processor", "name": "SASS" }]
    },

    {
        "id": "devOps-skill-0",
        "type": "devops",
        "language": "",
        "systems": [],
        "frameworks": [],
        "libraries": [],
        "testing": [],
        "miscs": [
            { "type": "container", "name": "Docker" },
            { "type": "container", "name": "Kubernetes" }
        ]
    }
]

const customColorOptions = {
    keyColor: 'red',
    numberColor: 'blue',
    stringColor: 'indigo',
    trueColor: '#00cc00',
    falseColor: '#ff8080',
    nullColor: 'cornflowerblue'
};

const themeToggler = document.querySelector("#theme-toggler")
const themeIndicator = document.querySelector("#theme-indicator")
themeToggler.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
})


const formatted = jsonFormatHighlight(skills, customColorOptions)
const skillsContainer = document.querySelector("#skills-container")
const skillsContainer2xl = document.querySelector("#skills-container-2xl")
const skillsVariable = '<span class="text-red-900 font-bold"> let skills = </span>'
skillsContainer.innerHTML += '<pre>\n' + skillsVariable + formatted + '\n</pre>'
skillsContainer2xl.innerHTML += '<pre>\n' + skillsVariable + formatted + '\n</pre>'


const navMenuItemSkills = document.querySelector("#nav-menu-item-skills")
navMenuItemSkills.addEventListener("click", () => {
    skillsContainer2xl.classList.remove("wobble-hor-bottom")
    window.requestAnimationFrame(function () {
        skillsContainer2xl.classList.add("wobble-hor-bottom")
    });
})



const navMenuItemAbout = document.querySelector("#nav-menu-item-about")
const aboutMeElements = ["roles", "intro-text", "about-me-nutshell"]
navMenuItemAbout.addEventListener("click", () => {
    aboutMeElements.forEach((elementID) => {
        let elementNode = document.getElementById(elementID)
        elementNode.classList.remove("bounce-bottom")
        window.requestAnimationFrame(function () {
            elementNode.classList.add("bounce-bottom")
        });
    })

})


const mobileNavMenu = document.querySelector("#mobile-nav-menu-items")
const mobileNavMenuItems = document.querySelectorAll(".nav-menu-item-mobile")
mobileNavMenuItems.forEach((navMenuItem) => {
    navMenuItem.addEventListener("click", () => {
        mobileNavMenu.classList.add("hidden")
        menuToggler.classList.toggle("text-white")
    })
})

const projects = [
    {
        title: "PayMaker",
        image: "paymaker.png",
        technologies: ["react", "laravel"],
        status: 1,
        description: "Fintech Startup - Payment Gateway & Transaction App. Manage & Categorize Payments, Pay Anyone Instantly, Multi-Wallet System.",
        link: "https://paymaker-landing.netlify.app"
    },

    {
        title: "Illusion Finance",
        image: "illusion-finance.svg",
        technologies: ["react"],
        status: 1,
        description: "Demo Bank & Financial Institution Dashboard. Save, transfer & manage funds with beneficiaries.",
        link: "https://illusion.damilareidowu.com"
    },

    {
        title: "Admin Dashboard Generator",
        image: "admin-dashboard-generator.png",
        technologies: ["react"],
        status: 1,
        description: "Generate & Download Custom UI Dashboards without writing code.",
        link: "https://admin-dashboard-generator.netlify.app/"
    },

    {
        title: "Algorithm Whiteboard",
        image: "algorithm-whiteboard.png",
        technologies: ["js"],
        status: 1,
        description: "Whiteboard to visualize data structures & algorithms.",
        link: "https://algorithm-whiteboard.netlify.app"
    },

    {
        title: "NUBAN Validator",
        image: "nuban-validator.png",
        technologies: ["js"],
        status: 1,
        description: "Validate bank account numbers using NUBAN algorithm - Nigerian Banking System.",
        link: "https://nuban-validator.netlify.app/"
    },

    {
        title: "Issuer Detector",
        image: "issuer-detector.png",
        technologies: ["js"],
        status: 1,
        description: "JS class to identify issuer of debit & credit cards in Nigeria ",
        link: "https://issuer-detector.netlify.app/"
    },

    {
        title: "Soccer Shop",
        image: "soccer-shop.png",
        technologies: ["react"],
        status: 0,
        description: "",
        link: ""
    },

    {
        title: "Phantom Blog",
        image: "phantom-blog.png",
        technologies: ["react", "tailwind", "graphql", "nextjs"],
        status: 0,
        description: "",
        link: ""
    },

    {
        title: "Phantom",
        image: "phantom.png",
        technologies: ["mongodb", "expressjs", "react", "node"],
        status: 0,
        description: "",
        link: ""
    },

    {
        title: "Employee Manager",
        image: "employee-manage.png",
        technologies: ["c++"],
        status: 0,
        description: "",
        link: ""
    }
]
const projectsContainer = document.querySelector("#projects-container")
projectsContainer.innerHTML = ``
projects.forEach((project) => {
    project.status ?
        projectsContainer.innerHTML += `<div class="project-container">
    <img
      src="./assets/img/${project.image}"
      alt="${project.title}"
      srcset=""
      class="project-img"
    />
    <div class="project-info">
      <div class="project-title">${project.title}</div>
      <div class="project-description">
            ${project.description.length ? project.description : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            tempore at cum distinctio voluptate ex necessitatibus ut magni
            maiores quia.`}  
      </div>
      <div class="project-view-button">
        <a href="${project.link.length ? project.link : "#"}" target="_blank"><i
          class="fa-solid fa-up-right-from-square project-view-btn-icon"
        ></i></a>
      </div>
    </div>
    </div>` : ""
})

const contactForm = document.querySelector("#contact-me-form")
const toast = document.querySelector("#toast")
const submitBtn = document.querySelector("#send-message-btn")
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    submitBtn.disabled = true
    const formData = Object.fromEntries(new FormData(e.target).entries())
    $.ajax({
        url: "https://damilareidowu.com/contact-me/",
        method: "POST",
        dataType: "json",
        data: `name=${formData.name}&email=${formData.email}&body=${formData.message}`,
        success: (data) => {
            // console.log("Success", data)
            toast.innerHTML = data.response
            toast.classList.contains("bg-red-700") && toast.classList.remove("bg-red-700")
            toast.classList.add("bg-green-500")
        },
        error: (err) => {
            // console.log("Error", err)
            toast.innerHTML = "Error Sending Message"
            toast.classList.contains("bg-green-500") && toast.classList.remove("bg-green-500")
            toast.classList.add("bg-red-700")
        }
    })
    contactForm.reset()
    submitBtn.disabled = false
    toast.classList.remove("w-0", "h-0")
    toast.classList.add("w-fit", "h-fit", "p-3")
    setTimeout(() => {
        toast.classList.add("w-0", "h-0")
        toast.classList.remove("w-fit", "h-fit", "p-3")
    }, 5000)
})

const contactOptions = document.querySelectorAll(".contact-option")

contactOptions.forEach(contactOption => {
    const tooltipText = document.createElement("span")
    tooltipText.innerText = "Copy To Clipboard"
    tooltipText.classList.add("tooltiptext")
    contactOption.appendChild(tooltipText)

    contactOption.addEventListener("click", () => {
        const contactOptionText = contactOption.childNodes[1].data.replace(" ", "")
        navigator.clipboard.writeText(contactOptionText)
        tooltipText.innerText = "Copied To Clipboard"
    })

    contactOption.addEventListener("mouseout", () => {
        tooltipText.innerText = "Copy To Clipboard"
    })
})








