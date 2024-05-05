"use client"
import Image from "next/image";
import {signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation';
import { useEffect } from "react";
import Categorylist from "@/components/Home/Categorylist";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
import GoogleMapView from "@/components/Home/GoogleMapView";

export default function Home() {
  const {data:session}=useSession();
  const router=useRouter()
  useEffect(()=>{
    // if(!session?.user){
    //   router.push('/Login')
    // }
  },[session])
  return (
    <div className='grid grid-cols-1
    md:grid-cols-4
     h-screen justify-center' >
      <div className='p-3'><Categorylist/>
      <RangeSelect/>
      <SelectRating/>
      </div>
      
      <div className='col-span-3'><GoogleMapView/></div>
       {/* <h2>Hello</h2>
    <button onClick={()=>signOut()}>SignOut</button> */}

    </div>
   
  );
}
