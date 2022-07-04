import React, {useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
  const News=(props)=>{
  // default props if not passed from the app.js news section
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResult]=useState(0)
  // document.title = `NewsMonkey- ${capitalizeFirstLetter(props.category)
  
   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // async updateNews() { for class based
    const updateNews= async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setloading(true)

    props.setProgress(30);
    
    let data = await fetch(url);
    let parseddata = await data.json();
    props.setProgress(70);
    setarticles(parseddata.articles)
    settotalResult(parseddata.totalResults)
    setloading(false)
    // setpage()
    // console.log(parseddata);
    // props.setProgress(60);
    // setState({
    //   articles: parseddata.articles,
    //   totalResults: parseddata.totalResults,  FOR CLASS
    //   loading: false,
    //   // page:page+1
    // });
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      // setState({
      //   page:page+1,
      //   // articles: articles.concat(Array.from({ length: 20 }))
      // })
      setpage(page+1);
      // console.log("aft",page)
    // this.setState({ loading: true });
    setloading(true)
    console.log("bef",loading)
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setTimeout(() => {
      // setState({
      //   articles: articles.concat(parseddata.articles),
      //   totalResults: parseddata.totalResults,
      //   loading: false,
      // });
      setarticles(articles.concat(parseddata.articles));
      settotalResult(parseddata.totalResults)
      setloading(false)
      
    }, 1000);
    console.log("after",loading)
    
  };
  // articles = [];

  // constructor(props) {
  //   super(props);
  //   // console.log("hello")
  //   state = {
  //     articles: articles,
  //     loading: false,           For class based useState in Function based 
  //     page: 1,
  //     totalResults:0
  //   };
  //   document.title = `NewsMonkey- ${capitalizeFirstLetter(
  //     props.category
  //   )}`;
  // }
  
  useEffect(()=>{
    updateNews();
  },[]);
  // async componentDidMount() {
  //   // let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
  //   // setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parseddata = await data.json();
  //   // console.log(parseddata);
  //   // setState({ articles: parseddata.articles,totalResults:parseddata.totalResults ,loading:false});
  //   updateNews();
  // }

  // const handlenextclick = async () => {
    // console.log("next")
    // if disabled is not used in next button
    // if (page+1>Math.ceil(totalResults/20)){

    // }
    // else{
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    // setState({loading:true});
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
    // setState({
    //     page:page+1,
    //     articles: parseddata.articles,
    //     loading:false
    // })
    // setState({
    //   page: page + 1,
    // });
    // setpage(page+1)
    // updateNews();
    // }
  // };
  // const handleprevclick = async () => {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page-1}&pageSize=${props.pageSize}`;
    // setState({loading:true});
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
    // setState({
    //     page:page-1,
    //     articles: parseddata.articles,
    //     loading :false
    // })
  
  //   setpage(page-1)
  //   updateNews();
  // };
  // render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{margin:"75px"}}>
            NewsMonkey- Top {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </h2>
          {/* <hr></hr> */}
          {/* <h3 className="text-center">{props.category}</h3> */}
          {loading && <Spinner></Spinner>}
             <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Spinner/>}>
              <div className="container">
            <div className="row my-3">
              {/* {!loading && when not infinite scroll */}
              {articles.map((element) => {
                return (
                  <div className="col md4">
                    <Newsitem
                      key={element.url}
                      newsurl={element.url}
                      imageurl={element.urlToImage}
                      title={element.title}
                      description={element.description}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source}
                      color={props.color}
                    ></Newsitem>
                  </div>
                );
              })}
              {/* {loading && <Spinner></Spinner>} */}
            </div>
            </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-outline-dark"
              onClick={handleprevclick}
            >
              &larr;Previous
            </button>
            <button
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-outline-dark mr-3"
              onClick={handlenextclick}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
// }
News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
  color: "primary",
  // totalResults:0
  // author:"Sources",
  // date:"1/1/2022"
};
// property setting fot typechecking
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  // author: PropTypes.string,
  // date: PropTypes.date
};
export default News;
