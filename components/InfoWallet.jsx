import React from 'react'

function InfoWallet() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-cover bg-slate-200">
          <h1 className="text-center">Wallet info</h1>
          <div className="grid grid-cols-2 gap-4">
            <p >Wallet: </p>
            <p className="text-center">10.00</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <p >Precio actual Solana: </p>
            <p className="text-center">10.00</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <p >Solanas gastadas:</p>
            <p className="text-center">10.00</p>
          </div>
          <div className="card-actions justify-end my-8">
          <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png" alt="GitHub Logo" className="w-4 h-4 mr-2 -ml-1" href='/paginaPrincipal'/>
            go to solana wallet
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoWallet