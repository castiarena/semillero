import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ChakraBaseProvider, GlobalStyle } from '@chakra-ui/react'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
