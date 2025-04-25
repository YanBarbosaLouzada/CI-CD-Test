import React, { useEffect, useState } from "react";
import { useGetAPIDATA } from "../../hooks/getAPIDATA.jsx";
import SorveteCard from "../../components/sorveteCard/SorveteCard.jsx";
import Popup from "../../components/popup/Popup.jsx";
import "./Info.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Info() {
  const [sorveteNome, setSorveteNome] = useState("");
  const [sorveteDigitado, setSorveteDigitado] = useState("");
  const { sorveteData, loading, error } = useGetAPIDATA(sorveteNome);

  
  const [popupContent, setPopupContent] = useState({ message: "", color: "" });
  const [showPopup, setShowPopup] = useState(false);



  function showAndHidePopup(message, color) {
    setPopupContent({ message, color });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  useEffect(() => {
    if (!loading) {
      if (error) {
        showAndHidePopup("Erro ao buscar sorvete", "warning");
      } else if (sorveteData) {
        showAndHidePopup("Sorvete encontrado!", "success");
      }
    }
  }, [loading, error, sorveteData]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSorveteDigitado(e.target.value);
  };

  function BuscarSorverte(e) {
    e.preventDefault();
    setSorveteNome(sorveteDigitado);
  }

  return (
    <div className="mainProduct">
      <div className="setInput">

        <Paper
          component="form"
          sx={{
            p: "6px 10px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: 50,
            boxShadow: 3,
            border: "1px solid #ddd",
            transition: "all 0.3s ease-in-out",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Digite o nome do sorvete..."
            value={sorveteDigitado}
            onChange={handleInputChange}
            inputProps={{ style: { fontSize: "16px" } }}
          />

          <IconButton
            sx={{
              p: "10px",
              color: "#ff9800",
              "&:hover": { color: "#e68900" },
            }}
            onClick={BuscarSorverte}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

      </div>

      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao buscar sorvete. Erro: {error}</p>}

      <div className="content" style={{ width: "90%" }}>
        {Array.isArray(sorveteData) ? (
          <div className="sorvetes">
            {sorveteData.map((s) => (
              <SorveteCard key={s.id} {...s}></SorveteCard>
            ))}
          </div>
        ) : (
          sorveteData && <div>Sorvete não encontrado!</div>
        )}
        {showPopup ? (
          <Popup message={popupContent.message} color={popupContent.color} />
        ) : null}
      </div>
    </div>
  );
}

export default Info;
