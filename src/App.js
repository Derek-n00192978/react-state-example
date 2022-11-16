import Navbar from "./components/Navbar";
import Clicky from "./components/clicky";
import Countdown from "./components/countdown";
import Countdown2 from "./components/countdown2";
import Footer from "./components/Footer";
const App = () => {
    let exampleProp = "example navbar prop"
    return (
        <>
            <Navbar example={exampleProp} />
            <h1>Hello from App</h1> 
            <Clicky />
            <br />
            <Countdown startValue="10"/>
            <Countdown startValue="20"/>
            <Countdown startValue="30"/>
            <br />
            <Countdown2 startValue="20"/>
            <Footer/>
        </>           
        
    );
};

export default App;