import React, { Component } from 'react';
import { WebView } from 'react-native';

import katexStyle from './katex-style';
import katexScript from './katex-script';
import { bool, func, object, string } from 'prop-types';

function getContent({ inlineStyle, expression = '', ...options }) {
  return `<!DOCTYPE html>
<html>
<head>
<style>
${katexStyle}
${inlineStyle}
</style>
<script>
window.onerror = e => document.write(e);
window.onload = () => katex.render(${JSON.stringify(expression)}, document.body, ${JSON.stringify(options)});
${katexScript}
</script>
</head>
<body>
</body>
</html>
`;
}

export default class Katex extends Component {

  static propTypes = {
    expression: string.isRequired,
    displayMode: bool,
    throwOnError: bool,
    errorColor: string,
    inlineStyle: string,
    macros: object,
    colorIsTextColor: bool,
    onLoad: func,
    onError: func,
  };

  static defaultProps = {
    displayMode: false,
    throwOnError: false,
    errorColor: '#f00',
    inlineStyle: '',
    macros: {},
    colorIsTextColor: false,
    onLoad: () => {},
    onError: () => {},
  };

  render() {
    const { style, onLoad, onError, ...options } = this.props;

    return <WebView
      style={style}
      source={{ html: getContent(options) }}
      onLoad={onLoad}
      onError={onError}
      renderError={onError}
    />;
  }
}
