const sedes = [
    { nombre: "Sede Alfa", pais: "España", direccion: "Calle Mayor 1, Madrid", gps: "40.4168, -3.7038", trabajadores: 120 },
    { nombre: "Sede Bravo", pais: "Francia", direccion: "Rue de Rivoli 24, París", gps: "48.8566, 2.3522", trabajadores: 98 },
    { nombre: "Sede Charlie", pais: "Alemania", direccion: "Alexanderplatz 7, Berlín", gps: "52.5200, 13.4050", trabajadores: 105 },
    { nombre: "Sede Delta", pais: "Italia", direccion: "Via Roma 15, Roma", gps: "41.9028, 12.4964", trabajadores: 89 },
    { nombre: "Sede Echo", pais: "Portugal", direccion: "Av. da Liberdade 101, Lisboa", gps: "38.7169, -9.1399", trabajadores: 65 },
    { nombre: "Sede Foxtrot", pais: "EEUU", direccion: "5th Avenue 420, Nueva York", gps: "40.7128, -74.0060", trabajadores: 200 },
    { nombre: "Sede Golf", pais: "México", direccion: "Av. Reforma 300, CDMX", gps: "19.4326, -99.1332", trabajadores: 150 },
    { nombre: "Sede Hotel", pais: "Argentina", direccion: "Calle Corrientes 200, Buenos Aires", gps: "-34.6037, -58.3816", trabajadores: 90 },
    { nombre: "Sede India", pais: "Chile", direccion: "Av. Providencia 101, Santiago", gps: "-33.4489, -70.6693", trabajadores: 80 },
    { nombre: "Sede Juliett", pais: "Brasil", direccion: "Av. Paulista 800, São Paulo", gps: "-23.5505, -46.6333", trabajadores: 130 },
    { nombre: "Sede Kilo", pais: "Colombia", direccion: "Cra. 7 #32-16, Bogotá", gps: "4.7110, -74.0721", trabajadores: 110 },
    { nombre: "Sede Lima", pais: "Perú", direccion: "Av. Arequipa 1234, Lima", gps: "-12.0464, -77.0428", trabajadores: 95 },
    { nombre: "Sede Mike", pais: "Uruguay", direccion: "18 de Julio 1500, Montevideo", gps: "-34.9011, -56.1645", trabajadores: 60 },
    { nombre: "Sede November", pais: "Canadá", direccion: "Queen St 123, Toronto", gps: "43.6510, -79.3470", trabajadores: 140 },
    { nombre: "Sede Oscar", pais: "Reino Unido", direccion: "Baker St 221B, Londres", gps: "51.5074, -0.1278", trabajadores: 155 },
    { nombre: "Sede Papa", pais: "Irlanda", direccion: "O'Connell St 90, Dublín", gps: "53.3498, -6.2603", trabajadores: 50 },
    { nombre: "Sede Quebec", pais: "Australia", direccion: "George St 75, Sídney", gps: "-33.8688, 151.2093", trabajadores: 170 },
    { nombre: "Sede Romeo", pais: "Nueva Zelanda", direccion: "Queen St 10, Auckland", gps: "-36.8485, 174.7633", trabajadores: 45 },
    { nombre: "Sede Sierra", pais: "Sudáfrica", direccion: "Long St 123, Ciudad del Cabo", gps: "-33.9249, 18.4241", trabajadores: 88 },
    { nombre: "Sede Tango", pais: "Egipto", direccion: "Corniche 500, El Cairo", gps: "30.0444, 31.2357", trabajadores: 70 },
    { nombre: "Sede Uniform", pais: "Marruecos", direccion: "Av. Mohamed V 45, Rabat", gps: "34.0209, -6.8416", trabajadores: 77 },
    { nombre: "Sede Victor", pais: "Japón", direccion: "Shibuya 1-2-3, Tokio", gps: "35.6895, 139.6917", trabajadores: 180 },
    { nombre: "Sede Whiskey", pais: "Corea del Sur", direccion: "Gangnam-daero 200, Seúl", gps: "37.5665, 126.9780", trabajadores: 160 },
    { nombre: "Sede X-Ray", pais: "China", direccion: "Nanjing Rd 88, Shanghái", gps: "31.2304, 121.4737", trabajadores: 210 },
    { nombre: "Sede Yankee", pais: "India", direccion: "MG Road 100, Nueva Delhi", gps: "28.6139, 77.2090", trabajadores: 175 },
    { nombre: "Sede Zulu", pais: "Rusia", direccion: "Tverskaya 15, Moscú", gps: "55.7558, 37.6173", trabajadores: 190 },
    { nombre: "Sede Águila", pais: "España", direccion: "Av. Andalucía 45, Sevilla", gps: "37.3886, -5.9823", trabajadores: 85 },
    { nombre: "Sede Búho", pais: "España", direccion: "Gran Vía 10, Valencia", gps: "39.4699, -0.3763", trabajadores: 73 },
    { nombre: "Sede Coyote", pais: "EEUU", direccion: "Main St 400, Chicago", gps: "41.8781, -87.6298", trabajadores: 198 },
    { nombre: "Sede Dragón", pais: "China", direccion: "Zhongshan Rd 99, Pekín", gps: "39.9042, 116.4074", trabajadores: 220 },
    { nombre: "Sede Escorpión", pais: "México", direccion: "Av. Insurgentes 890, CDMX", gps: "19.4326, -99.1332", trabajadores: 135 },
    { nombre: "Sede Fénix", pais: "Argentina", direccion: "Av. 9 de Julio 300, Buenos Aires", gps: "-34.6037, -58.3816", trabajadores: 102 },
    { nombre: "Sede Grifo", pais: "Grecia", direccion: "Plaka 22, Atenas", gps: "37.9838, 23.7275", trabajadores: 61 },
    { nombre: "Sede Hydra", pais: "Noruega", direccion: "Karl Johans gate 20, Oslo", gps: "59.9139, 10.7522", trabajadores: 55 },
    { nombre: "Sede Ícaro", pais: "Islandia", direccion: "Laugavegur 8, Reikiavik", gps: "64.1355, -21.8954", trabajadores: 35 },
    { nombre: "Sede Jaguar", pais: "Colombia", direccion: "Calle 100 45-67, Medellín", gps: "6.2442, -75.5812", trabajadores: 78 },
    { nombre: "Sede Kraken", pais: "Dinamarca", direccion: "Nyhavn 18, Copenhague", gps: "55.6761, 12.5683", trabajadores: 44 },
    { nombre: "Sede Leviatán", pais: "Suecia", direccion: "Drottninggatan 99, Estocolmo", gps: "59.3293, 18.0686", trabajadores: 69 },
    { nombre: "Sede Minotauro", pais: "España", direccion: "Calle Toledo 5, Toledo", gps: "39.8628, -4.0273", trabajadores: 38 },
    { nombre: "Sede Neptuno", pais: "Italia", direccion: "Via Milano 66, Milán", gps: "45.4642, 9.1900", trabajadores: 115 },
    { nombre: "Sede Olimpo", pais: "Grecia", direccion: "Av. Syngrou 20, Atenas", gps: "37.9838, 23.7275", trabajadores: 62 },
    { nombre: "Sede Pegaso", pais: "Brasil", direccion: "Rua Augusta 330, Río de Janeiro", gps: "-22.9068, -43.1729", trabajadores: 147 },
    { nombre: "Sede Quimera", pais: "Turquía", direccion: "Istiklal Caddesi 55, Estambul", gps: "41.0082, 28.9784", trabajadores: 86 },
    { nombre: "Sede Roc", pais: "Indonesia", direccion: "Jl. Sudirman 200, Yakarta", gps: "-6.2088, 106.8456", trabajadores: 113 },
    { nombre: "Sede Sombra", pais: "Filipinas", direccion: "Rizal Ave 500, Manila", gps: "14.5995, 120.9842", trabajadores: 97 },
    { nombre: "Sede Tritón", pais: "España", direccion: "Paseo Marítimo 1, Málaga", gps: "36.7213, -4.4214", trabajadores: 66 },
    { nombre: "Sede Unicornio", pais: "Polonia", direccion: "Nowy Świat 80, Varsovia", gps: "52.2297, 21.0122", trabajadores: 92 },
    { nombre: "Sede Valkiria", pais: "Finlandia", direccion: "Esplanadi 15, Helsinki", gps: "60.1695, 24.9354", trabajadores: 59 }
  ];
  
  const tbody = document.getElementById("sedes-body");
  const filterName = document.getElementById("filter-name");
  const filterCountry = document.getElementById("filter-country");
  
  function mostrarSedes() {
    const nameFilter = filterName.value.toLowerCase();
    const countryFilter = filterCountry.value.toLowerCase();
  
    tbody.innerHTML = "";
  
    sedes
      .filter(sede =>
        sede.nombre.toLowerCase().includes(nameFilter) &&
        sede.pais.toLowerCase().includes(countryFilter)
      )
      .forEach(sede => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${sede.nombre}</td>
          <td>${sede.pais}</td>
          <td>${sede.direccion}</td>
          <td>${sede.gps}</td>
          <td>${sede.trabajadores}</td>
        `;
        tbody.appendChild(fila);
      });
  }
  
  filterName.addEventListener("input", mostrarSedes);
  filterCountry.addEventListener("input", mostrarSedes);
  
  mostrarSedes();
  