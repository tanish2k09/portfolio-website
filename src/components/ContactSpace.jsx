import React from 'react';
import LightButton from './LightButton';
import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import TwitterIcon from '../assets/twitter.svg';


export default function ContactSpace() {
    return (
        <div className="mt-16 font-display text-xl inline-block">
            <LightButton
                title="Email"
                link="mailto:tmanku.dev@gmail.com"
                asset={EmailIcon}
            />
            <LightButton
                title="LinkedIn"
                link="https://www.linkedin.com/in/tanish-manku-119aa216b/"
                asset={LinkedInIcon}
            />
            <LightButton
                title="GitHub"
                link="https://www.github.com/tanish2k09/"
                asset={GithubIcon}
            />
            <LightButton
                title="Twitter"
                link="https://www.twitter.com/tanish2k09"
                asset={TwitterIcon}
            />
        </div>
    )
};
