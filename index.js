class JSXDemo extends React.component {
  render(){
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://s.yimg.com/ny/api/res/1.2/hGbF5fZXXz3fZqXUFqwPhA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/good_housekeeping_561/f7805168db9601f2436ded62d7b55656" />
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));