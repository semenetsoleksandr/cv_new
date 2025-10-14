import {render, screen} from "@testing-library/react";
import Overview from "./Overview";
import "@testing-library/jest-dom";

describe("Overview component", () => {
    it("renders the title correctly", () => {
        render(<Overview title="Tittle test" introText="Some text"/>);
        expect(screen.getByText("Tittle test")).toBeInTheDocument();
        expect(screen.getByText("Some text")).toBeInTheDocument();
        expect(screen.getByAltText("photo cv")).toBeInTheDocument();
    })
})