import React, { Component } from 'react';
import './App.css';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import QueryBuilder from 'react-querybuilder';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      queryData :[],
      jsonQuery : {},
      dialogClose : false,
      fields: [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'age', label: 'Age' },
        { name: 'address', label: 'Address' },
        { name: 'phone', label: 'Phone' },
        { name: 'email', label: 'Email' },
        { name: 'twitter', label: 'Twitter' },
        { name: 'isDev', label: 'Is a Developer?', value: false }
      ]
    };
    this.openModal = this.openModal.bind(this);
    this.logQuery = this.logQuery.bind(this);
    this.sendToApi = this.sendToApi.bind(this);
    
  }

  openModal = () => {
    this.setState({
      modal: true,
      queryData : [],
      dialogClose : false
    });
  }

  closeModel = () => {
    this.setState({
      modal: false,
      jsonQuery : JSON.stringify(this.state.queryData),
      dialogClose : true

    });
   debugger;
    console.log(this.state.jsonQuery)
  }

  logQuery = (query) => {
    this.setState({
      queryData: query.rules,
    });

  }

  sendToApi = () => {
    debugger;
    console.log(this.state.jsonQuery);

  }

  render() {
    const dialogCloseProp = this.state.dialogClose;
    const jsonQueryProps = this.state.jsonQuery;
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            onClick={this.openModal}
          >
            Open Modal
          </a>
          <span>
        {/* {this.state.queryData.map((prop, key) => {
                  return (
                    <span key={key}>
                  <span>{prop.field}</span> :  <span>{prop.value}</span> :  <span>{prop.operator}</span>
                  <br></br>
                      </span>
                  );  
                  })} */}

         
                  {/* <span>{this.state.jsonQuery}</span> */}
          

                  

        </span>
        <button  onClick={this.sendToApi}>Send To API</button>
        { this.state.dialogClose &&
          <span>{this.state.jsonQuery}</span>
        }
                
        </header>



        <Modal isOpen={this.state.modal} toggle={this.closeModel} className={this.props.className}>
          <ModalHeader toggle={this.closeModel}>Query Builder</ModalHeader>
          <ModalBody>
          <QueryBuilder fields={this.state.fields} onQueryChange={this.logQuery} />
        </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.closeModel}>Save Query</Button>
            <Button color="secondary" onClick={this.closeModel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
