# copy-to-clipboard-react

> React component help ease the work of copying to clipboard using render prop

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @uxui/copy-to-clipboard-react
```

## Usage

```tsx
import * as React from 'react';
import CopyToClipboard from 'copy-to-clipboard-react';

class CopyToClipboard extends React.Component {
  render() {
    return (
      <CopyToClipboard>
        {({ copied, copy, turnOffCopied }) => (
          // JSX goes here
        )}
      </CopyToClipboard>
    );
  }
}
```

## Props

## License

MIT © [zlatanpham](https://github.com/zlatanpham)
