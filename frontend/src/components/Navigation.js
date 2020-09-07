import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import BarChartIcon from '@material-ui/icons/BarChart';
import { MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function ListRouter() {

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div>
          <List aria-label="main navigation links">
            <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
            <ListItemLink to="/about" primary="About" icon={<InfoIcon />} />
            <ListItemLink to="/data" primary="Predict" icon={<SendIcon />} />
            <ListItemLink to="/analysis" primary="Analysis" icon={<BarChartIcon />} />
          </List>
      </div>
    </MemoryRouter>
  );
}