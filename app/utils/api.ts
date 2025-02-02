import {  Starwars } from "../interfaces";
import { speciesa } from "../enums";
import { instance } from "../axios/axios";
import { notFound } from "next/navigation";
import axios from "axios";



export async function getPerson(page: number=1) {
  const {data} = await instance.get<Starwars>(`/?page=${page}`);
  
  if(!data){
      console.log("error")
      notFound()
  } 
  return data
  
}



export async function getDerails(url: string) {
  try {
      const response = await axios.get(url);
      
      return response.data;
  } catch (error) {
     throw new Error(
      "Error "+error
     )
  }
}






export const getSpecialColor = (species: speciesa): string => {
  switch (species) { 
    case speciesa.Human:
      return "bg-blue-500";
    case speciesa.Droid:
      return "bg-yellow-500";
    case speciesa.Wookiee:
      return "bg-purple-500";
      case speciesa.Zabrak:
      return "bg-white-500";
    default:
      return "bg-red-500";
  }
};


