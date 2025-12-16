import type {FC} from 'react';
import {Skills} from '../components/Skills/Skills.tsx';
import {WorkHistory} from '../components/WorkHistory/WorkHistory.tsx';
import {staticJobs} from '../../public/StaticJobs.ts';
import Box from '@mui/material/Box';



export const ExperiencePage: FC = () => {
    return <div>

        <Box component="section"
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
                gap: 2,
                alignItems: 'start',
            }}>
            <Skills/>
            <WorkHistory jobs={staticJobs}/>
        </Box>
    </div>;
};