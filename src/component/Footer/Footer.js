import  React,{Component} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class Footer extends  Component{
    render(){
        return( <MDBFooter color="blue" className="font-small pt-3 mt-3">
      <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
          <MDBCol md="12" className="py-4">
            <div className="mb-5 flex-center">
              <a className="fb-ic"
              href="https://github.com/Edmon999"
              target="_blank"
              rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic"
               href="https://github.com/Edmon999"
               target="_blank"
               rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic"
                href="https://github.com/Edmon999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic"
                href="https://github.com/Edmon999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-">
        <MDBContainer fluid>
           <p>
              <i className="fa fa-phone mr-2" /> + 374 94 62 18 16
            </p>
            <p>
              <i className="fa fa-envelope mr-2" /> edmon.sargsyan999@gmail.com
            </p>
            
          &copy; {new Date().getFullYear()} 
        </MDBContainer>
      </div>
    </MDBFooter>)
         
    }
}
export default Footer