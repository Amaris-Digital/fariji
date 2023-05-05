import Header from "../components/header";
import useHeader from "../hooks/useHeader";
import {useEffect} from "react";

const Home = (): JSX.Element => {

    const {header, setHeader} = useHeader();
    useEffect(() => {
        setHeader("Home Page Header")
    }, [setHeader])

    return (
        <div>
            <Header id={1} name={header ?? "This is the home page!"}/>
        </div>
    );
}

export default Home;