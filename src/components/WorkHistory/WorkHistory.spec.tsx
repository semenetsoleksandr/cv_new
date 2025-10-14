import type {Job} from "../../types/job";
import { render, screen } from "@testing-library/react";
import {WorkHistory} from "./WorkHistory";
import "@testing-library/jest-dom";

const Jobs: Job[] = [
    {
        id: 101,
        company: "Intex",
        role: "Front End Developer",
        period: "2021-2022",
        description: "Some text"
    },
    {
        id: 102,
        company: "Rp Group",
        role: "Back End Developer",
        period: "2022-2023",
        description: "Some text"
    }
]

describe("WorkHistory component", () => {
    it("renders job titles and descriptions", () => {
        render(<WorkHistory jobs = {Jobs}/>);
        expect(screen.getByText("Work History")).toBeInTheDocument();
        expect(screen.getByText("Back End Developer")).toBeInTheDocument();
    })
})