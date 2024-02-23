import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase"
import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionTypes";


export const login = () => async dispatch =>{
    try {
        dispatch({
            type:LOGIN_REQUEST,
        })
        
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

        const res=await auth.signInWithPopup(provider)
        
        const accessToken=res.credential.accessToken;
        const profile={
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture,
        }
        sessionStorage.setItem('ytc-accessT',accessToken);
        sessionStorage.setItem('ytc-user',JSON.stringify(profile))
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken,
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile,
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type:LOGIN_FAILED,
            payload:error.message,
        })
    }
}
export const logout = () =>async dispatch=>{
    await auth.signOut();
    dispatch({
        type:LOG_OUT,
    })
    sessionStorage.removeItem('ytc-accessT');
    sessionStorage.removeItem('ytc-user')
}