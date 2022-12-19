const initialState = {
    users: [{
        firstname: 'hello',
        lastname: 'bye',
        username: 'bisma',
        password: 'abc'
        
    },
    {
        firstname: 'hello1',
        lastname: 'bye1',
        username: 'anum',
        password: 'bcd'
    }],
    employees: [],
    isLoggedIn: false,
    currentUser: {}
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'Signup':
            return {
                ...state, users: [...state.users, action.payload]
            };

        case 'addEmployee':
            return {
                ...state, employees: [...state.employees, action.payload]
            }
        case 'loggingIn':
            return {
                ...state, isLoggedIn: action.payload
            }
        case 'currentUser':
            return {
                ...state, currentUser: action.payload
            }
        default: return state;
    }
}
export default dataReducer;