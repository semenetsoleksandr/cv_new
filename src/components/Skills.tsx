import {type FC, useEffect, useState} from "react";
import type {ISkill} from "../types/skills.ts";

export const Skills: FC = () => {
    const [skills, setSkills] = useState<ISkill[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const res = await fetch("http://localhost:8080/skills");
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
        <section>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>{skill.skill}</li>
                ))}
            </ul>

        </section>
    );
};