import React from 'react';
const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

const DictoPlayer = inBrowser ? require('dicto-player') : null;

export default ({
  resource = {},
  contextualizer = {
  },
  // onExit,
}) => {
  if (inBrowser) {
    return (
      <figure 
        className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-dicto"
        >
        <DictoPlayer 
          composition={resource.presentationData}
          settings={{
            displayMode: contextualizer.displayMode || 'columns',
            allowEmbed: false,
          }}
        />
      </figure>
    );
  }
  return null;
};