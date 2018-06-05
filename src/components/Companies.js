import React, { Component } from 'react';
import { Company } from '../components';
import { Menu, Button, Icon } from 'semantic-ui-react';

class Companies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { companies } = this.props;

    return(
      <div className="Companies">

        <Menu fluid vertical>
          <Menu.Item header> 거래처 목록 </Menu.Item>
          {
            companies.map((item, i) => {
              if (i == 0) return (<Company name={item} key={i}/>);
              else return (<Company name={item} key={i}/>);
            })
          }
        </Menu>
        <Button onClick={this.props.onClickModalOpen} color="blue" animated="fade" fluid>
          <Button.Content visible> 거래처 추가하기 </Button.Content>
          <Button.Content hidden>
            +
          </Button.Content>
        </Button>
      </div>
    );
  }
  
}

export default Companies;