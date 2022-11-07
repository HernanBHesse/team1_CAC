import "./style.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";

function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Registro de tu local</h3>
      <div className="nombre_negocio">
        <TextField
          id="outlined-helperText"
          label="Nombre del negocio"
          required
        />
        <TextField id="outlined-helperText" label="Tipo de negocio" required />
        <TextField
          id="outlined-helperText"
          label="Cantidad de sucursales"
          required
        />
        <TextField id="outlined-helperText" label="Nombre" required />
        <TextField id="outlined-helperText" label="Apellido" required />
        <TextField
          id="outlined-helperText"
          label="Teléfono de contacto"
          required
        />
        <TextField
          id="outlined-helperText"
          label="Correo electrónico"
          required
        />
        <TextField
          id="outlined-helperText"
          label="Método de contacto preferido"
          required
        />
        <TextField
          id="outlined-helperText"
          label="Dirección del local"
          required
        />
        <Container sx={{ width: 9 / 10 }}>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48318.49001020048!2d-62.99646614999999!3d-40.808067599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1667835303465!5m2!1ses-419!2sar"
              className="mapForm"
            ></iframe>
          </Box>
        </Container>

        <TextField
          id="outlined-helperText"
          label="Referencias de ubicación"
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ m: 3, width: 85 / 100 }}
          color="error"
        >
          Comenzar
        </Button>
      </div>
    </Box>
  );
}

const RegistroNegocios = () => {
  return (
    <>
      <main className="mainRegister">
        <section className="mainRegister__sectionRegister">
          <div className="mainRegister__sectionRegister__bgImgage"></div>
          <div className="mainRegister__sectionRegister__registerContainer">
            <figure className="mainRegister__sectionRegister__registerContainer__logo">
              <img
                src="https://socios.pedidosya.com.ar/resource/1651482548000/PedidosYaResource/PedidosYaResource/images/logo-pedidosya.svg"
                alt="logo PedidosYa"
              />
            </figure>
            <div className="mainRegister__sectionRegister__registerContainer__row">
              <div className="mainRegister__sectionRegister__registerContainer__colText">
                <div className="mainRegister__sectionRegister__registerContainer__text">
                  <h1 className="registerContainer__text__title">
                    <span>
                      Súmate a la app de delivery online más grande de América
                      Latina<br></br>¡
                      <span className="brand_color">10% de comisión</span>
                      &nbsp;durante los primeros 30 días!
                    </span>
                  </h1>
                  <h2 className="registerContainer__text__subTitle">
                    <span>
                      Aplica únicamente para socios comerciales que completen el
                      proceso de registro exitosamente.
                    </span>
                  </h2>
                </div>
              </div>
              <div className="mainRegister__sectionRegister__registerContainer__colForm">
                <div className="registerContainer__Form">
                  <FormPropsTextFields></FormPropsTextFields>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegistroNegocios;
