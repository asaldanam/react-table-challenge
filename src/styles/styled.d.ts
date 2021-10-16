// import original module declaration
import 'styled-components';
import { CustomTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<DefaultTheme>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<DefaultTheme>;
    }
  }
}
