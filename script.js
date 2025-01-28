document.addEventListener("DOMContentLoaded", function () {
    var subTotalNota = 0
    var impuestos = 0
    var totalNota = 0
    // Datos de la nota
    const datos = {
        proyecto: "QUIERES SER MI NOVIA",
        director: "",
        decorador: "PABLO GARCIA",
        asistente: "",
        rento: "14-11-2024",
        periodo: "5 DÍAS",
        devolucion: "19-11-2024"
    };
    document.getElementById("proyecto").innerText = datos.proyecto;
    document.getElementById("director").innerText = datos.director;
    document.getElementById("decorador").innerText = datos.decorador;
    document.getElementById("asistente").innerText = datos.asistente;
    document.getElementById("rento").innerText = datos.rento;
    document.getElementById("periodo").innerText = datos.periodo;
    document.getElementById("devolucion").innerText = datos.devolucion;

    // Items de la nota
    const items = [
        {
            id: '',
            nombre: 'Silla de Rattan',
            idCategoria: '',
            categoria: '',
            sku: 'SILL-RATTAN-001',
            precio: 1000.00,
            existencia: '',
            descripcion: '',
            disponibles: '',
            notas: '',
            cantidad: 2,
            uid: 0
        },
        {
            id: '',
            nombre: 'Mesa de Centro de Madera',
            idCategoria: '',
            categoria: '',
            sku: 'MESA-MADERA-002',
            precio: 4500.00,
            existencia: '',
            descripcion: '',
            disponibles: '',
            notas: '',
            cantidad: 1,
            uid: 0
        },
        {
            id: '',
            nombre: 'Lámpara de Pie Moderna',
            idCategoria: '',
            categoria: '',
            sku: 'LAMP-MOD-003',
            precio: 1200.00,
            existencia: '',
            descripcion: '',
            disponibles: '',
            notas: '',
            cantidad: 1,
            uid: 0
        },
        {
            id: '',
            nombre: 'Estantería de Metal y Madera',
            idCategoria: '',
            categoria: '',
            sku: 'ESTANT-METAL-004',
            precio: 2800.00,
            existencia: '',
            descripcion: '',
            disponibles: '',
            notas: '',
            cantidad: 1,
            uid: 0
        },
        {
            id: '',
            nombre: 'Cojín Decorativo Azul',
            idCategoria: '',
            categoria: '',
            sku: 'COJIN-AZUL-005',
            precio: 350.00,
            existencia: '',
            descripcion: '',
            disponibles: '',
            notas: '',
            cantidad: 3,
            uid: 0
        }
    ];

    const contenedorItems = document.getElementById("tabla-items");
    items.forEach((item, index) => {
        const row = document.createElement("tr");
        var subTotalItem = item.cantidad * item.precio
        subTotalNota += subTotalItem
        row.innerHTML = `
            <td><p class="numero">${index + 1}</p></td>
            <td><p class = "cantidad">${item.cantidad}</p></td>
            <td><p class = "codigo">${item.sku}</p></td>
            <td><p class = "descripcion">${item.nombre}</p></td>
            <td><p class = "subtotal"> $${subTotalItem}</p></td>
        `;

        contenedorItems.appendChild(row);
    });
    totalNota = subTotalNota + impuestos

    const contenedorTotal = document.getElementById("total");
    contenedorTotal.textContent = totalNota

    const contenedorSubTotal = document.getElementById("subtotal");
    contenedorSubTotal.textContent =subTotalNota
});



