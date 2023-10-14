import { useEffect, useState } from "react";

const useFetchDataFromAPI =  (apiLink) => {

const [fetchedData , setFetchedData] = useState(null)
const [isDataFetched , setIsDataFetched] = useState(false)
const [error,setError] = useState("no error")


useEffect(()=>{
fetchData()
},[])

const fetchData = async()=>{
        try{
                const response = await fetch(apiLink);
                const data = await response.json()
              
               setFetchedData(data?.data)
               setIsDataFetched(true)
        }catch(error){
                setError(error)
        }

}
return [fetchedData,isDataFetched,error]

}

export default useFetchDataFromAPI