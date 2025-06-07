import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, login, logout } from '../../redux/slices/auth/authSlice';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    const users = useSelector(state => state.auth.users);
    // Assumindo que você tem um estado de erro no seu slice de autenticação
    const authError = useSelector(state => state.auth.error);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [sucessMessage, setSucessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSucessMessage('');
        setErrorMessage('');

        if (isLoginMode) {
            if (!username || !password) {
                setErrorMessage('Por favor, preencha usuário e senha para entrar.');
                return;
            }else {
                dispatch(login({ username, password }));
                if (currentUser) {
                    setSucessMessage('Login realizado com sucesso!');
                    navigate('/'); // Redireciona para a página inicial após o login
                } else {
                    setErrorMessage('Usuário ou senha inválidos.');
                }
            }

        } else {
            if (!username || !password) {
                setErrorMessage('Por favor, preencha usuário e senha para cadastrar.');
                return;
            }
            const exists = users.find(u => u.username === username);
            if (exists) {
                setErrorMessage('Por favor, escolha outro nome de usuário.');
                return;
            }
            dispatch(register({ username, password, img: profileImg }));
            setSucessMessage('Usuário cadastrado com sucesso!');
            setIsLoginMode(true);
        }
        setUsername('');
        setPassword('');
        setProfileImg('');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="login-page-container">
            {currentUser ? (
                <div className="welcome-section">
                    <h2>Bem-vindo, {currentUser.username}!</h2>
                </div>
            ) : (
                <div className="auth-form-section">
                    <h2>{isLoginMode ? 'Login' : 'Cadastro'}</h2>
                    {sucessMessage && <p className="success-message">{sucessMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        {!isLoginMode && (
                            <div className="form-group">
                                <label htmlFor="profile-pic">Coloque sua foto de perfil</label>
                                <input
                                    id="profile-pic"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="file-input"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            {isLoginMode ? 'Entrar' : 'Cadastrar'}
                        </button>
                    </form>

                    <button
                        onClick={() => setIsLoginMode(!isLoginMode)}
                        className="toggle-mode-button"
                    >
                        {isLoginMode ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Login'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginPage;