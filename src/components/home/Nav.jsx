import { FaMoon } from "react-icons/fa"

function Nav() {
  return (
<div className="flex justify-between items-center px-4 py-4 shadow-md sm:px-16 sm:py-6">
  <div>
    <h1 className="text-lg font-extrabold sm:text-2xl md:text-3xl">
      Where in the world?
    </h1>
  </div>
  
  <div>
    <button className="flex items-center gap-2 text-sm font-semibold sm:text-lg">
      <FaMoon className="text-xs sm:text-base" />
      <span>Dark Mode</span>
    </button>
  </div>
</div>

  )
}

export default Nav
