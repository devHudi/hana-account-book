import React from 'react';
import { Table } from 'semantic-ui-react';
import comma from '../lib/comma';

const Account = (props) => {
  const { date, content, texture, orders, count, price, sum } = props;

  return(
    <Table.Row>
      <Table.Cell>{ date.toString() }</Table.Cell>
      <Table.Cell>{ content }</Table.Cell>
      <Table.Cell>{ texture }</Table.Cell>
      <Table.Cell>{ comma(orders) }</Table.Cell>
      <Table.Cell>{ comma(count) }</Table.Cell>
      <Table.Cell>{ comma(price) }</Table.Cell>
      <Table.Cell>{ comma(sum) }</Table.Cell>
    </Table.Row>
  );
}

export default Account;