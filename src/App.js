import './styles/global.css';
import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
    useEffect(() => {
        setScreenSize();
        window.addEventListener("resize", setScreenSize);

        // 이벤트 리스너 제거
        return () => window.removeEventListener("resize", setScreenSize);
    }, []);

    return (
        <div className="app-container">
            <Footer/>
        </div>
    );
}

function setScreenSize() {
    const vh = window.innerHeight * 0.01; // 실제 뷰포트 높이의 1%
    const vw = window.innerWidth * 0.01;  // 실제 뷰포트 너비의 1%

    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
}

export default App;
