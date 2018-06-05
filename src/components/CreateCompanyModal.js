import React, { Component } from 'react';
import { Modal, Button, Header, Form } from 'semantic-ui-react';

class CreateCompany extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.onModalInput(e.traget.value);
  }

  handleClose() {
    this.props.onModalClose();
  }

  render() {
    return(
      <Modal size="mini" open={this.props.open}>
        <Header content="새로운 거래처 등록" />
        <Modal.Content>
          <Form>
            <Form.Field>
              <input placeholder="거래처명을 입력해주세요." onChange={this.props.onInput} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.onClose}> 확인 </Button>
        </Modal.Actions>
      </Modal>
    );
  }

}

export default CreateCompany;