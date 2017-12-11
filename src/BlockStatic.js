import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

import {updateData, getDataset} from './utils';


function LinkRenderer(props) {
  return <a href={props.href} target="_blank">{props.children}</a>
}


class BlockStatic extends Component {

  static contextTypes = {
    datasets: PropTypes.object,
  }

  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined
    }
    updateData(props, this);
  }

  componentWillMount() {
    updateData(this.props, this);
  }

  componentWillReceiveProps (nextProps) {
    if (
        this.props.data !== nextProps.data ||
        getDataset(this.props, this) !== getDataset(nextProps, this)
      ) {
      updateData(nextProps, this);
    }
  }

  render () {
    const {
      props: {
        contextualizer
      },
      state: {
        data,
        thumbnail
      }
    } = this;
    return data ? (
    <figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-dicto">
      {
        thumbnail ?
        <img className="resource-thumbnail"
          src={thumbnail}
        /> : 
          <div className="thumbnail-placeholder" />
      }
      {
        contextualizer.displayCommentsInCodex &&
        data.data.map((block, index) => {
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
    </figure>
    ) : null;   
  }
}


export default BlockStatic;