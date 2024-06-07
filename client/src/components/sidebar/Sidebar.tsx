import React from 'react';
import SearchButton from './SearchButton';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

interface SidebarProps {
    webSocket: WebSocket | null;
}

const Sidebar: React.FC<SidebarProps> = ({ webSocket }) => {
    return (
        <div className='border-r w-1/3 border-slate-500 p-4 flex flex-col overflow-auto'>
            <SearchButton />
            <Conversations />
            <LogoutButton webSocket={webSocket} />
        </div>
    );
};

export default Sidebar;
