import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}


const BlockStatic = ({
  resource,
  contextualizer,
  contextualization
}, {
  datasets = {}
}) => {

  const presentationData = resource.data && resource.data.presentationData;
  const thumbnail = datasets[resource.data.thumbnailDataset];
  return presentationData ? (<figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-dicto">
    {
      thumbnail ?
      <img className="resource-thumbnail"
        src={thumbnail.uri}
      /> : 
        <div className="thumbnail-placeholder" />
    }
    {
      contextualizer.displayCommentsInCodex &&
      presentationData.data.map((block, index) => {
        const content = block.content;
        return (
          <blockquote key={index} key={index}>
            <ReactMarkdown 
              source={content} 
              renderers={{Link: LinkRenderer}}
            />
          </blockquote>
        )
      })
    }
  </figure>) : null;
};

BlockStatic.propTypes = {
  resource: PropTypes.object,
  contextualizer: PropTypes.object,
  contextualization: PropTypes.object,
};

BlockStatic.contextTypes = {
  datasets: PropTypes.object,
}


export default BlockStatic;