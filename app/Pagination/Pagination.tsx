"use client"

import { useRouter, useSearchParams } from "next/navigation"



export function Pagination({next, previous,page}: {next: string | null, previous: string | null,page:number}) {
    
    const router=useRouter()


    const handlechanghe = (newPage: number) => {
        router.push(`?page=${newPage}`);
      };

      const handleClickNextPage = () => {
         handlechanghe(page + 1);
      };

      const handleClickPreviousPage = () => {
        handlechanghe(page - 1);
     };
    return (
        <div>
            <button disabled={!previous} onClick={handleClickPreviousPage}>Previous</button>
            <button disabled={!next} onClick={handleClickNextPage}>Next</button>
        </div>
    )
}


export default Pagination