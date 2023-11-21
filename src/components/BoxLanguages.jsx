import React from 'react'
import { Language } from './Language'
import { Stack } from '@mui/material'
import { SwapHoriz } from '@mui/icons-material'
import quechua from '/src/assets/image 2.png'
import spanish from '/src/assets/spain.png'

export const BoxLanguages = () => {
    return (
        <Stack sx={{
            flexDirection: 'row',
            borderRadius: '50px',
            background: 'linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
            linearGradient: '(0deg, #F6F6F6, #F6F6F6)',
            boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            width: '100%',
            minWidth: '300px',
            maxWidth: '705px', height: '47px', color: 'black', justifyContent: 'space-evenly', alignItems: 'center',

        }}>
            <Language icon={<img src={quechua} />} text={'Quechua'} />
            <SwapHoriz />
            <Language icon={<img src={spanish} />} text={'Español'} />
        </Stack>
    )
}
