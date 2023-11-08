import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ReduxProvider } from "@/redux/features/provider";
import Convert from "./components/CurrencyConverter";

export async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();
  return data;
}
export default async function Home() {
  const products: any = await loadProducts();
  return (
    <Suspense>
      <ReduxProvider>
        <div className="bg-sky-200 container">
          <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Welcome
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Fake API Store
                  </h2>
                  <Convert />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              {products.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                  >
                    <Link
                      href={`/product/${product.id}`}
                      prefetch={true}
                      replace
                      className="w-full px-4 md:w-1/2 lg:w-1/3"
                    >
                      <div className="\">
                        <Image
                          className={`mb-8 flex h-[150px] w-[125px] p-3 items-center justify-center rounded-2xl bg-primary`}
                          src={product.image}
                          alt={product.title}
                          width={125}
                          height={125}
                        />
                        <h4 className="mb-3 text-xl font-semibold text-dark">
                          {product.title}
                        </h4>
                        <p className="text-body-color">{product.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </ReduxProvider>
    </Suspense>
  );
}
