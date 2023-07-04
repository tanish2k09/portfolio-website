import React from 'react';
import SocialButton from './SocialButton';
import {ReactComponent as EmailIcon} from '../assets/email.svg';
import {ReactComponent as GithubIcon} from '../assets/github.svg';
import {ReactComponent as LinkedInIcon} from '../assets/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../assets/twitter.svg';

export const styles = {
    defaultColors: "fill-contactlight dark:fill-contactdark",
    defaultTextColors: "text-contactlight dark:text-contactdark",
    defaultActiveLogoColors: 'group-hover:fill-dark',
    defaultActiveTextColors: 'group-hover:text-dark',
    topColors: "fill-semidark dark:fill-secondary",
    topTextColors: "text-textdark dark:text-secondary",
    topActiveLogoColors: `group-hover:fill-dark dark:group-hover:fill-accent`,
    topActiveTextColors: `group-hover:text-dark dark:group-hover:text-accent`,
};

export default function ContactSocials(props) {

    var colors = styles.defaultColors;
    var textColors = styles.defaultTextColors;
    var activeColors = styles.defaultActiveTextColors;
    var activeLogoColors = styles.defaultActiveLogoColors;

    if (props.colors) {
        colors = props.colors;
    }

    if (props.textColors) {
        textColors = props.textColors;
    }

    if (props.activeColors) {
        activeColors = props.activeColors;
    }

    if (props.activeLogoColors) {
        activeLogoColors = props.activeLogoColors;
    }

    return (
        <div className="md:mb-4 md:flex">
            <SocialButton
                title="Email - tmanku.dev@gmail.com"
                link="mailto:tmanku.dev@gmail.com"
                asset={EmailIcon}
                colors={colors}
                textColors={textColors}
                activeColors={activeColors}
                activeLogoColors={activeLogoColors}
            />
            <SocialButton
                title="LinkedIn - Tanish Manku"
                link="https://www.linkedin.com/in/tmanku/"
                asset={LinkedInIcon}
                colors={colors}
                textColors={textColors}
                activeColors={activeColors}
                activeLogoColors={activeLogoColors}
            />
            <SocialButton
                title="GitHub - tanish2k09"
                link="https://www.github.com/tanish2k09/"
                asset={GithubIcon}
                colors={colors}
                textColors={textColors}
                activeColors={activeColors}
                activeLogoColors={activeLogoColors}
            />
            <SocialButton
                title="Twitter - @tanish2k09"
                link="https://www.twitter.com/tanish2k09"
                asset={TwitterIcon}
                colors={colors}
                textColors={textColors}
                activeColors={activeColors}
                activeLogoColors={activeLogoColors}
            />
        </div>
    )
};
