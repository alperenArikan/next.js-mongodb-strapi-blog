import React,{useState} from "react"
import { useRouter } from 'next/router'
import { connectToDatabase } from '../../util/mongodb'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import PostSection from "../components/PostSection/PostSection"
import HelperSection from "../components/HelperSection/HelperSection"
import Content from "../components/Content/Content"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer"


export default function Home({ data }) {
  const [page,setPage] = useState(0)
  const router = useRouter()

  
  // router.push("/1")

    return (
        <React.Fragment>
          {/* <Navbar /> */}
        <Jumbotron />
        <Content>
            <PostSection data={data} />
            <HelperSection />
        </Content>
        </React.Fragment>  
        // <>
        // {router.push("/1")}
        // </>

    );
}



export async function getServerSideProps(context) {
 const { db } = await connectToDatabase();
  let data = await fetch(`http://localhost:3000/api?page=0&limit=3`)
  data = await data.json()
  return {
    props:{data}
  }
}

