import React from 'react';
import {connect} from 'react-redux';

import * as books from '../../action/library.js';

import LibraryForm from '../library-form';
import LibraryList from '../library-list';

class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <h1> Cole's Library </h1>
        <LibraryForm libraryActions={this.props.libraryActions}/>
        <br/>
        <LibraryList books={this.props.state} libraryActions={this.props.libraryActions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  libraryActions: {
    addBook: book => dispatch(books.create(book)),
    deleteBook: book => dispatch(books.destroy(book)),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);