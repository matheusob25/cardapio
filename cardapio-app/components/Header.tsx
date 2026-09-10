export default function Header(){
    return(
           <header className="bg-[url('/assets/bg.png')]">
            <div className="w-full h-full flex flex-col justify-center items-center">

                <img
                    src="/assets/hamb-1.png"
                    alt="Lindomar Hamburguer"
                    className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
                />

                <h1 className="text-4xl mt-4 mb-2 font-bold text-white">
                    Lindomar do Sanduíche
                </h1>

                <span className="text-white">
                    Rua 61, Setor Joaquim da Silva, Itapuranga-GO
                </span>

                <div className="bg-green-600 px-4 py-1 rounded-lg mt-5">
                    <span className="text-white font-medium">
                        Ter à dom - 18:00 às 23:00
                    </span>
                </div>

            </div>
        </header> 

    );
}