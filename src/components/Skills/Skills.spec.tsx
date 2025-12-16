import {render, screen, waitFor } from '@testing-library/react';
import {Skills} from './Skills';
import type {ISkill} from '../../types/skills.ts';
import '@testing-library/jest-dom';

const skills :ISkill[] = [
    {
        id: 101,
        skill: 'HTML + CSS'
    },
    {
        id: 102,
        skill: 'Typescript'
    }
]

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(skills),
        })
    ) as jest.Mock;
});



describe('Skills component', () => {
    it('renders fetched skills', async ()  => {
        render(<Skills/>)

        await waitFor(() => {
            expect(screen.getByText('Skills')).toBeInTheDocument();
        });

        expect(screen.getByText('HTML + CSS')).toBeInTheDocument();
        expect(screen.getByText('Typescript')).toBeInTheDocument();
    });
    it('shows error message on fetch fail', async ()  => {
        (global.fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({
                ok: false,
                status: 500
            })
        );
        render(<Skills/>)

        await waitFor(() => {
            expect(screen.getByText('Error loading skills: HTTP error! Status: 500')).toBeInTheDocument();
        });
    });
    it('shows loading initially', async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() =>
            new Promise(() => {})
        );
        render(<Skills/>)
        await waitFor(() => {
            expect(screen.getByText('Loading skills…')).toBeInTheDocument();
        });
    })
})