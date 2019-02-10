import React, { Component } from 'react';
import CopyToClipboard, { useCopyToClipboard } from 'copy-to-clipboard-react';

export const HookExample = () => {
  const { copied, copy, turnOffCopied } = useCopyToClipboard();
  const message = 'Some text need to be copied';
  return (
    <div>
      <div>{message}</div>
      {copied ? (
        <span>copied</span>
      ) : (
        <button
          onClick={() => {
            copy(message);
            setTimeout(() => {
              turnOffCopied();
            }, 1000);
          }}
        >
          Copy to clipboard
        </button>
      )}
    </div>
  );
};
class App extends Component {
  state = {
    value: '',
  };
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleInputChange} />
        <CopyToClipboard>
          {({ copied, copy, turnOffCopied }) => (
            <React.Fragment>
              {this.state.value &&
                (copied ? (
                  <span>copied</span>
                ) : (
                  <button
                    onClick={() => {
                      copy(this.state.value);
                      setTimeout(() => {
                        turnOffCopied();
                      }, 2000);
                    }}
                  >
                    Copy to clipboard
                  </button>
                ))}
            </React.Fragment>
          )}
        </CopyToClipboard>
      </div>
    );
  }
}

export default App;
