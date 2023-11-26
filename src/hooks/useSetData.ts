import  useSWRMutation  from "swr";

const fetcher = async (url:string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return res.json();
  };
   
  
  const useSetData = (path:string) => {
    const { data, error } = useSWRMutation (`https://star-talk.foradmin.pp.ua/api/v1/${path}`, fetcher, {
      keepPreviousData: true
    });
   
    const isLoading = !data && !error;
   
    return { data, error, isLoading };
  };
   
  export default useSetData;