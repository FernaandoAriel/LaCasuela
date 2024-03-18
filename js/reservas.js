
// Funciones JavaScript aquí...

// Función para mostrar el formulario de reserva de mesa
function mostrarFormularioMesa(numeroMesa) {
  // Crear el formulario HTML
  const formularioMesaHTML = `
    <form id="reservaFormMesa">
      <label for="numeroMesa">Número de Mesa:</label>
      <input type="text" id="numeroMesa" name="numeroMesa" value="${numeroMesa}" readonly><br><br>
      
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" name="fecha" required><br><br>
      
      <label for="hora">Hora:</label>
      <input type="time" id="hora" name="hora" required><br><br>
      
      <!-- Otros campos que consideres importantes -->
      
      <button type="button" id="siguiente" disabled>Siguiente</button>
    </form>
  `;

  // Mostrar la alerta con el formulario de reserva de mesa
  const alerta = Swal.fire({
    title: 'Reserva de Mesa',
    html: formularioMesaHTML,
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false
  });

  // Obtener los elementos del formulario
  const numeroMesaInput = document.getElementById('numeroMesa');
  const fechaInput = document.getElementById('fecha');
  const horaInput = document.getElementById('hora');
  const siguienteBtn = document.getElementById('siguiente');

  // Verificar si todos los campos están completos para habilitar el botón "Siguiente"
  const verificarCampos = () => {
    if (fechaInput.value && horaInput.value) {
      siguienteBtn.disabled = false;
    } else {
      siguienteBtn.disabled = true;
    }
  };

  // Escuchar cambios en los campos del formulario
  fechaInput.addEventListener('input', verificarCampos);
  horaInput.addEventListener('input', verificarCampos);

  // Manejar el click del botón "Siguiente"
  siguienteBtn.addEventListener('click', mostrarSegundoFormulario);
}

// Función para mostrar el segundo formulario
function mostrarSegundoFormulario() {
  // Crear el segundo formulario HTML
  const segundoFormularioHTML = `
    <form id="reservaFormDatos">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required><br><br>
      
      <label for="correo">Correo:</label>
      <input type="email" id="correo" name="correo" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"><br><br>
      
      <label for="dui">DUI:</label>
      <input type="text" id="dui" name="dui" required><br><br>
      
      <label for="tarjeta">Tarjeta de Crédito:</label>
      <input type="text" id="tarjeta" name="tarjeta" required><br><br>
      
      <!-- Otros campos que consideres importantes -->
      
      <button type="button" id="reservarBtn" disabled onclick="realizarReserva()">Reservar</button>
    </form>
  `;

  // Mostrar la alerta con el segundo formulario
  const alerta = Swal.fire({
    title: 'Información del Cliente',
    html: segundoFormularioHTML,
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false
  });

  // Obtener los elementos del segundo formulario
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');
  const duiInput = document.getElementById('dui');
  const tarjetaInput = document.getElementById('tarjeta');
  const reservarBtn = document.getElementById('reservarBtn');

  // Verificar si todos los campos del segundo formulario están completos para habilitar el botón "Reservar"
  const verificarCamposSegundoFormulario = () => {
    if (nombreInput.value && correoInput.value && duiInput.value && tarjetaInput.value) {
      reservarBtn.disabled = false;
    } else {
      reservarBtn.disabled = true;
    }
  };

  // Escuchar cambios en los campos del segundo formulario
  nombreInput.addEventListener('input', verificarCamposSegundoFormulario);
  correoInput.addEventListener('input', verificarCamposSegundoFormulario);
  duiInput.addEventListener('input', verificarCamposSegundoFormulario);
  tarjetaInput.addEventListener('input', verificarCamposSegundoFormulario);
}

// Función para realizar la reserva
function realizarReserva() {
  const formData = new FormData(document.getElementById('reservaFormDatos'));
  const formDataJSON = Object.fromEntries(formData.entries());
  console.log('Información del cliente:', formDataJSON);
  // Aquí podrías agregar el código para enviar los datos del cliente y de la reserva a tu servidor

  // Mostrar alerta de reserva realizada
  Swal.fire('Reserva Realizada', '¡Su reserva ha sido realizada con éxito!', 'success');
}

// Función para seleccionar la sucursal
function seleccionarSucursal(numeroSucursal) {
  document.getElementById('sucursalTitulo').innerText = `Sucursal ${numeroSucursal}`;
  // Puedes agregar aquí cualquier lógica adicional que desees al cambiar de sucursal
}
