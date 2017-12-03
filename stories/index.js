import React from 'react';

const datasetFileName = 'vectors-une-analyse.json';
const rawData = require(`../example_datasets/${datasetFileName}`);

import { storiesOf } from '@storybook/react';

import Static from './StaticContextualizationContainer';
import Dynamic from './DynamicContextualizationContainer';
import 'dicto-player/dist/main.css';

const resource = {
  metadata: {
    title: 'coucou',
  },
  data: {
    presentationDataset: 'test'
 }
};
const datasets = {
  test: {
    rawData,
    format: 'json',
    method: 'raw'
  }
}

const contextualizer = {
  displayCommentsInCodex: true
}

storiesOf('Dynamic block contextualization', module)
  .add('Basic (raw data)', () => (
    <Dynamic
      resource={resource}
      datasets={datasets}
    />
  ))
  .add('Basic (dataset uri)', () => (
    <Dynamic
      resource={resource}
      datasets={{
        ...datasets,
        test: {
          method: 'get',
          format: 'csv',
          uri: `/${datasetFileName}`
        }
      }}
    />
  ))

storiesOf('Static block contextualization', module)
  .add('Basic (raw data)', () => (
    <Static
      resource={resource}
      datasets={datasets}
      contextualizer={contextualizer}
    />
  ))
  .add('Basic (dataset uri)', () => (
    <Static
      resource={resource}
      datasets={{
        ...datasets,
        test: {
          method: 'get',
          format: 'csv',
          uri: `/${datasetFileName}`
        }
      }}
      contextualizer={contextualizer}
    />
  ))

// import React from 'react';

// import BlockDynamic from '../src/BlockDynamic';

// import { storiesOf } from '@storybook/react';

// import example from './vectors-une-analyse'

// import dictoStylesheet from 'dicto-player/dist/main.css';

// storiesOf('contextualizer dicto', module)
//   .add('default', () => {
//     const resource = {
//       metadata: {
//         title: 'le grain de la reproduction',
//       },
//       data: example
//     };
//     return (
//     <div style={{background: 'black'}}>
//       <div
//         style={{
//           position: 'absolute',
//           left: '10%',
//           top: '10%',
//           width: '80%',
//           height: '80%',
//         }}
//       >
//         <BlockDynamic 
//           resource={resource}
//         />
//       </div>
//     </div>)
//   })
//   .add('full screen', () => {
//     const resource = {
//       metadata: {
//         title: 'le grain de la reproduction',
//       },
//       data: example
//     };
//     return (
//     <div style={{background: 'black'}}>
//       <div
//         style={{
//           position: 'absolute',
//           left: '10%',
//           top: '10%',
//           width: '80%',
//           height: '80%',
//         }}
//       >
//         <BlockDynamic 
//           resource={resource}
//           contextualizer={{
//             displayMode: 'fullscreen'
//           }}
//         />
//       </div>
//     </div>)
//   })
//   .add('pecking', () => {
//     const resource = {
//       metadata: {
//         title: 'le grain de la reproduction',
//       },
//       data: example
//     };
//     return (
//     <div style={{background: 'black'}}>
//       <div
//         style={{
//           position: 'absolute',
//           left: '10%',
//           top: '10%',
//           width: '80%',
//           height: '80%',
//         }}
//       >
//         <BlockDynamic 
//           resource={resource}
//           contextualizer={{
//             displayMode: 'pecking'
//           }}
//         />
//       </div>
//     </div>)
//   })