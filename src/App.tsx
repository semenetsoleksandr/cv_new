import "./App.css"
import Overview from "./components/Overview";
import {WorkHistory} from "./components/WorkHistory";
import {Skills} from "./components/Skills";
import ContactForm from "./components/ContactForm";
import {staticJobs} from "./components/StaticJobs";

function App() {
    return (
        <div>
            <h1>Oleksandr Semenets CV</h1>
            <Overview
                title="Trainee Full Stack JavaScript Developer"
                introText="Passionate about building web apps with React, TypeScript, and Express."
            />
            <WorkHistory jobs={staticJobs}/>
            <Skills/>
            <ContactForm/>
        </div>
    )
}

export default App
