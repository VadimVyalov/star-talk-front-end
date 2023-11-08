import  useSWR  from "swr";

const fetcher = async (url:string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
  };
   
  const useGetData = (path:string) => {
    const { data, error } = useSWR (`https://star-talk.foradmin.pp.ua/api/v1/${path}`, fetcher, {
      keepPreviousData: true
    });
   
    const isLoading = !data && !error;
   
    return { data, error, isLoading };
  };
   
  export default useGetData;