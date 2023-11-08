import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import NewPrice from "@/app/components/NewPrice";

export async function loadProduct(productId: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await res.json();
  return data;
}
export default async function ProductWithId({ params }: any) {
  const product = await loadProduct(params.id);
  return (
    <>
      <Suspense>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className={`mb-8=10 flex h-[200px] w-[150px] p-3 items-center justify-center rounded-2xl bg-primary`}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
                <NewPrice>{product.price}</NewPrice>

                <Link href={"/"} replace>
                  <button className="flex ml-auto text-black bg-sky-300 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}
