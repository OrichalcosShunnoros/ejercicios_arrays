const hotel = {
    habitaciones: {
      individual: { disponibles: 3, ocupadas: 0 },
      doble: { disponibles: 3, ocupadas: 0 },
      familiar: { disponibles: 3, ocupadas: 0 }
    },
    estadisticas: {
      reservas: []
    }
  };
  
  function hacerReserva() {
    const tipoHabitacion = prompt("Ingrese el tipo de habitación (individual/doble/familiar):").toLowerCase();
    const fumador = prompt("¿Es fumador? (si/no):").toLowerCase() === 'si';
    const numeroPersonas = parseInt(prompt("Ingrese el número de personas:"));
    const periodoEstadia = prompt("Ingrese el período de estadía (formato: DD/MM/YYYY - DD/MM/YYYY):");
    const nombre = prompt("Ingrese su nombre:");
    const paisOrigen = prompt("Ingrese su país de origen:");
    const trajoMascota = prompt("¿Trae mascota? (si/no):").toLowerCase() === 'si';

    if (hotel.habitaciones[tipoHabitacion].disponibles === 0) {
      console.log("Lo sentimos, no hay habitaciones disponibles de ese tipo.");
      return;
    }

    let limitePersonas;
    if (tipoHabitacion === 'individual') {
      limitePersonas = 2;
    } else if (tipoHabitacion === 'doble') {
      limitePersonas = 4;
    } else {
      limitePersonas = 6;
    }
  
    if (numeroPersonas > limitePersonas) {
      console.log(`Lo sentimos, la habitación ${tipoHabitacion} solo puede alojar hasta ${limitePersonas} personas.`);
      return;
    }

    if (tipoHabitacion === 'familiar' && !trajoMascota) {
      console.log("Lo sentimos, las habitaciones familiares solo están disponibles para huéspedes con mascotas.");
      return;
    }

    hotel.habitaciones[tipoHabitacion].disponibles--;
    hotel.habitaciones[tipoHabitacion].ocupadas++;

    hotel.estadisticas.reservas.push({
      tipoHabitacion,
      fumador,
      numeroPersonas,
      periodoEstadia,
      nombre,
      paisOrigen,
      trajoMascota
    });
  
    console.log("Reserva realizada con éxito.");
  }

  hacerReserva();
  
  console.log(hotel);
  