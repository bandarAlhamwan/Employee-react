import { Link } from "react-router-dom"

const Header = () => {
    return (  
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                 <Link to="/"> 
                    <div className="navbar-brand">أدارة الموظفين</div>
                </Link>
                </nav>
                
            </header>
        </div>
    );
}
 
export default Header;