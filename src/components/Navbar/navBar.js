import "./navStyle.css";
const Navbar = () => {
    return ( <>
        < nav >
        <div className = "nav1" >
        <div className = "logo" >
        <span className="bi-star"></span>
        <a href = "#" > Fatima </a> 
        </div > 
        <div >
        <ul className = "nav2" >
        <li >
        <span className = "bi bi-house" > </span> 
        <a href = "#" > Home </a>
         </li>
          <li >
        <span className = "bi bi-book" > </span> 
        <a href = "#" > About </a>
         </li> 
         <li >
        <span className = "bi bi-phone" > </span>
         <a href = "#" > Contact </a> 
         </li>
          </ul> 
          </div > 
          </div> 
          </ nav > 
          </>
    );
};
export default Navbar;