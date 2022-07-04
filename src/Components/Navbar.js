import React, { useState ,useEffect} from "react";
// import PropTypes from "prop-types";
import { Link ,useLocation} from "react-router-dom";

const Navbar=()=> {
  const [mode,setmode]=useState("light")
  const toogleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor='grey';

    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white';
    }
  }
  let location=useLocation();
  useEffect(()=>{

  },[location]);
  // constructor(props){
  //   super(props)
  //   this.state={
  //     mode:"light"
  //   }
  //   this.toogleMode=this.toogleMode.bind(this);
  // }
  // toogleMode(){
    
  //   if (this.state.mode==="light"){
  //     this.setState({mode:"dark"});
  //         document.body.style.backgroundColor='grey';
      
  //   }
  //   else{
  //     // console.log(this.state.mode)
  //     // document.title="NewsMonkey-DarkMode"
  //     this.setState({mode:"light"})
  //     // document.title="NewsMonkey-LightMode"
      
  //     document.body.style.backgroundColor="white";
  //   }
      
  //   //   
  //   // }
  //   // else{
  //   //   
  //   }

    
  

  // render() {

    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode==="light"?"light":"dark"} bg-${mode==="light"?"light":"dark"}`}>
          {/* <br></br> */}
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/about">
                    About
                  </Link>
                </li> */}
                {/* <li className="nav-item"><Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/contactus">Contact Us</Link></li> */}
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/business"?"active":""}`} to="/business">Business</Link></li>
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link></li>
                {/* <li className="nav-item"><Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/general">general</Link></li> */}
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link></li>
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/science"?"active":""}`} to="/science">Science</Link></li>
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"?"active":""}`} to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link></li>
              </ul>
              {/* <div className={`form-check form-switch text-${this.props.mode==="light"?'dark':'light'}`}>
      <input className="form-check-input" style={{cursor:'pointer'}} type="checkbox" onClick={this.props.tooglemode} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label"  htmlfor="flexSwitchCheckDefault">{`${this.props.mode==='light'?"Enable":'Disable'} Dark Mode`}</label>
      </div> */}
      <div class={`form-check form-switch text-${mode==="light"?"dark":"light"}`}>
  <input class="form-check-input" onClick={toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label"  htmlFor="flexSwitchCheckDefault">{mode==='light'?'Enable':'Disable'} Dark Mode</label>
</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
// }

export default Navbar;
