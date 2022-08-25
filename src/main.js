const menuToggler = document.querySelector("#menu-toggler")
const mobileNav = document.querySelector("#mobile-nav")

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


const formatted = jsonFormatHighlight(skills, customColorOptions)
const skillsContainer = document.querySelector("#skills-container")
const skillsContainer2xl = document.querySelector("#skills-container-2xl")
const skillsVariable = '<span class="text-red-900 font-bold"> let skills = </span>'
skillsContainer.innerHTML = '<pre>\n' + skillsVariable + formatted + '\n</pre>'
skillsContainer2xl.innerHTML += '<pre>\n' + skillsVariable + formatted + '\n</pre>'