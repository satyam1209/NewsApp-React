import React from "react";

// export class Newsitem extends Component {
  const Newsitem=(props)=>{
  // render() {
    let { title, description, imageurl, newsurl, author, date, source,color } = props;
    return (
      <div className="my-3">
        <a href={newsurl} style={{color:"black",textDecoration:"none"}}>
        <div className="card" style={{ width: "18rem", height: "27rem"}}>
          <img src={!imageurl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageurl} className="card-img-top" style={{height:"200px",width:"auto"}}alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title.slice(0, 40)}
              {title.length > 30 ? "..." : "."}
            </h5>
            <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{left:"90%",zIndex:"1"}}>
              {source.name}
              <span class="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">
              {description === null
                ? "Not Available"
                : description.slice(0, 100)}
              ...
              <a href={newsurl} style={{textDecoration:"none"}}><b>More</b></a>
            </p>
            {/* <a href={newsurl} className="btn btn-primary btn-sm">
              Read More....
            </a> */}
            {/* <hr /> */}
            <p className="card-text">
              <small className="text-muted">
                By {author === null ? <b>Unknown</b> : <b>{author.slice(0,30)}</b>} On
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
        </a>
      </div>
    );
  }
// }

export default Newsitem;
