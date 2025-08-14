import React, {type ChangeEvent, type FormEvent, useState} from "react";
import type {ISendMessageRequestBody} from "../types/messages.ts";
import {cvApi} from "../services/cv-api";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ISendMessageRequestBody>({
        username: "",
        email: "",
        message: "",
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
            alert("Your message has been sent!");
            setFormData({username: "", email: "", message: ""});
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
        <section>
            <form className="contact" onSubmit={handleSubmit}>
                <h1>ContactForm</h1>
                <div className="input-box">
                    <label>Your Name</label>
                    <input type="text" className="field" name="username" value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                    <label>Your Email</label>
                    <input type="email" className="field" name="email" value={formData.email} onChange={handleChange}
                        placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                    <label>Your message</label>
                    <textarea className="field mes" name="message" value={formData.message} onChange={handleChange}
                        placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}

export default ContactForm;