import React,{useState,useEffect} from 'react';
import {useRouter} from "next/router"
import Link from "next/link"
import { route } from 'next/dist/next-server/server/router';
const Pagination = () => {
    const [list,setList] = React.useState([])
    const router = useRouter()
      let page = Number(router.asPath.substr(1))


    const paginationUp = ()=>{
      if(router.asPath === "/"){
        router.push("/1")
      }
      else{
        page = page + 1
        router.push(`/${page}`)
      }
    }


        const paginationDown = ()=>{
      if(router.asPath === "/1"){
        router.push("/")
      }
      else{
        page = page - 1
        router.push(`/${page}`)
      }
    }

    useEffect(()=>{
       fetch(`http://localhost:3000/api?page=0&limit=0`)
      .then(data => data.json())
      .then(data =>{
        let length = data.length/3
        let list= []
        for(let i = 0; i< length; i++){
          if(i == 0){
            list.push(<li class="page-item"><span onClick={ ()=> router.push(`/`)} class="page-link">1</span></li>)
          }
          else{
            list.push(<li class="page-item"><span onClick={()=> router.push(`/${i}`)} class="page-link">{i + 1}</span></li>)
          }

        }
      setList(list)
      } )

      
      return ()=>{
        return
      }
    },[])
    return (
        <>
            <li onClick={paginationDown} class="page-item"><button  disabled={router.asPath === "/" ? true : false} class="page-link">Previous</button></li>
              {list}

              <li onClick={paginationUp} class="page-item"><button disabled={router.asPath == `/${list.length -1 }` ? true : false} class="page-link">Next</button></li>
        </>
    );
}

export default Pagination;
