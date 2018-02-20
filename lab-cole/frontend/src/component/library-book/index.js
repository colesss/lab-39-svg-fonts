import React from 'react';
import * as util from '../../lib/util.js';

class LibraryBook extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {title, author, seriesName, seriesPosition, possess} = this.props.data;

    return(
      <div>
        {util.renderIf(!this.props.data)} 
          <div className='book-item'>
            <span> {title} by {author} </span>
          </div>
      </div>
    )
  }
}

export default LibraryBook;