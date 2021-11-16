import { render } from "@testing-library/react";
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

    this.state.cooldown = true;
    setTimeout(() =>
      {
        this.setState({cooldown: false});
      },
    1000);

    toggleAppTheme(!this.state.isDark);
    this.setState({isDark: !this.state.isDark});
  }

  render() {
    let image;
    if (this.state.isDark) {
      image = <SunIcon />;
    } else {
      image = <MoonIcon />;
    }

    return (
      <button id="dark_mode_toggle" className="w-8 h-8 block" onClick={this.toggleTheme}>
        {image}
      </button>
    );
  }
}

export default DarkModeToggle;
