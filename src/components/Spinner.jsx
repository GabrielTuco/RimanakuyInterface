import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { BarLoader } from 'react-spinners'

export const Spinner = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}
            sx={{
                zIndex: 1000,
                position: 'absolute',
                width: '100%',
                height: '100vh',
                top: 0
            }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    background: 'rgba(91, 91, 91, 0.46)',

                    gap: 10,
                }}>
            </Box>
            <Stack sx={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <BarLoader
                    color="rgba(211, 119, 75, 1)"
                    loading={true}
                    height={8}
                    width={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    cssOverride={{
                        display: "block",
                    }}
                />
                <Typography variant='h6'>Cargando...</Typography>
            </Stack>
        </Stack>
    )
}