import React from "react";
import { Col, Row, Container } from "../components/Grid";
const Home = () => {
 
 
  return (<>
 
 {/* <!-- Get Touch Section --> */}
      <div id="get-touch">
         <div class="container">
            <div class="row">
               <div class="col-sm-8 col-xs-12 col-md-8">
                  <h3>Providing professional construction services since 1990.</h3>
                  <p>Get Started Today and Complete Our Form to Request Your Free Estimate</p>
               </div>

            </div>
         </div>
      </div>
	  {/* <!-- End Get Touch Section --> */}

    {/* <!-- Footer Section --> */}
      <footer id="footer">
        
         <div class="footer-bottom">
            <p> © Copyright 2020 Website </p>
            <small>Made with <i class="fa fa-heart"></i> by <b>You Nailed It! Contruction</b> </small>
         </div>
      </footer>
    </>
  );
}


export default Home;