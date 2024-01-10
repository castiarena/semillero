import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react'
import { colors } from './colors'

const { Button, Input, Badge, Avatar, Card } = chakraTheme.components
export const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Badge,
    Avatar,
    Card,
  },
  colors,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      },
    },
  },
})
