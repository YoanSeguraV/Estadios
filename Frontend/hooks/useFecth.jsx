import {useEffect, useState} from 'react'

function useFecth(url,cambio) {

    const [state, setState] = useState({
        data:null,
        loading:true
    })

    useEffect(() => {
      const load= async()=>{
        const response= await fetch(url)
        const data =await response.json()
        setState({
            data,
            loading:false
        })
      }
      load()
    }, [cambio])
    
  return state
}

export default useFecth
