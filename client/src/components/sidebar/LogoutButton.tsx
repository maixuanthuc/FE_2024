import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';

interface LogoutButtonProps {
    webSocket: WebSocket | null;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ webSocket }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (webSocket) {
            const logoutData = {
                action: 'onchat',
                data: {
                    event: 'LOGOUT'
                }
            };
            webSocket.send(JSON.stringify(logoutData));
            webSocket.close();
        }
        navigate('/login');
    };

    return (
        <div className='flex items-end mt-auto cursor-pointer' onClick={handleLogout}>
            <div>
                <CiLogout />
            </div>
            <p className='ml-2 text-sm'>Đăng xuất</p>
        </div>
    );
};

export default LogoutButton;
