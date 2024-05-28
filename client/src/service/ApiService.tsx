// src/services/apiService.ts
const API_URL = 'http://140.238.54.136:8080/chat';

const apiService = {
    register: async (user: string, pass: string) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'REGISTER',
                    data: { user, pass }
                }
            }),
        });
        return response.json();
    },
    login: async (user: string, pass: string) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'LOGIN',
                    data: { user, pass }
                }
            }),
        });
        return response.json();
    }
};

export default apiService;
