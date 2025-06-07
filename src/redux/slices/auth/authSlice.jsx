import { configureStore, createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    users: [], // lista de usuários cadastrados
    currentUser: null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { username, password, img } = action.payload;
            const exists = state.users.find(u => u.username === username);
            if (!exists) {
                state.users.push({ username, password, img });
            }else {
                state.error = 'Usuário ou senha inválidos';
                console.error('Usuário ou senha inválidos');
            }
        },
        login: (state, action) => {
            const { username, password} = action.payload;
            const user = state.users.find(
                u => u.username === username && u.password === password
            );
            if (user) {
                state.currentUser = user;
            }else {
                state.error = 'Usuário ou senha inválidos';
                console.error('Usuário ou senha inválidos');
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;