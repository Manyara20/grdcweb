import { Link } from "react-router-dom";

function Footer() {
   return (<footer>
      <div className="inner">
         <div className="content">
            <div className="logo">
               <img className="icon" src="./icon.png" />
            </div>
            <div className="links">
               <Link to={''}>Home</Link>
               <Link to={''}>Learn More</Link>
               <Link to={''}>Sign Up</Link>
               <Link to={''}>Contact</Link>
            </div>
            <div className="links">
               <Link to={''}>Facebook</Link>
               <Link to={''}>Twitter</Link>
               <Link to={''}>Instagram</Link>
               <Link to={''}>Discord</Link>
            </div>
            <div className="links">
               <Link to={''}>Terms & Conditions</Link>
               <Link to={''}>Privacy Policy</Link>
            </div>
         </div>
      </div>
   </footer>);
}

export default Footer;