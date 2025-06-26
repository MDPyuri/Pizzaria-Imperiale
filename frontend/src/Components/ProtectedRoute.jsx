import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // Mostra loading enquanto verifica autenticação
    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                }}
            >
                <p>Carregando...</p>
            </div>
        );
    }

    // Se não estiver autenticado, redireciona para login
    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Se estiver autenticado, renderiza o componente
    return children;
};

export default ProtectedRoute;
