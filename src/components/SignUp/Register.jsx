import { NavLink } from "react-router-dom"
const Register = () => {
  return (
    <div className="h-screen bg-neutral-800">
      <div className="pt-40 flex justify-center">
      <div className="w-full max-w-xs">
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-neutral-900">
            <div className="text-zinc-300 font-bold text-3xl pb-4 text-center">
                Register 
            </div>
            <div className="mb-4">
                <label className="block text-zinc-300 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
            </div>
            <div className="mb-6">
            <label className="block text-zinc-300 text-sm font-bold mb-2" for="password">
                Password
            </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p className="text-red-500 text-xs italic">Please enter a password.</p>
            </div>
            <div className="">
                <NavLink exact="true" to="/app">
                  <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Sign Up
                  </button>
                </NavLink>
                <NavLink exact="true" to="/sign-in">
                    <div className="pt-3 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 pb-4">
                        Have an Account? Sign In!
                    </div>
                </NavLink>
            </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2022 Street-Art-To. All rights reserved.
        </p>
    </div>
      </div>
    </div>
  )
}

export default Register