# React Native <img src="https://khan.github.io/KaTeX/katex-logo.svg" width="130" alt="KaTeX">

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
  onLoad={()=> this.setState({ loaded: true })}
  onError={() => console.error('Error')}
/>
```

<p align="center">
  <img src="https://raw.githubusercontent.com/3axap4eHko/react-native-katex/master/screenshot.png" width="380" alt="React Native KaTeX">
</p>

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2017 Ivan Zakharchanka