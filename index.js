class JSXDemo extends React.component {
  render(){
    return (
      <img src="https://images.unsplash.com/photo-1565252503738-0d47de5d50e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));