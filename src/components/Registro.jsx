import {useState} from 'react';

function Registro() {
  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email"/>
      </div>
      <div>
        <label>Telefono:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" placeholder='***********'/>
      </div>
      <div>
        <label>Confirmar password:</label>
        <input type="text" placeholder='***********'/>
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Registro;
