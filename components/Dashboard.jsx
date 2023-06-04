import React from 'react';

function Dashboard() {
  return (
    <div>
      <div className="navbar bg-base-100  bg-cover bg-slate-400 ">
        
        <div className="flex-1">
          <a className=" text-xl">SOLANABET</a>
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
