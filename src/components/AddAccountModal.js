import React, { Component } from 'react';
import { Modal, Button, Header, Form } from 'semantic-ui-react';

class CreateCompany extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal size="small" open={this.props.open}>
        <Header content="거래 등록" />
        <Modal.Content>
          <Form>
            <Form.Group>
              <Form.Input label="작업 내용" placeholder="작업 내용" width={6} onChange={this.props.onContentInput} />
              <Form.Input label="재질" placeholder="재질" width={3} onChange={this.props.onTextureInput} />
              <Form.Input label="건 수" placeholder="건 수" width={2} onChange={this.props.onOrdersInput} />
              <Form.Input label="매 수" placeholder="매 수" width={2} onChange={this.props.onCountInput} />
              <Form.Input label="가격" placeholder="가격" width={3} onChange={this.props.onPriceInput} />
            </Form.Group>
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