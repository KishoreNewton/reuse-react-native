/**
 * Copyright (c) Pion Global Pvt. Ltd. and its affiliates.
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import React from 'react';
import { SafeArea } from './src/utility/safe-area.component';
import Signin from './src/screens/auth/signin/signin.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Signin />
        </SafeArea>
      </ThemeProvider>
    </>
  );
};

export default App;
