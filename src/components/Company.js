import React from 'react';
import { Menu } from 'semantic-ui-react';

const Company = (props) => {
  return(
    <Menu.Item link > { props.name } </Menu.Item>
  );
}

export default Company;