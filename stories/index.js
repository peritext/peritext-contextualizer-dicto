import React from 'react';

import BlockDynamic from '../src/BlockDynamic';

import { storiesOf } from '@storybook/react';

import example from './vectors-une-analyse'

import dictoStylesheet from 'dicto-player/dist/main.css';

storiesOf('contextualizer dicto', module)
  .add('default', () => {
    const resource = {
      metadata: {
        title: 'le grain de la reproduction',
      },
      data: example
    };
    return (
    <div style={{background: 'black'}}>
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '10%',
          width: '80%',
          height: '80%',
        }}
      >
        <BlockDynamic 
          resource={resource}
        />
      </div>
    </div>)
  })
  .add('full screen', () => {
    const resource = {
      metadata: {
        title: 'le grain de la reproduction',
      },
      data: example
    };
    return (
    <div style={{background: 'black'}}>
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '10%',
          width: '80%',
          height: '80%',
        }}
      >
        <BlockDynamic 
          resource={resource}
          contextualizer={{
            displayMode: 'fullscreen'
          }}
        />
      </div>
    </div>)
  })
  .add('pecking', () => {
    const resource = {
      metadata: {
        title: 'le grain de la reproduction',
      },
      data: example
    };
    return (
    <div style={{background: 'black'}}>
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '10%',
          width: '80%',
          height: '80%',
        }}
      >
        <BlockDynamic 
          resource={resource}
          contextualizer={{
            displayMode: 'pecking'
          }}
        />
      </div>
    </div>)
  })