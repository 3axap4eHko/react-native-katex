# React Native [<img src="https://katex.org/img/katex-logo-black.svg" width="130" alt="KaTeX">](https://katex.org/)

[react-native-webview](https://github.com/react-native-community/react-native-webview) bundled with [KaTeX](https://github.com/Khan/KaTeX)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Github CI Status][github-image]][github-url]
[![Travis CI Status][travis-image]][travis-url]

## Usage
```javascript
import { StyleSheet } from 'react-native';
import Katex from 'react-native-katex';

const styles = StyleSheet.create({
  katex: {
    flex: 1,
  }
});

const inlineStyle =`
html, body {
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;

<Katex
  expression="c=\pm\sqrt{a^2 + b^2}"
  style={styles.katex}
  inlineStyle={inlineStyle}
  displayMode={false}
  throwOnError={false}
  errorColor="#f00"
  macros={{}}
  colorIsTextColor={false}
  onLoad={()=> this.setState({ loaded: true })}
  onError={() => console.error('Error')}
/>
```

<p align="center">
  <img src="https://raw.githubusercontent.com/3axap4eHko/react-native-katex/master/screenshot.png" width="380" alt="React Native KaTeX">
</p>

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2017-2020 Ivan Zakharchanka

[downloads-image]: https://img.shields.io/npm/dm/react-native-katex.svg
[npm-url]: https://www.npmjs.com/package/react-native-katex
[npm-image]: https://img.shields.io/npm/v/react-native-katex.svg

[github-url]: https://github.com/3axap4eHko/react-native-katex/actions
[github-image]: https://github.com/3axap4eHko/evnty/workflows/Github%20CI/badge.svg?branch=master

[travis-url]: https://travis-ci.org/3axap4eHko/react-native-katex
[travis-image]: https://img.shields.io/travis/3axap4eHko/react-native-katex/master.svg
