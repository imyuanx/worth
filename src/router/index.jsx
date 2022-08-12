import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";
import Home from "./Home";

function RouterList() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="step1" element={<Step1 />} />
                <Route path="step2" element={<Step2 />} />
                <Route path="step3" element={<Step3 />} />
                <Route path="result" element={<Result />} />
            </Route>
        </Routes>
    );
}

export default RouterList;
