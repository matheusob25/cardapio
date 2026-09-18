import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Menu(){
    const hamburgueres = products.filter(
        product => product.category === "hamburgueres"
    );

    const bebidas = products.filter(
        product => product.category === "bebidas"
    );

    return(
        <div id="menu">
            <h2 className="text-2xl font-bold mt-10 mb-6 text-center">Conheça nosso menu</h2>


            <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
                {hamburgueres.map(product => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </main>

            <div className="mx-auto max-w-7xl px-2 my-2"> 
                <h2 className="font-bold text-3xl">
                    Bebidas
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
                {bebidas.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );

}