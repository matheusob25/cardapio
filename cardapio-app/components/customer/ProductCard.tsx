type Product = { 
    name: string;
    description: string;
    price: number;
    image: string;
}


type ProductCardProps = {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps){
    return(
        <div className="flex gap-2 bg-gray-100 p-2 rounded-md">
            <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            /> 

            <div className="flex flex-1 flex-col">
                <p className="font-bold">{product.name}</p>
                <p className="text-sm">{product.description}</p>

                <div className="flex items-center gap-4 justify-between mt-auto pt-3"> 
                    <p className="font-bold text-lg">
                        R$ {product.price.toFixed(2).replace(".",",")}
                    </p>
                    <button className="bg-blue-950 px-5 rounded">
                        🛒 
                    </button>
                </div>

            </div>
        </div>
    );
}