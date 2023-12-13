import  useSWR  from "swr";

const fetcher = async (url:string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
  };
   
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useGetData = (path: string) => {
        
    const { data, error } = useSWR (`${BASE_URL}${path}`, fetcher, {
      keepPreviousData: true
    });
   
    const isLoading = !data && !error;
   
    return { data, error, isLoading };
  };
   
  export default useGetData;