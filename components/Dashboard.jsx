import React from 'react';

function Dashboard() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-32 h-full bg-base-200 text-base-content">
                <h2 className="text-2xl font-bold mb-4">MENU</h2> {/* Nuevo título "MENU" dentro del drawer */}
                <li>
                  <a href='/casino'>Casino</a>
                </li>
                <li>
                  <a href='/deportes'>Deportes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">SOLANABET</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg" alt="Avatar"  />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between" href='/perfil'>
                  Profile
                </a>
              </li>
              <li><a href='/paginaPrincipal'>Login</a></li>
              <li><a>Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
