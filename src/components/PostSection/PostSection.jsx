import React,{useEffect,useState} from 'react';
import {useRouter} from "next/router"
import Link from "next/link"
import Posts from "./Posts/Posts"
import Pagination from "./Posts/Pagination"
const PostSection = ({data}) => {


    return (
        <React.Fragment>
          <div className="col-md-8">
            {data ? data.map(content=>{
            return(
              <Posts  content={content}/>

            )
          }): ""} 
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <Pagination />
            </ul>
          </nav>
           </div>


        </React.Fragment>
    );
}

export default PostSection;

export async function getServerSideProps(context) {
 const { db } = await connectToDatabase();
  let data = await fetch(`http://localhost:3000/api?page=0`)
  data = await data.json()
  return {
    props:{data}
  }
}