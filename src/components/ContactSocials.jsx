import React from 'react';
import SocialButton from './SocialButton';
import {ReactComponent as EmailIcon} from '../assets/email.svg';
import {ReactComponent as GithubIcon} from '../assets/github.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../assets/twitter.svg';


export default function ContactSocials() {
    return (
        <div className="mt-16 font-display text-xl flex">
            <SocialButton
                title="Email"
                link="mailto:tmanku.dev@gmail.com"
                asset={EmailIcon}
            />
            <SocialButton
                title="LinkedIn"
                link="https://www.linkedin.com/in/tanish-manku-119aa216b/"
                asset={LinkedInIcon}
            />
            <SocialButton
                title="GitHub"
                link="https://www.github.com/tanish2k09/"
                asset={GithubIcon}
            />
            <SocialButton
                title="Twitter"
                link="https://www.twitter.com/tanish2k09"
                asset={TwitterIcon}
            />
        </div>
    )
};
