import React, { Component } from 'react';
import { Account } from '../components';
import { Table, Label, Grid, Header, Button } from 'semantic-ui-react';

import company from '../models/company';

class AccountTable extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { accounts, header } = this.props;

    return(
      <div>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Header as="h1"> { header } </Header>
          </Grid.Column>
          <Grid.Column floated='right' width={3}>
            <Button onClick={this.props.onClickModalOpen} fluid color="green"> 거래 추가 </Button>
          </Grid.Column>
        </Grid>
  
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>날짜</Table.HeaderCell>
              <Table.HeaderCell>작업내용</Table.HeaderCell>
              <Table.HeaderCell>재질</Table.HeaderCell>
              <Table.HeaderCell>건 수</Table.HeaderCell>
              <Table.HeaderCell>매 수</Table.HeaderCell>
              <Table.HeaderCell>가격</Table.HeaderCell>
              <Table.HeaderCell>누계</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            <Account date={new Date("1998-12-21")} content="d" texture="d" orders={1} count={2} price={3000} sum={3000}/>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default AccountTable;