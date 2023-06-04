import React from 'react';
import Popup from './Popup';

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
                <td><Popup></Popup></td>
            </tr>
            {/* row 2 */}
            <tr className=" bg-cover bg-slate-200">
                <td>
                    Manchester City
                    <br />
                    Inter de Milan
                </td>
            </tr>
            {/* row 3 */}
            <tr className=" bg-cover bg-slate-200">
                <td>
                    America
                    <br />
                    Chivas
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaApuestas;
