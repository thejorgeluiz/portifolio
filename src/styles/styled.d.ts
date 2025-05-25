// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string;
    corSecundario: string;
    corDeFundo: string;
    corDeFundoBotao: string;
    corDaBorda: string;
  }
}
