import React from 'react';
import SocialButton from './SocialButton';
import {ReactComponent as EmailIcon} from '../assets/email.svg';
import {ReactComponent as GithubIcon} from '../assets/github.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../assets/twitter.svg';


export default function ContactSocials() {
    return (
        <div className="md:mb-4 md:flex">
            <SocialButton
                title="Email - tmanku.dev@gmail.com"
                link="mailto:tmanku.dev@gmail.com"
                asset={EmailIcon}
            />
            <SocialButton
                title="LinkedIn - Tanish Manku"
                link="https://www.linkedin.com/in/tmanku/"
                asset={LinkedInIcon}
            />
            <SocialButton
                title="GitHub - tanish2k09"
                link="https://www.github.com/tanish2k09/"
                asset={GithubIcon}
            />
            <SocialButton
                title="Twitter - @tanish2k09"
                link="https://www.twitter.com/tanish2k09"
                asset={TwitterIcon}
            />
        </div>
    )
};
