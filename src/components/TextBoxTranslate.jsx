import { Check, ContentCopy } from '@mui/icons-material'
import { Button, Divider, IconButton, Stack, TextField, Tooltip, Typography, colors, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import { translate } from '../services/model.service'
import { Spinner } from './Spinner'
import { useTheme } from '@emotion/react'

export const TextBoxTranslate = () => {
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [loading, setLoading] = useState(false)
    const [enlaceCopiado, setEnlaceCopiado] = useState(false);


    const enlaceRef = useRef(null);

    const copiarAlPortapapeles = () => {
        enlaceRef.current.select();
        document.execCommand('copy');
        enlaceRef.current.blur();
        setEnlaceCopiado(true);
        setTimeout(() => {
            setEnlaceCopiado(false);
        }, 1000);
    };

    const onTranslate = () => {
        setLoading(true)
        if (text1 != '') {
            translate(text1).then((r) => {
                setText2(r.tgt)
                setLoading(false)
            })
        }
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Stack sx={{
            flexDirection: 'row',
            borderRadius: '16px',
            background: 'linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
            linearGradient: '(0deg, #F6F6F6, #F6F6F6)',
            boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            width: '705px', height: '353px', color: 'black', justifyContent: 'space-evenly', alignItems: 'center',
            p: 2,
            boxSizing: 'border-box',
            gap: 2,

        }}>
            {
                loading && <Spinner />
            }
            {
                matches &&
                <>
                    <Stack flex={1} height={'100%'} justifyContent={'flex-start'} >
                        <Typography sx={{ fontWeight: 'medium', color: 'rgba(112, 34, 44, 1)' }}>Quechua</Typography>
                        <TextField
                            value={text1}
                            onChange={(e) => { setText1(e.target.value) }}
                            rows={11}
                            placeholder='Escribe algo'
                            InputProps={{
                                style: {
                                    padding: 0,
                                    paddingTop: 15,

                                },
                            }}
                            sx={{
                                flex: 1,
                                p: 0,

                                "& fieldset": {
                                    border: 'none',
                                    p: 0
                                },
                            }}
                            multiline
                        />
                        <Button onClick={onTranslate} variant='contained' sx={{ fontWeight: 'normal', fontSize: 14, alignSelf: 'flex-start', borderRadius: 100 }} >Tikray</Button>
                    </Stack>
                    <Divider orientation='vertical' sx={{ background: 'white' }} />
                    <Stack flex={1} height={'100%'} justifyContent={'flex-start'}>
                        <Typography sx={{ fontWeight: 'medium', color: 'rgba(112, 34, 44, 1)' }}>Español</Typography>
                        <TextField
                            inputRef={enlaceRef}
                            value={text2}
                            rows={11}
                            InputProps={{
                                readOnly: true,
                                style: {
                                    padding: 0,
                                    paddingTop: 15,

                                },
                            }}
                            sx={{
                                flex: 1,
                                p: 0,

                                "& fieldset": {
                                    border: 'none',
                                    p: 0
                                },
                            }}
                            multiline
                        />
                        <Stack alignSelf={'flex-end'}>
                            <Tooltip title={enlaceCopiado ? '¡Texto Copiado!' : ''}>
                                <IconButton onClick={copiarAlPortapapeles}>
                                    {
                                        enlaceCopiado ?
                                            <Check sx={{ height: 20, width: 20 }} /> :
                                            <ContentCopy color='primary' />
                                    }

                                </IconButton>
                            </Tooltip>
                        </Stack>

                    </Stack>
                </>
            }
        </Stack >
    )
}
