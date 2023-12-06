import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Comment } from 'react-loader-spinner'
import { BarLoader } from 'react-spinners'

export const Spinner = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}
            sx={{
                zIndex: 1000,
                position: 'absolute',
                width: '100%',
                height: '100vh',
                top: 0,
                left: 0,
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
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="rgba(211, 119, 75, 1)"
                />
                <Typography variant='h6'>Cargando...</Typography>
            </Stack>
        </Stack>
    )
}