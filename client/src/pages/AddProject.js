import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateProjectForm from "../components/CreateProjectForm/index.js";

const AddProject = () => {
 
 
  return (<>

    <Container fluid>
          <CreateProjectForm />
    </Container>

    {/* <!-- Footer Section --> */}
      <footer id="footer">
        
         <div class="footer-bottom">
            <p> © Copyright 2020</p>
            <small>Made with <i class="fa fa-heart"></i> by <b>You Nailed It! Contruction</b> </small>
         </div>
      </footer>
    </>
  );
}


export default AddProject;