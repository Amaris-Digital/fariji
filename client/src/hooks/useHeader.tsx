import {useState} from "react";

const useHeader = () => {
    const [header, setHeader] = useState<string>()
    return {header, setHeader}
}

export default useHeader;
