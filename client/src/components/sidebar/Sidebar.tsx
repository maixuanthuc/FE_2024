
import SearchButton from './SearchButton'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r w-1/3 border-slate-500 p-4 flex flex-col overflow-auto'>
      <SearchButton />
      <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar;
