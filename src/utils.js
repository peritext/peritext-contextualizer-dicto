import {get} from 'axios';

export const getDataset = (props, self, key) => {
    return self.context && 
           self.context.datasets && 
           self.context.datasets[props.resource.data[key]]
  }


export const updateData = (props, self) => {
  const dataset = getDataset(props, self, 'presentationDataset');
  const thumbnail = getDataset(props, self, 'thumbnailDataset');
  if (thumbnail && thumbnail.uri) {
    self.setState({
      thumbnailUri: thumbnail.uri
    });
  }
  if (dataset === undefined) {
    return;
  }
  if (dataset.rawData) {
    self.setState({
      loading: false,
      data: dataset.rawData,
      error: undefined,
    })
  } else if (dataset.uri) {
    self.setState({
      loading: true,
      error: undefined,
    });
    get(dataset.uri)
    .then((response) => {
      self.setState({
        data: response.data,
        loading: false,
      })
    })
    .catch((error) => {
      self.setState({
        error
      })
    });
  } else {
    self.setState({
      error: 'no-dataset'
    })
  }
}