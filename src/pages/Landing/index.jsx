import "./styles.css";

import Content from "../../component/Content"
import NavBar from "../../component/NavBar"
import About from "../../component/About";

export default function index () {
    return(
        <div className="container">
            <NavBar />
            <Content />
            <About />
        </div>
    )
}