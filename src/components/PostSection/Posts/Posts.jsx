import React from 'react';
import Link from "next/link"
const Posts = ({content}) => {
    return (
        <React.Fragment>
                <div  className="card mb-4">
                {/* <img src={"x.data().file"} className="card-img-top" alt="placeholder" />  */}
                <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  {/* <p className="card-text">{x.data().body.substr(0,60) + "..."}</p> */}
                  <br/>
                  <Link href={`post/${content._id}`}>
                  <button className="btn btn-outline-primary">
                    Read Post
                  </button>
                  </Link>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                  <small className="text-muted">{content.date}</small>
                  <small className="text-muted">Author: {content.author}</small>
                </div>
              </div>
        </React.Fragment>
    );
}

export default Posts;
