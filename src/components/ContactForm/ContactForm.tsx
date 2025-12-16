import React, {type ChangeEvent, type FormEvent, useState} from 'react';
import type {ISendMessageRequestBody} from '../../types/messages.ts';
import {cvApi} from '../../services/cv-api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ISendMessageRequestBody>({
        username: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await cvApi.sendMessage(formData)
            alert('Your message has been sent!');
            setFormData({username: '', email: '', message: ''});
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <p>Loading ContactForm…</p>;
    }
    if (error) {
        return <p>Error loading ContactForm: {error}</p>;
    }


    return (
        <Container maxWidth="sm">
            <Card sx={{maxWidth: 600}}>

                <CardHeader
                    title="ContactForm"
                />
                <CardContent>
                    <form className="contact" onSubmit={handleSubmit}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    id="name"
                                    name="username"
                                    label="Your Name"
                                    variant="outlined"
                                    value={formData.username}
                                    onChange={handleChange}
                                    type="text"
                                    sx={{flexGrow: 1}}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Your Email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    sx={{flexGrow: 1}}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            </Stack>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{paddingTop: 1}}></Typography>
                        <TextField
                            multiline
                            fullWidth
                            minRows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            label="Enter your message..."
                            variant="outlined"
                        />
                        <Stack sx={{mt: 1}} spacing={2} direction="row">

                            <Button variant="contained" endIcon={<SendIcon/>} type="submit">Send message</Button>
                        </Stack>

                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};
