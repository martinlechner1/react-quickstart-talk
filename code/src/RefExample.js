class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <input
        type="text"
        ref={input => {
          this.textInput = input;
        }}
      />
    );
  }
}
