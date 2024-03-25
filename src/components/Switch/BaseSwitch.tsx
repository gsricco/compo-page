import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

export const BaseSwitch = styled((props: SwitchProps) => (
  <Switch disableRipple focusVisibleClassName={'.Mui-focusVisible'} {...props} />
))(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: '#1551E5',
        border: 0,
        opacity: 1,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
      color: '#fff',
      transform: 'translateX(16px)',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      border: '6px solid #fff',
      color: '#1551E5',
    },
    margin: 2,
    padding: 0,
    transitionDuration: '300ms',
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    height: 22,
    width: 22,
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    borderRadius: 26 / 2,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },

  height: 26,
  padding: 0,
  width: 42,
}))
