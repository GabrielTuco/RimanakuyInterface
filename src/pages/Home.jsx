import { Logo } from "../assets/Logo"
import { BoxLanguages } from "../components/BoxLanguages"
import { Stack } from '@mui/material'
import { TextBoxTranslate } from "../components/TextBoxTranslate"


export const Home = () => {
    return (
        <Stack sx={{ height: '100%', width: '100%', flexDirection: 'column', alignItems: 'center', }}>
            <Stack sx={{ height: '60px', width: '100%', background: 'rgba(211, 119, 75, 1)', alignItems: 'left', justifyContent: 'center' }}>
                <Logo />
            </Stack>
            <Stack flex={1} p={3} gap={3}>
                <BoxLanguages />
                <TextBoxTranslate />
            </Stack>
        </Stack>

    )
}
