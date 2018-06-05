import React, { Component } from 'react';
import { SidebarContainer, AccountContainer } from './containers';
import { Container, Grid } from 'semantic-ui-react';
import company from './models/company';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 0,
      companyName: ""
    }
  }

  updateCompany() {

  }

  componentDidMount() {
    company.createCompany("abc");
    console.log(company.getCompanies());
  }

  render() {
    return(
      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <SidebarContainer activeId={this.state.activeId} />
            </Grid.Column>
            <Grid.Column width={12}>
              <AccountContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;