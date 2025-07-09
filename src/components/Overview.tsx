import React from "react";

interface OverviewProps {
    title: string;
    introText: string;
}


const Overview: React.FC<OverviewProps> = ({title, introText}) => {
    return (
        <section>
            <img className="photo cv" src="/photo_cv.png" alt="photo cv"/>
            <p><em>{title}</em></p>
            <p>{introText}</p>
        </section>
    );
};
export default Overview;