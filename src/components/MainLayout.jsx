import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { getBlob } from './BlobOverlay';
import { unFadeNav } from '../scripts/nav-fade';

export default class MainLayout extends Component {

  constructor(props) {
    super(props);

    this.pages = [
      "onboard",
      "work_page"
    ];

    this.state = {
      shownPageIdx: 0
    }

    this.blob = getBlob();
  }

  getPageClass(index) {
    return (index == this.state.shownPageIdx) ? "fader" : "fader faded";
  }

  onLeave(origin, destination, direction) {
    this.setState({ shownPageIdx: destination.index })
  }

  afterLoad(origin, destination, direction) {
    unFadeNav();
  }

  afterResize(width, height) {
    unFadeNav();
  }

  render() {
    const fullPageSection = "fp_section";
    const fullPageClass = `.${fullPageSection}`;

    return (
      <ReactFullpage
        recordHistory={false}
        anchors={this.pages}
        sectionSelector={fullPageClass}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        afterResize={this.afterResize.bind(this)}
        fitToSectionDelay={200}
        scrollBar={true}
        fitToSection={false}

        render={comp => {
          return (
            <ReactFullpage.Wrapper>

            </ReactFullpage.Wrapper>
          )
        }}
      />
    )
  }
}