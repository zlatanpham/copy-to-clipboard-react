import { Component, useState } from 'react';

const copyToClipboard = (content: string) => {
  const textArea = document.createElement('textarea');
  textArea.style.maxHeight = '0px';
  textArea.style.height = '0px';
  textArea.style.opacity = '0';
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();
  window.document.execCommand('copy');
  document.body.removeChild(textArea);
};

interface CopyToClipboardProps {
  copiedCallback?: (content?: string) => void;
  children: (state: CopyToClipboardState) => JSX.Element;
}
interface CopyToClipboardState {
  copied: boolean;
  copy: (content: string) => void;
  turnOffCopied: () => void;
}

class CopyToClipboard extends Component<
  CopyToClipboardProps,
  CopyToClipboardState
> {
  copy = (content: string) => {
    this.setState(
      {
        copied: true,
      },
      () => {
        copyToClipboard(content);
        typeof this.props.copiedCallback === 'function' &&
          this.props.copiedCallback();
      },
    );
  };

  turnOffCopied = () => {
    this.setState({ copied: false });
  };

  state = {
    copied: false,
    copy: this.copy,
    turnOffCopied: this.turnOffCopied,
  };

  render() {
    if (typeof this.props.children !== 'function') {
      console.error(
        'Children for <CopyToClipboard> must be a function which returns a JSX element!',
      );
      return null;
    }

    return this.props.children(this.state);
  }
}

export default CopyToClipboard;

export function useCopyToClipboard(
  copiedCallback?: (content?: string) => void,
) {
  const [copied, setCopied] = useState(false);

  return {
    copy: (content: string) => {
      setCopied(true);
      copyToClipboard(content);
      typeof copiedCallback === 'function' && copiedCallback(content);
    },
    copied,
    turnOffCopied: () => {
      setCopied(false);
    },
  };
}
