// src/data.js

export const personalData = {
    // --- Personal Info ---
    name: "ABHINAV BASKARAN",
    title: "Software Engineer | React & JavaScript Specialist",
    summary: "Enthusiastic and detail-oriented Computer Science graduate with 8.22 CGPA. Possessing strong proficiency in JavaScript and React, with solid knowledge of core backend technologies like Java and SQL. Dedicated to building efficient, user-friendly solutions and eager to contribute to a collaborative software development environment with a focus on problem-solving.",
    
    // --- Contact and Social ---
    contact: {
        phone: "+91 8778948004",
        email: "abhinavphoenix8323@gmail.com",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/abhinav-baskaran/",
        github: "https://github.com/Abhinavcraze",
    },
    
    // --- Skills: Grouped for clarity ---
    skills: {
        frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
        backend_and_data: ["Java", "SQL", "IndexedDB (Data Persistence)"],
        tools_and_concepts: ["Data Structures & Algorithms", "Git", "Responsive Design"]
    },

    // --- Projects: Focus on actions and corporate relevance ---
    projects: [
        {
            title: "School Attendance Management System",
            stack: "HTML, CSS, Vanilla JavaScript, Indexed DB",
            image: "/attendance.jpg",
            description: [
                "Engineered a dynamic administrative web application to manage student master records and daily attendance.",
                "Implemented client-side data persistence using Indexed DB for secure, local storage of records, ensuring data integrity.",
                "Developed the core logic for Admin Dashboard, Student Management, and Attendance Marking functionalities.",
                "Generated detailed attendance reports utilizing Indexed DB data, including summary statistics."
            ],
            link: "https://github.com/Abhinavcraze/Soruban-school-attendance-final",
        },
        {
            title: "Hotel Management System",
            stack: "HTML, CSS, Vanilla JavaScript, Indexed DB",
            image: "/hotel.jpg",
            description: [
                "Expanded the front-end structure for a multi-cuisine restaurant, focusing on dynamic layouts and responsiveness.",
                "Enforced client-side data persistence for a food order form using IndexedDB to store detailed customer order information locally.",
                "Programmed core JavaScript logic for advanced form validation, dynamic content rendering, and managing a homepage image slider."
            ],
            link: "https://github.com/Abhinavcraze/Hotel-Management-system",
        },
        {
            title: "Interactive Tic Tac Toe Game",
            stack: "React.js",
            image: "/tictac.jpg",
            description: [
                "Improved a classic game using the React.js framework to create a single-page, interactive user experience.",
                "Utilized functional components and managed complex game state (player turn, winner) within the core component logic.",
                "Applied fundamental game logic for turn-based play and determining the winner across all possible combinations."
            ],
            link: "https://github.com/Abhinavcraze/Tic_Tac_Toe.git",
        },
    ],
    
    // --- Education: Highlight academic strength ---
    education: [
        {
            year: "2020 - 2024",
            degree: "B.E. in Computer Science and Engineering",
            institution: "Kongu Engineering College",
            details: "CGPA: 8.22 (Strong foundation in CS fundamentals)",
        },
        {
            year: "2019 - 2020",
            degree: "HSC (Higher Secondary Certificate)",
            institution: "Rasi International School",
            details: "Percentage: 72%",
        },
        {
            year: "2017 - 2018",
            degree: "SSLC (Secondary School Leaving Certificate)",
            institution: "Rasi International School",
            details: "Percentage: 66.2%",
        }
    ]
};