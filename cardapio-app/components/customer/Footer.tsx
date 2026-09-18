export default function Footer() {
    return(
        <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center"> 
            <button 
                className="flex items-center gap-2 text-white font-bold"
                id="cart-btn"
                >
                (<span id="cart-count">0</span>)
                Verifique seu carrinho
                <i className="fa fa-cart-plus text-lg text-white"></i>
            </button>
        </footer>

    );
}