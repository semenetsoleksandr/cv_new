import "./App.css"
import Overview from "./components/Overview.tsx";
import {WorkHistory} from "./components/WorkHistory.tsx";
import {Skills} from "./components/Skills.tsx";
import ContactForm from "./components/ContactForm.tsx";
import type {Job} from "./types/job.ts";
function App() {

    const staticJobs: Job[] = [
        {
            id: 1,
            company: "ABC Web Solutions",
            role: "Frontend Developer",
            period: "Jan 2019 – Dec 2020",
            description: "Built responsive UIs using Vanilla JS and CSS.",
        },
        {
            id: 2,
            company: "XYZ Tech",
            role: "Full Stack JS Developer",
            period: "Jan 2021 – Dec 2023",
            description: "Developed REST APIs with Express.js and dynamic frontends.",
        },
        {
            id: 3,
            company: "Intech",
            role: "Beckend Developer",
            period: "Jan 2024 – Present",
            description: "Developed REST APIs with Express.js and dynamic frontends.",
        },
    ];

    return (
        <div>
            <h1>Oleksandr Semenets CV</h1>
            <Overview
                title="Trainee Full Stack JavaScript Developer"
                introText="Passionate about building web apps with React, TypeScript, and Express."
            />
            <WorkHistory jobs={staticJobs}/>
            <Skills/>
            npm run lint:fix<ContactForm/>
        </div>
    )
}

export default App
