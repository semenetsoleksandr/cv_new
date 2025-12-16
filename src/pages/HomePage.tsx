import type { FC } from 'react';
import {Overview} from '../components/Overview/Overview.tsx';
import '../components/WorkHistory/WorkHistory.css'

export const HomePage: FC = () => {
    return <div>
        <Overview
            title="Trainee Full Stack JavaScript Developer"
            introText="Passionate about building web apps with React, TypeScript, and Express."
        />
    </div>;
};