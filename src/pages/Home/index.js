import React from 'react';
import NotesCtnr  from '../../containers/Notes';

export default class Home extends React.Component {
  render() {
    return (
      <NotesCtnr>
        {({notes})=>{
          return <h1>Home</h1>;
        }}
      </NotesCtnr>
    );
  }
}
