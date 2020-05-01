 import React, { Component } from "react";
 import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Form,
   FormGroup,
   Input,
   Label
 } from "reactstrap";

 export default class CustomModal extends Component {
   constructor(props) {
     super(props);
     this.state = {
       activeItem: this.props.activeItem
     };
   }
   handleChange = e => {
     let { name, value } = e.target;
     if (e.target.type === "checkbox") {
       value = e.target.checked;
     }
     const activeItem = { ...this.state.activeItem, [name]: value };
     this.setState({ activeItem });
   };
   render() {
     const { toggle, onSave } = this.props;
     return (
       <Modal isOpen={true} toggle={toggle}>
         <ModalHeader toggle={toggle}> Country </ModalHeader>
         <ModalBody>
           <Form>
             <FormGroup>
               <Label for="title">Name</Label>
               <Input
                 type="text"
                 name="name"
                 value={this.state.activeItem.name}
                 onChange={this.handleChange}
                 placeholder="Enter Country Name"
               />
             </FormGroup>
             <FormGroup>
               <Label for="description">Description</Label>
               <Input
                 type="text"
                 name="description"
                 value={this.state.activeItem.description}
                 onChange={this.handleChange}
                 placeholder="Enter Country description"
               />
             </FormGroup>
             <FormGroup>
               <Label for="description">Trust Index</Label>
               <Input
                 type="text"
                 name="trust_index"
                 value={this.state.activeItem.trust_index}
                 onChange={this.handleChange}
                 placeholder="Enter Country Trust Index"
               />
             </FormGroup>
           </Form>
         </ModalBody>
         <ModalFooter>
           <Button color="success" onClick={() => onSave(this.state.activeItem)}>
             Save
           </Button>
         </ModalFooter>
       </Modal>
     );
   }
 }