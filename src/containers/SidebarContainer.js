import React, { Component } from 'react';
import { Companies, CreateCompanyModal } from '../components';

class SidebarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalInput: "",
      companies: ["샘플"]
    }

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalInput = this.handleModalInput.bind(this);
  }

  handleModalOpen() {
    this.setState({
      modal: true
    });
  }

  handleModalClose() {
    this.setState({
      modal: false,
      modalInput: ""
    });
  }

  handleModalInput(e) {
    this.setState({
      modalInput: e.target.value
    });
  }

  render() {
    return(
      <div>
        <CreateCompanyModal
          onClose={this.handleModalClose}
          onInput={this.handleModalInput}
          open={this.state.modal}
        />

        <Companies
          onClickModalOpen={this.handleModalOpen}
          companies={this.state.companies}
        />
      </div>
    );
  }
}

export default SidebarContainer;