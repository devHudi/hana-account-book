import React, { Component } from 'react';
import { AccountTable, AddAccountModal } from '../components';

class AccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalContent: "",
      modalTexture: "",
      modalOrders: "",
      modalCount: "",
      modalPrice: "",
      header: "거래처 샘플",
      accounts: [
        { date: new Date("1992-03-25") }
      ]
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
    this.handleTextureInput = this.handleTextureInput.bind(this);
    this.handleOrdersInput = this.handleOrdersInput.bind(this);
    this.handleCountInput = this.handleCountInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
  }

  handleModalOpen() {
    this.setState({
      modal: true
    });
  }

  handleModalClose() {
    this.setState({
      modal: false,
      modalContent: "",
      modalTexture: "",
      modalOrders: "",
      modalCount: "",
      modalPrice: ""
    });
  }

  handleContentInput(e) {
    this.setState({
      modalContent: e.target.value
    });
  }

  handleTextureInput(e) {
    this.setState({
      modalTexture: e.target.value
    });
  }

  handleOrdersInput(e) {
    this.setState({
      modalOrders: e.target.value
    });
  }

  handleCountInput(e) {
    this.setState({
      modalCount: e.target.value
    });
  }

  handlePriceInput(e) {
    this.setState({
      modalPrice: e.target.value
    });
  }

  render() {
    return(
      <div>
        <AddAccountModal
          open={this.state.modal}
          onClose={this.handleModalClose}
          onContentInput={this.handleContentInput}
          onTextureInput={this.handleTextureInput}
          onOrdersInput={this.handleOrdersInput}
          onCountInput={this.handleCountInput}
          onPriceInput={this.handlePriceInput}
        />
        <AccountTable onClickModalOpen={this.handleModalOpen} header={this.state.header} />
      </div>
    );
  }
}

export default AccountContainer;