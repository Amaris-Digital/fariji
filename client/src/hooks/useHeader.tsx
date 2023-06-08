import {useState} from "react";

const useHeader = (): any => {
    const [header, setHeader] = useState<string>()
    return {header, setHeader}
}

export default useHeader;
