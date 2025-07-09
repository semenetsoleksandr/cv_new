export interface Job {
    id: number;
    company: string;
    role: string;
    period: string;      // e.g. "Jan 2020 – Present"
    description: string; // short bullet or paragraph
}

export interface WorkHistoryProps {
    jobs: Job[];
}