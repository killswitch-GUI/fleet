import { PropTypes } from 'react';

export default PropTypes.shape({
  columns: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
  description: PropTypes.string,
  name: PropTypes.string,
  platform: PropTypes.string,
});
