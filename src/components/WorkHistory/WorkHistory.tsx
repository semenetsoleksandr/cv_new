import {type FC} from 'react';
import type {WorkHistoryProps} from '../../types/job.ts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import '../WorkHistory/WorkHistory.css'

export const WorkHistory: FC<WorkHistoryProps> = ({jobs}) => {
    return (
        <Card sx={{maxWidth: 600}}>
            <CardHeader
                title="Work History"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {jobs.map((job) => (
                        <Accordion key={job.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1-content"
                            >
                                <Typography variant="h6" component="h4">
                                    {job.company}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">
                                    <strong>{job.role}</strong> ({job.period})
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {job.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Typography>
            </CardContent>
        </Card>

    );
};