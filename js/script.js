document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const table = document.getElementById('contactTable').querySelector('tbody');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado (recargar la página)

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            // Crear una nueva fila en la tabla con los datos del formulario
            const row = table.insertRow();
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editRow(this)">✔️</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">🗑️</button>
                </td>
            `;
            form.reset(); // Limpiar el formulario después de agregar los datos
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Función para editar la fila seleccionada
    window.editRow = function(button) {
        const row = button.parentElement.parentElement; // Obtener la fila de la tabla
        const name = row.cells[0].textContent; // Obtener el nombre
        const email = row.cells[1].textContent; // Obtener el correo electrónico

        // Rellenar el formulario con los datos de la fila seleccionada
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        // Eliminar la fila actual para que se pueda actualizar
        table.deleteRow(row.rowIndex - 1);
    };

    // Función para eliminar la fila seleccionada
    window.deleteRow = function(button) {
        const row = button.parentElement.parentElement; // Obtener la fila de la tabla
        table.deleteRow(row.rowIndex - 1); // Eliminar la fila
    };
});
