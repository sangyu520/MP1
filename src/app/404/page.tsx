"use client"; 
import { useEffect } from "react"; 
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";  

export default function NotFound() {   
  const router = useRouter();    

  // 禁止滚动   
  useEffect(() => {     
    document.body.style.overflow = "hidden";     
    return () => {       
      document.body.style.overflow = "auto";     
    };   
  }, []);    

  return (     
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-white font-serif">       
      <div className="container mx-auto">         
        <div className="flex justify-center">           
          <div className="w-full text-center sm:w-10/12 md:w-8/12">             
            {/* 背景图 + 404 */}             
            <div               
              aria-hidden="true"               
              className="mx-auto h-[250px] bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] bg-contain bg-center bg-no-repeat sm:h-[350px] md:h-[400px]"             
            >               
              <h1 className="pt-6 text-center text-6xl text-black sm:pt-8 sm:text-7xl md:text-8xl">                 
                404               
              </h1>             
            </div>              

            {/* 提示文字 */}             
            <div className="mt-[-50px]">               
              <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">                 
                  Looks like you are lost
             
              </h3>               
              <p className="mb-6 text-black sm:mb-5">                 
                The page you are looking for is not available!               
              </p>                

              {/* 返回主页按钮 */}               
              <Button                 
                variant="default"                 
                onClick={() => router.push("/")}                 
                className="my-5 bg-green-600 hover:bg-green-700"               
              >                 
                Go to Home               
              </Button>             
            </div>           
          </div>         
        </div>       
      </div>     
    </section>   
  ); 
}
