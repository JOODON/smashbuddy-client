import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles/global.css"; // 애니메이션 CSS
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Tournament from "./pages/Tournament/Tournament";
import Market from "./pages/Market/Market";
import Group from "./pages/Group/Group";
import Video from "./pages/Video/Video";

function App() {
    const [activeComponent, setActiveComponent] = useState("main");

    const switchComponent = (componentName) => {
        setActiveComponent(componentName);
    };

    const componentsMap = {
        main: <Main />,
        tournament: <Tournament />,
        market: <Market />,
        group: <Group />,
        video: <Video />,
    };

    return (
        <div className="app-container">
            <Header switchComponent={switchComponent} />
            <motion.div
                key={activeComponent} // 활성화된 컴포넌트의 키

                //확대

                // initial={{ opacity: 0, scale: 0.8 }} // 시작 상태: 작은 크기
                // animate={{ opacity: 1, scale: 1 }} // 끝 상태: 원래 크기
                // exit={{ opacity: 0, scale: 0.8 }} // 종료 상태: 작은 크기
                // transition={{ duration: 0.6 }} // 애니메이션 시간

                //회전

                // initial={{ rotate: 90 }}    // 시작: 90도 회전
                // animate={{ rotate: 0 }}     // 끝: 0도, 원래 위치
                // exit={{ rotate: -90 }}      // 종료: -90도 회전
                // transition={{ duration: 0.6 }}

                //스케일
                // initial={{ scale: 0.8 }}   // 시작: 작은 크기
                // animate={{ scale: 1 }}     // 끝: 원래 크기
                // exit={{ scale: 0.8 }}      // 종료: 작은 크기
                // transition={{ duration: 0.6 }}

                // initial={{ opacity: 0, scale: 0.8 }}  // 시작: 작은 크기, 투명
                // animate={{ opacity: 1, scale: 1 }}    // 끝: 원래 크기, 불투명
                // exit={{ opacity: 0, scale: 0.8 }}     // 종료: 작은 크기, 투명
                // transition={{ type: "spring", stiffness: 150, damping: 30 }} // 스프링 효과

                //위에서 아래로 내려오는
                initial={{ y: "-100%" }}    // 시작: 화면 위로
                animate={{ y: 0 }}          // 끝: 화면 중앙으로
                exit={{ y: "100%" }}        // 종료: 화면 아래로
                transition={{ duration: 0.6 }}

                className="page-content"
                layout // 레이아웃 고정
            >
                {componentsMap[activeComponent]}
            </motion.div>
            <Footer switchComponent={switchComponent} />
        </div>
    );
}

export default App;
