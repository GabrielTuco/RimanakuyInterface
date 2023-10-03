import React from 'react'
import { Stack, Typography } from '@mui/material'

export const Language = ({ text, icon }) => {
    return (
        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
            {icon}
            <Typography fontWeight={'medium'}>{text}</Typography>
        </Stack>
    )
}
