// Utilitários de autenticação simples
export const getUser = () => {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Erro ao obter usuário do localStorage:', error);
        return null;
    }
};

export const setUser = (userData) => {
    try {
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('Usuário salvo no localStorage:', userData);
    } catch (error) {
        console.error('Erro ao salvar usuário no localStorage:', error);
    }
};

export const removeUser = () => {
    localStorage.removeItem('user');
    console.log('Usuário removido do localStorage');
};

export const isAuthenticated = () => {
    const user = getUser();
    return user !== null && user.idUsuario;
};
