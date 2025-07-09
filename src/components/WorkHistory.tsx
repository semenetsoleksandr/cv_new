import type {FC} from "react";
import type {WorkHistoryProps} from "../types/job.ts";

export const WorkHistory: FC<WorkHistoryProps> = ({jobs}) => {
    return (
        <section>
            <h2>Work History</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.company}</h3>
                        <p><strong>{job.role}</strong> ({job.period})</p>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};