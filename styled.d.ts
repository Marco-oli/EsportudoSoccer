// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      black_seconday: string;
      purple: string;
      white: string;
      gray: string;
      green: string;
    };
  }
}
