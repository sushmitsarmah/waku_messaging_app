import { CSSProperties, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
    loading: boolean;
};

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner = ({ loading }: Props) => {
    const [color] = useState("#ffffff");

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;