import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { motion } from "framer-motion"; // Importando motion da framer-motion
import { containerProps, buttonProps, factsProps } from "./AppMotion";
import { variants } from "./StylesVariants";

export const App = () => {
  const { data, loading } = useFetch(
    "https://meowfacts.herokuapp.com/?lang=por"
  );

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const selectedVariant = variants[darkMode ? "dark" : "light"];

  return (
    <motion.div
      {...containerProps}
      className={`flex justify-center items-center h-screen ${selectedVariant.container}`}
    >
      <motion.button
        {...buttonProps}
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 px-4 py-2 rounded-lg ${selectedVariant.button}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>
      {loading && <p>Loading...</p>}
      <motion.div
        {...factsProps}
        className={`shadow-lg max-w-md w-full bg-white rounded-lg p-8 ${selectedVariant.factsVariant}`}
      >
        <h1
          className={`text-3xl font-semibold mb-4 ${selectedVariant.meowFacts}`}
        >
          Fatos sobre gatinhos
        </h1>
        <div className={`${selectedVariant.data}`}>{data && <p>{data}</p>}</div>
      </motion.div>
    </motion.div>
  );
};
