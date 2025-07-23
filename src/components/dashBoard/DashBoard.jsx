import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/auth/authSlice';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div className="p-4 ">
            <h2 className="text-xl font-bold">Bem-vindo, {user.username}!</h2>
            <button
                onClick={() => dispatch(logout())}
                className="mt-4 bg-red-500 text-white p-2 rounded"
            >
                Sair
            </button>
        </div>
    );
};

export default Dashboard;
