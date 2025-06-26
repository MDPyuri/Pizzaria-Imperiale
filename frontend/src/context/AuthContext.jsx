import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Verifica se o usuário está autenticado ao carregar a aplicação
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('http://localhost:3000/usuarios/me', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Erro ao verificar autenticação:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, senha) => {
        try {
            const response = await fetch(
                'http://localhost:3000/usuarios/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ email, senha }),
                }
            );

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Erro ao fazer login');
            }

            const data = await response.json();
            setUser(data.usuario);
            return { success: true };
        } catch (error) {
            console.error('Erro no login:', error);
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        try {
            await fetch('http://localhost:3000/usuarios/logout', {
                method: 'POST',
                credentials: 'include',
            });
        } catch (error) {
            console.error('Erro no logout:', error);
        } finally {
            setUser(null);
        }
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
        loading,
        checkAuthStatus,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
