import React from 'react';

function TablaApuestas() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="text-center bg-cover bg-slate-300">
                <th></th>
              <th>1</th>
              <th>X</th>
              <th>2</th>
              <th>Más de ...</th>
              <th>Menos de ...</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className=" bg-cover bg-slate-200">
                <td>
                    Real Madrid
                    <br />
                    Barcelona
                </td>
                <td><button className="btn glass bg-cover bg-slate-400">Real Madrid</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Empate</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Barcelona</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">1.5</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">3.5</button></td>
            </tr>
            {/* row 2 */}
            <tr className=" bg-cover bg-slate-200">
                <td>
                    Manchester City
                    <br />
                    Inter de Milan
                </td>
                <td><button className="btn glass bg-cover bg-slate-400">City</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Empate</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Inter</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">1.5</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">3.5</button></td>
            </tr>
            {/* row 3 */}
            <tr className=" bg-cover bg-slate-200">
                <td>
                    America
                    <br />
                    Chivas
                </td>
                <td><button className="btn glass bg-cover bg-slate-400">America</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Empate</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">Chivas</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">1.5</button></td>
                <td><button className="btn glass bg-cover bg-slate-400">3.5</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaApuestas;
