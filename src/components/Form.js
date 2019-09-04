import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addArticle, removeArticle } from "../redux/actions/index";

const mapDispatchToProps = ( dispatch ) => ( {
    addArticle: article => dispatch( addArticle( article ) ),
    removeArticle: () => dispatch( removeArticle() )
  }
);


class ConnectedForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      title: ""
    };
  }

  handleChange = event => {
    this.setState( { [event.target.id]: event.target.value } );
  };

  handleSubmit = () => {
    const { title } = this.state;
    const id = uuid();
    if (title) this.props.addArticle( { id, title } );
    this.setState( { title: "" } );
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </div>
        <button onClick={ this.handleSubmit }>
          Add Article
        </button>
        <button onClick={ this.props.removeArticle }>
          Remove Last Article
        </button>
      </>
    );
  }
}

const Form = connect( null, mapDispatchToProps )( ConnectedForm );

export default Form;