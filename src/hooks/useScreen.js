"use client";

import { SCREENS } from "../../public/const/screens";
import { useMediaQuery } from "react-responsive";
import  { useEffect, useState } from "react";

const useScreen = () => {
   const [query, setQuery] = useState({isM:false,isT:false,isD:false})
  const isM = useMediaQuery({ query: `(min-width: ${SCREENS.m})`});
  const isT = useMediaQuery({ query: `(min-width: ${SCREENS.t})`}) ;
  const isD = useMediaQuery({ query: `(min-width: ${SCREENS.d})`});

  useEffect(() => {
		
    setQuery({isM,isT,isD})

  },[isM,isT,isD])

  return query
};

export default useScreen;