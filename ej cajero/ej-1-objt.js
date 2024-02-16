const database = {
    clients: [
      { id: 123456789, pin: 1234, accounts: { savings: 100000, checking: 500000 } },
    ]
  };
  
  let cajeroEncendido = true;
  
  function validarPIN(clienteID, pin) {
    const cliente = database.clients.find(cliente => cliente.id === clienteID);
    return cliente && cliente.pin === pin;
  }
  
  function realizarRetiro(clienteID, cantidad) {
    const cliente = database.clients.find(cliente => cliente.id === clienteID);
    if (!cliente) {
      return "Cliente no encontrado.";
    }
  
    const cuenta = prompt("Seleccione la cuenta para el retiro (savings/checking):").toLowerCase();
    if (!cliente.accounts.hasOwnProperty(cuenta)) {
      return "Cuenta no válida.";
    }
  
    if (cantidad % 50000 !== 0) {
      return "La cantidad debe ser un múltiplo de 50000.";
    }
  
    if (cantidad > cliente.accounts[cuenta]) {
      return "Fondos insuficientes.";
    }
  
    cliente.accounts[cuenta] -= cantidad;
    return `Retiro exitoso. Puede tomar $${cantidad} de la bandeja principal.`;
  }

  function realizarDeposito(clienteID, cuenta, monto, tipo) {
    const cliente = database.clients.find(cliente => cliente.id === clienteID);
    if (!cliente) {
      return "Cliente no encontrado.";
    }
  
    if (!cliente.accounts.hasOwnProperty(cuenta)) {
      return "Cuenta no válida.";
    }
  
    if (tipo !== "efectivo" && tipo !== "cheque") {
      return "Tipo de depósito no válido.";
    }
  
    cliente.accounts[cuenta] += monto;
    return `Depósito de ${tipo} de $${monto} realizado exitosamente en la cuenta ${cuenta}.`;
  }
  
  function realizarTransferencia(origenID, destinoID, monto) {
    const origenCliente = database.clients.find(cliente => cliente.id === origenID);
    const destinoCliente = database.clients.find(cliente => cliente.id === destinoID);
    if (!origenCliente || !destinoCliente) {
      return "Cliente(s) no encontrado(s).";
    }
  
    if (monto <= 0) {
      return "Monto de transferencia no válido.";
    }
  
    origenCliente.accounts.checking -= monto;
    destinoCliente.accounts.checking += monto;
    return `Transferencia de $${monto} realizada exitosamente de la cuenta de ${origenID} a la cuenta de ${destinoID}.`;
  }
  
  function consultarSaldo(clienteID, cuenta) {
    const cliente = database.clients.find(cliente => cliente.id === clienteID);
    if (!cliente) {
      return "Cliente no encontrado.";
    }
  
    if (!cliente.accounts.hasOwnProperty(cuenta)) {
      return "Cuenta no válida.";
    }
  
    return `Saldo en la cuenta ${cuenta}: $${cliente.accounts[cuenta]}.`;
  }
  
  function manejarTransacciones() {
    const clienteID = parseInt(prompt("Por favor, ingrese su documento de identidad:"));
    const pin = parseInt(prompt("Ingrese su PIN de 4 dígitos:"));
  
    if (!validarPIN(clienteID, pin)) {
      alert("PIN inválido. Por favor, inténtelo de nuevo.");
      return;
    }
  
    let continuar = true;
  
    while (continuar) {
      const opcion = parseInt(prompt(
        "Seleccione una opción:\n" +
        "1. Realizar retiro de efectivo\n" +
        "2. Realizar depósito\n" +
        "3. Realizar transferencia\n" +
        "4. Consultar saldo\n" +
        "5. Salir"
      ));
  
      switch (opcion) {
        case 1:
          const cantidadRetiro = parseInt(prompt("Ingrese la cantidad a retirar (múltiplo de $50000):"));
          alert(realizarRetiro(clienteID, cantidadRetiro));
          break;
        case 2:
          const cuentaDeposito = prompt("Seleccione la cuenta para el depósito (savings/checking):").toLowerCase();
          const montoDeposito = parseInt(prompt("Ingrese el monto del depósito:"));
          const tipoDeposito = prompt("Ingrese el tipo de depósito (efectivo/cheque):").toLowerCase();
          alert(realizarDeposito(clienteID, cuentaDeposito, montoDeposito, tipoDeposito));
          break;
        case 3:
          const destinoTransferencia = parseInt(prompt("Ingrese el documento de identidad del destinatario:"));
          const montoTransferencia = parseInt(prompt("Ingrese el monto a transferir:"));
          alert(realizarTransferencia(clienteID, destinoTransferencia, montoTransferencia));
          break;
        case 4:
          const cuentaSaldo = prompt("Seleccione la cuenta para consultar saldo (savings/checking):").toLowerCase();
          alert(consultarSaldo(clienteID, cuentaSaldo));
          break;
        case 5:
          continuar = false;
          break;
        default:
          alert("Opción no válida. Por favor, seleccione una opción válida.");
      }
    }
  }

  function cambiarEstadoCajero(estado) {
    if (estado === "encender") {
      cajeroEncendido = true;
      console.log("Cajero automático encendido.");
    } else if (estado === "apagar") {
      cajeroEncendido = false;
      console.log("Cajero automático apagado.");
    } else {
      console.log("Por favor, proporcione un estado válido (encender/apagar).");
    }
  }

  manejarTransacciones();
  