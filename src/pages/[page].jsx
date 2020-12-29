import React from 'react';
import {useRouter} from "next/router"
import { connectToDatabase } from '../../util/mongodb'
import PostSection from "../components/PostSection/PostSection"
import Navbar from "../components/Navbar/Navbar"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Content from "../components/Content/Content"
import HelperSection from "../components/HelperSection/HelperSection"
const Page = ({data}) => {



        const router = useRouter()
    return (
        <React.Fragment>
          {/* <Navbar /> */}
        <Jumbotron />
        <Content>
            <PostSection data={data} />
            <HelperSection />
        </Content>
        </React.Fragment>
    );
}


export async function getServerSideProps(context) {

let page = context.query.page
 const { db } = await connectToDatabase();
  let data = await fetch(`http://localhost:3000/api?page=${page}&limit=3`)
  data = await data.json()
  return {
    props:{data}
  }
}
export default Page;
