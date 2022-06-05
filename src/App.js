import RulerRender from "./components/RulerRender";
import RulerInput from "./components/RulerInput";
import { useState } from "react";

function App() {
    const [lineHeight, setLineHeight] = useState(0);
    const [rulerWidth, setRulerWidth] = useState(0);
    const [submitData, setSubmitData] = useState(undefined);

    return (
        <>
            <RulerRender submitData={submitData} />
            <RulerInput
                line={{ lineHeight, setLineHeight }}
                ruler={{ rulerWidth, setRulerWidth }}
                setSubmitData={setSubmitData}
            />
        </>
    );
}

export default App;
