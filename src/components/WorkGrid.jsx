import React from 'react';
import StackGrid from 'react-stack-grid';

export default class WorkGrid extends React.Component {
  render() {
    return (
      <StackGrid>
        <div>
          Div 1
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div>
        <div>
          Div 4
        </div>
      </StackGrid>
    );
  }
}
