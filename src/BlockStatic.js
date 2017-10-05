import React from 'react';
import ReactMarkdown from 'react-markdown';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}


export default ({
  resource,
  contextualizer,
  contextualization
}) => {

  return (<figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-dicto">
    {
      resource.data.thumbnail ?
      <img className="resource-thumbnail"
        src={resource.data.thumbnail}
      /> : 
        <div className="thumbnail-placeholder" />
    }
    {
      contextualizer.displayCommentsInCodex &&
      resource.data &&
      resource.data.data.map((block, index) => {
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
  </figure>);
}