import toast,{Toaster} from "react-hot-toast";
import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";
import {
  Connection,
  SystemProgram,
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  SendTransactionError,
} from "@solana/web3.js"

const SOLANA_NETWORK = "devnet";

function Popup() {
    const [publicKey, setPublicKey] = useState(null);
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [receiver, setReceiver] = useState("HLUNRAX23cRyN5DyHcKMKTAifFd2EoYkukY8ZmdFXL8i");
  const [amount, setAmount] = useState(null);

  useEffect (() => {
    let key = window.localStorage.getItem("publicKey");
    setPublicKey(key);
    if (key) getBalances(key);
}, []);

  
  const handleReceiverChange = (event) =>{
    setReceiver(event.target.value)
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async () =>{
    console.log("Este es el receptor", receiver);
    console.log("Este es el monto", amount);
    SendTransaction();
  }

  const signIn = async () => {

    const provider = window?.phantom?.solana;
    const {solana} = window;

    if(!provider.isPhantom || !solana.isPhantom){
      toast.error("Phantom no esta instalado");
      setTimeout(() => {
        window.open("https://phantom.app/","_blank");
      }, 2000);
      return;
    }
    
    let phantom;
    if(provider?.isPhantom) phantom = provider;
    
    const {publicKey} = await phantom.connect();
    console.log("Public key",publicKey.toString());
    setPublicKey(publicKey.toString());
    window.localStorage.setItem("publicKey",publicKey.toString());

    toast.success("Tu wallet esta conectada");
    getBalances(publicKey);
  };

  const signOut = async() => {
    if(window){
      const {solana} = window;
      window.localStorage.removeItem("publicKey");
      setPublicKey(null);
      solana.disconnect();
      router.reload(window?.location?.pathname);
    }
  };

  const getBalances = async(publicKey) => {
    try{
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      );
      const balance = await connection.getBalance(
        new PublicKey(publicKey)
        );
      const balancenew = balance /  LAMPORTS_PER_SOL;
      setBalance(balancenew);
    }catch  (error){
      console.error("Error get balance", error);
      toast.error("Algo salio mal al obtener el balance");
    }
  };

  const SendTransaction = async () => {
    try {
      getBalances(publicKey);
      console.log("Este es el balance", balance);

      if (balance < amount){
        toast.error("No hay fondos suficientes");
        return;
      }

      const provider = window?.phantom?.solana;
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      );

      const fromPubKey = new PublicKey(publicKey);
      const toPubKey = new PublicKey(receiver);


      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromPubKey,
          toPubkey: toPubKey,
          lamports: amount * LAMPORTS_PER_SOL,
          
        })
        );
        
      console.log("Esta es la transacción", transaction);

      const {blockhash} = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPubKey;

      const transactionsignature = await provider.signTransaction(
        transaction
      );

      const txid = await connection.sendRawTransaction(
        transactionsignature.serialize()
      );

      console.info(`Transacción con numero de id ${txid} enviada`);

      const confirmation = await connection.confirmTransaction(txid,{
        commitment: "singleGossip",
      });

      const {slot} = confirmation.value;
      console.info(
        `Transaccion con numero de id ${txid} confirmando en el bloque ${slot}`
      );
      toast.success("Transaccion enviada con exito :D")

      getBalances(publicKey);
      setAmount(null);
      setReceiver(null);
      return;

    }catch (error) {
      console.log("Error send transaction", error);
      toast.error.apply("Error al enviar transacción")
    }
  }

  return (
    <div>
        <button className="btn" onClick={()=>window.my_modal_3.showModal()}>Apuesta</button>
        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕ </button>
                {publicKey ? (
                <div className="flex flex-col place-items-center  justify-center">
                    <p className="text 2x1 font-bold text-black"> Cantidad de SOL: </p>

                    <input className="h-8 w-72 mt-4 border-2 border-black" type="text" onChange={handleAmountChange}/>

                    <button type="submit" className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-black" onClick={() =>{handleSubmit();}}> Enviar SOL </button>
                </div>
            ) : (<div>
            </div>)}
            </form>
        </dialog>
        <Toaster position="bottonm-center" />
    </div>
  )
}

export default Popup