

export const EmailTemplate = ({
  firstName, lastName, email, phone, file, reason, area, message
}) => (
  <div>
    <h3> Se quieren contatar con ustedes desde la WEB</h3>
    <h1>{firstName} {lastName}</h1>
    <h3>Email: {email} </h3>
    <h3>Telefono: {phone} </h3>
    {(reason === "Trabajar con Nosotros" )  && 
    <div>
      <h3>Quiere trabajar con ustedes en el area de: {area}</h3>
      {
        file  && <h3><a href={`${file}`}>Link del CV</a>.</h3>
      }
    </div>

    }
    {
      message && <h3>Mensaje: {message}</h3>
    }
  </div>
);