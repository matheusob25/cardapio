export default function Cart(){
    return(
            <div 
        id="cart-modal" 
        className="bg-black/70 w-full h-full fixed top-0 left-0 z-[99] hidden items-center justify-center"
    >
        <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
            <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>

            <div 
                id="cart-items" 
            className="flex flex-col justify-between mb-2 overflow-y-auto max-h-80">

            </div>
            <p className="font-bold">Total: <span id="cart-total">0,00</span></p>
            <p className="font-bold mt-4">Endereço de entrega:</p>
            <input 
                type="text"
                placeholder="Digite seu endereço completo..."
                id="address"
                className="w-full border-2 p-1 rounded-md border-gray-400"

            />
            <p className="text-red-600 hidden" id="address-warn">Digite seu endereço completo!</p>
            
            <p className="font-bold mt-4">Número de telefone:</p>
            <input 
                type="text"
                placeholder="Digite seu número aqui..."
                id="number"
                className="w-full border-2 p-1 rounded-md border-gray-400"

            />
            <p className="text-red-600 hidden" id="number-warn">Número de telefone inválido!</p>
            

            <div className="flex items-center justify-between mt-4">
                <button 
                    id="close-modal-btn" 
                    className="bg-red-500 text-white font-bold rounded py-1 px-4">
                    Fechar
                </button>
                <button 
                    id="checkout-btn" 
                    className="bg-green-500 text-white font-bold rounded py-1 px-4">
                        Finalizar pedido
                </button>
            </div>

        </div>

    </div>
    );
}