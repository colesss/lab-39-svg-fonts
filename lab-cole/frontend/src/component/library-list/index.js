import React from 'react';
import LibraryBook from '../library-book';

class LibraryList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {Object.keys(this.props.books).map((book,i) =>
          <LibraryBook 
            key={i} 
            data={this.props.books[book]}
            libraryActions={this.props.libraryActions}
          />
        )}
      </div>
    )
  }
};

export default LibraryList;