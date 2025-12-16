import {type FC, useEffect, useState} from 'react';
import type {ISkill} from '../../types/skills.ts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

export const Skills: FC = () => {
    const [skills, setSkills] = useState<ISkill[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const res = await fetch('public/skills.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data: ISkill[] = await res.json();
                setSkills(data);
            } catch (err: unknown) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchSkills();
    }, []);
    if (loading) {
        return <p>Loading skills…</p>;
    }
    if (error) {
        return <p>Error loading skills: {error}</p>;
    }
    return (
        <Card sx={{maxWidth: 600}}>
            <CardHeader
                title="Skills"
            />
            <CardContent>
                <List sx={style}>
                    <ListItem>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ width: '100%' }}>
                            {skills.map((skill) => (
                                <li key={skill.id} style={{listStyleType: 'none'}}>
                                    <Typography variant="h6" component="h4" paddingTop={1}>
                                        {skill.skill}
                                    </Typography>
                                    <Divider component="li"/>
                                </li>
                            ))}
                        </Typography>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};