import React from "react";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import toggleAppTheme from "../scripts/AppThemeToggle";

class DarkModeToggle extends React.Component {

  constructor() {
    super();
    this.toggleTheme = this.toggleTheme.bind(this);

    this.isPrefDark = (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
    
    this.state = {
      isDark: this.isPrefDark,
      cooldown: false};

    toggleAppTheme(this.isPrefDark);
  }

  toggleTheme() {
    if (this.state.cooldown) {
      return;
    }

    this.setState({cooldown: true});
    setTimeout(() =>
      {
        this.setState({cooldown: false});
      },
    1000);

    toggleAppTheme(!this.state.isDark);
    localStorage.setItem('theme', this.state.isDark ? 'light' : 'dark');
    this.setState({isDark: !this.state.isDark});
  }

  render() {
    let commonClasses = "p-0 float-right"

    let image;
    if (this.state.isDark) {
      image = <SunIcon className={commonClasses}/>;
    } else {
      image = <MoonIcon className={commonClasses}/>;
    }

    return (
      <div className="md:w-full md:h-12 md:flex md:float-right md:relative">
        <button id="dark_mode_toggle" onClick={this.toggleTheme} title="Theme toggle">
          <div className="md:right-5 md:absolute min:relative min:mt-6 md:mt-0 min:px-2 md:px-0">
          {image}
          </div>
        </button>
      </div>
    );
  }
}

export default DarkModeToggle;
