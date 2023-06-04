import React from 'react';

function TablaApuestas() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="text-center">
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
            <tr className="hover">
                <td>
                    Real Madrid
                    <br />
                    Barcelona
                </td>
                <td><button className="btn glass">Real Madrid</button></td>
                <td><button className="btn glass">Empate</button></td>
                <td><button className="btn glass">Barcelona</button></td>
                <td><button className="btn glass">1.5</button></td>
                <td><button className="btn glass">3.5</button></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
                <td>
                    Manchester City
                    <br />
                    Inter de Milan
                </td>
                <td><button className="btn glass">City</button></td>
                <td><button className="btn glass">Empate</button></td>
                <td><button className="btn glass">Inter</button></td>
                <td><button className="btn glass">1.5</button></td>
                <td><button className="btn glass">3.5</button></td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
                <td>
                    America
                    <br />
                    Chivas
                </td>
                <td><button className="btn glass">America</button></td>
                <td><button className="btn glass">Empate</button></td>
                <td><button className="btn glass">Chivas</button></td>
                <td><button className="btn glass">1.5</button></td>
                <td><button className="btn glass">3.5</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaApuestas;
