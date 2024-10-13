/* eslint-disable @typescript-eslint/no-explicit-any */
interface SignInFormComponentProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    validateInputs: () => void
    emailError: boolean
    emailErrorMessage: string
    passwordError: boolean
    passwordErrorMessage: string,
    showPassword: boolean
    handleClickShowPassword: () => void
}

interface AppContextType {
    detailOpen: boolean
    setDetailOpen: any
    getData: () => void
    verifyState: boolean
    loading: boolean 
    setLoading: any
    login: boolean 
    setLogin: any
    user: object 
    setUser: any
    saveUser: (user: any) => void
    signOut: () => void
    logIn: () => void
}

interface Comment {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}

interface CommentProps{
    comment: Comment
}

export type { SignInFormComponentProps, AppContextType, CommentProps }