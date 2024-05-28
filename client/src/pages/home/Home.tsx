import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
const Home =() => {

    return  (
<div className='bg-white h-full p-4  ' >
    <h1 className='text-black font-bold text-2xl mb-4' > Messaging </h1>
    <div className='items-center justify-center mb-4 flex '>
    <div className="border-2 border-gray-400 flex  h-700 w-900"  >
        <Sidebar />
        <MessageContainer />
    </div>

    </div>
    <p className="text-center text-gray-500 text-xs">
        &copy;Lập trình FE-2024- Nhóm 4.
      </p>
</div>
    )
}
export  default Home;