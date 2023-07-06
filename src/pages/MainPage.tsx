import {Box, useTheme} from "@mui/material";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {useState} from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";

function MainPage() {
    const theme = useTheme();
    const [loading,
        setLoading] = useState(true);
    return (
        <Box sx={{
            backgroundColor: theme.palette.secondary.main
        }}>
            <LayoutGroup>
                <AnimatePresence>
                    {loading
                        ? (
                            <motion.div key={'loader'}>
                                <Loader setLoading={setLoading} replay/>
                            </motion.div>
                        )
                        : (
                            <main>
                                <Navbar/>
                                <Hero/>
                                <About/>
                                <Experiences/>
                                <Projects/>
                                <Contact/>
                                <div
                                    style={{
                                    height: "200px",
                                    background: "linear-gradient(180deg, rgba(18,18,18,1), rgba(10,10,10,1)"
                                }}/>
                            </main>
                        )
}
                </AnimatePresence>
            </LayoutGroup>
        </Box>
    );
}

export default MainPage;