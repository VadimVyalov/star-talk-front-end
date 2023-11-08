"use client";


import { useMediaQuery } from "react-responsive";
import  { useEffect, useState } from "react";
import { SCREENS } from "@/lib/screens";
const useScreen = () => {
   const [query, setQuery] = useState({isM:false,isT:false,isD:false})
  const isM = useMediaQuery({ query: `(min-width: ${SCREENS.m}px)`});
  const isT = useMediaQuery({ query: `(min-width: ${SCREENS.t}px)`}) ;
  const isD = useMediaQuery({ query: `(min-width: ${SCREENS.d}px)`});

  useEffect(() => {
		
    setQuery({isM,isT,isD})

  },[isM,isT,isD])

  return query
};

export default useScreen;