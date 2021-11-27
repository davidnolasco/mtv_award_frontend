import  Title  from "../Title/Title.js";
import './TopHeader.css';
import NavBar from "../NavBar/NavBar";

const TopHeader = () => (
    <header className="header" >
        <Title/>
        
        <NavBar typeNav="" email="user@gmail.com"/>
    </header>
)

export default TopHeader;
