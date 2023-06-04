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
                <th> Partido </th>
                <th> </th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaApuestas;
