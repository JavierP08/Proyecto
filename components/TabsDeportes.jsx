import React from 'react';

function TabsDeportes() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',width: '100%', }}>
            
<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li className="mr-2">
        <a href="#" aria-current="page" className="inline-block p-10 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Soccer</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">American Football</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Baseball</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-10 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Basketball</a>
    </li>
    <li className="mr-2 self-center">
        <details className="dropdown mb-20 self-center">
        <summary className="m-1 btn">General</summary>
        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li><a>En Vivo</a></li>
            <li><a>General</a></li>
        </ul>
        </details>
    </li>



</ul>
</div>
    )
}

export default TabsDeportes;