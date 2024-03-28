import React from "react";
import "../totalcss/Input.css"
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          value={this.props.value}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          ref={this.props.forwardedRef}
        />
      </form>
    );
  }
}

const ForwardedInput = React.forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));

export default ForwardedInput;