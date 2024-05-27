


const Login = () => {
  return  <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="w-full max-w-xs">
      
      <h1 className="text-center font-extrabold  text-3xl mb-8 text-black ">ĐĂNG NHẬP</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Tài khoản
          </label>
          <input
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"

          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mật khẩu
          </label>
          <input
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**************"
          />
        </div>
        <div className=" flex items-center justify-center ">
          <button
              className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
          >
            Đăng nhập
          </button>
         
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;Lập trình FE-2024- Nhóm 4.
      </p>
    </div>
  </div>
}
export  default Login;
