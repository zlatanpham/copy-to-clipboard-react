# copy-to-clipboard-react

> React component helps ease the work of copying to clipboard using render prop.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @uxui/copy-to-clipboard-react
```

## Render Prop Usage

It uses `render prop`, you render whatever you want to based on the state of `CopyToClipboard`.

```jsx
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

Live demo can be found [here](https://codesandbox.io/s/lrpwj3rj29).

### Children Function

- `copy: (content: string) => void`: copy any thing passed to param `content` to clipboard.
- `copied: boolean`: a state will get truthy after `copy()` gets called.
- `turnOffCopied: () => void`: simply set `copied` to `false`.

### Props

- `callback: (content?: string) => void`: callback after `copy()` get called.

## Hook Usage

Hook is supported as React 16.8.x came out.

```jsx
import React from 'react';
import './App.css';

import { useCopyToClipboard } from '@uxui/copy-to-clipboard-react';

const YourFunctionalComponent = () => {
  const { copied, copy, turnOffCopied } = useCopyToClipboard();

  return (
    // JSX goes here
  );
};

```

## License

MIT © [zlatanpham](https://github.com/zlatanpham)
