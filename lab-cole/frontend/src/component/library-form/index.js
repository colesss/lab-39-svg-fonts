import React from 'react';

const emptyState = {
  title: '',
  author: '',
  seriesName: '',
  seriesPosition: 0,
  possess: false,
}

class LibraryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    this.props.libraryActions.addBook({
      title: 'Assassin\'s Apprentice',
      author: 'Robin Hobb',
      seriesName: 'The Farseer',
      seriesPosition: 1,
      possess: true,
    });
    
      this.props.libraryActions.addBook({
        title: 'Queen of the Darkness',
        author: 'Anne Bishop',
        seriesName: 'The Black Jewel Trilogy',
        seriesPosition: 3,
        possess: true,
    });
  }

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.libraryActions.addBook(this.state);
    this.setState(emptyState)
  };

  render(){
    return(
      <form 
        className='library-form' 
        onSubmit={this.handleSubmit} >

        <input
          name='Title'
          placeholder='Book Title'
          type='text'
          onChange={this.handleChange}
          value={this.props.title}
        />

        <input
          name='Author'
          placeholder='Author Name'
          type='text'
          onChange={this.handleChange}
          value={this.props.author}
        />

        <input
          name='Series Name'
          placeholder='The Series Trilogy'
          type='text'
          onChange={this.handleChange}
          value={this.props.seriesName}
        />

        <input
          name='Series Position'
          placeholder='1'
          type='number'
          onChange={this.handleChange}
          value={this.props.seriesPosition}
        />

        <button type='submit'> Add Book to Library </button>

      </form>
    )
  }
}

export default LibraryForm;