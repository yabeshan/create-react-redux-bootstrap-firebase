import {auth} from "../config/firebase";

export const USER_LOGIN = 'user/LOGIN'
export const USER_LOGOUT = 'user/LOGOUT'
export const USER_CHANGE_MAIL = 'user/CHANGE_MAIL'
export const USER_CHANGE_PASSWORD = 'user/CHANGE_PASSWORD'

const initialState = {
	email: "",
    password: "",
    token: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
        case USER_LOGIN:
			return {
				...state,
				token: action.data.user.l
			}

        case USER_LOGOUT:
			return {
				...state,
				token: action.data.message
			}
        
        case USER_CHANGE_MAIL:
			return {
				...state,
				email: action.data
            }

        case USER_CHANGE_PASSWORD:
			return {
				...state,
				password: action.data
            }
            
		default:
			return state
	}
}

export const login = () => {
	return (dispatch, getState) => {
        const email = getState().user.email;
        const password = getState().user.password;
        
        auth.createUserWithEmailAndPassword(email, password)
            .then( data => {
                // console.log ("login then = ", data.user.l);
                dispatch({
                    type: USER_LOGIN
                })
            })
            .catch( error => {
                if (error.code == "auth/email-already-in-use") {
                    auth.signInWithEmailAndPassword(email, password)
                    .then( data => {
                        // console.log ("login then = ", data.user.l);
                        dispatch({
                            type: USER_LOGIN,
                            data: data
                        })
                    })
                    .catch( error => {
                        console.log ("login error = ", error );
                        dispatch({
                            type: USER_LOGOUT,
                            data: error
                        })
                    })
                } else {
                    console.log ("login error 111 = ", error );
                    dispatch({
                        type: USER_LOGOUT,
                        data: error
                    })
                }
            });
	}
}

export const logout = () => {
	return dispatch => {
        auth.signOut()
            .then( data => {
                dispatch({
                    type: USER_LOGOUT,
                    data: data
                })
            })
            .catch( error => {
                dispatch({
                    type: USER_LOGOUT,
                    data: error
                })
            });
	}
}

export const changeEmail = (event, txt) => {
    return dispatch => {
        let title = (event) ? event.target.value : txt;
        dispatch({
            type: USER_CHANGE_MAIL,
            data: title
        })
    }
}

export const changePassword = (event, txt) => {
    return dispatch => {
        let title = (event) ? event.target.value : txt;
        dispatch({
            type: USER_CHANGE_PASSWORD,
            data: title
        })
    }
}
