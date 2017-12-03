import React, {Component} from 'react';
import PropTypes from 'prop-types';
const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

const DictoPlayer = inBrowser ? require('dicto-player') : null;

import {updateData, getDataset} from './utils';

class BlockDynamic extends Component {

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
        data = {},
        error,
        loading = false
      }
    } = this;

    if (inBrowser && !loading) {
      return (
        <figure 
          className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-dicto"
          >
          <DictoPlayer 
            composition={data}
            settings={{
              displayMode: (contextualizer && contextualizer.displayMode) || 'columns',
              allowEmbed: false,
            }}
          />
        </figure>
      );
    }
    return null;
  }
}
export default BlockDynamic;