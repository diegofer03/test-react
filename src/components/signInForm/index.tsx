import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material'

import { SignInFormComponentProps } from '../../common/types'

export default function SignInFormComponent({handleSubmit, validateInputs,
    emailError, emailErrorMessage, passwordError, passwordErrorMessage} : SignInFormComponentProps) {
        
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
            }}
            >
            <FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Email</FormLabel>
                
                </Box>
                <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
                />
            </FormControl>
            <FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                
                </Box>
                <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                />
            </FormControl>
            <Box display='flex' justifyContent='end'>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
                sx={{width: '100px'}}
                >
                Login
                </Button>
            </Box>
        </Box>
    )
}
