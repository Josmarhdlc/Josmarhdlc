<script>
    let settingsJson;
    let bankSettingsJson;

    async function loadJsonConfig() {
        try {
            // Se usan promesas para cargar ambos archivos JSON de forma asíncrona
            const [settingsResponse, bankSettingsResponse] = await Promise.all([
                fetch('settings.json'), // Carga settings.json
                fetch('banksettings.json') // Carga banksettings.json
            ]);

            // Se parsean las respuestas a objetos JavaScript
            settingsJson = await settingsResponse.json();
            bankSettingsJson = await bankSettingsResponse.json();

            // Una vez cargados, se crean los formularios y se inicializan los acordeones
            createFormElements(settingsJson, '', document.getElementById('settingsForm'));
            createFormElements(bankSettingsJson, '', document.getElementById('bankSettingsForm'));
            initAccordions();
        } catch (error) {
            console.error("Error loading JSON configurations:", error);
            alert("Error al cargar los archivos de configuración JSON. Asegúrate de que 'settings.json' y 'banksettings.json' existan en el mismo directorio y sean válidos.");
        }
    }

    // Cuando el DOM está completamente cargado, se inicia la carga de los JSON
    document.addEventListener('DOMContentLoaded', loadJsonConfig);
    fetch(url)
  .then(response => {
    // La 'response' es un objeto Response.
    // Necesitas determinar cómo quieres leer el cuerpo de la respuesta.
    // Por ejemplo, si esperas JSON, usa response.json().
    // Si esperas texto, usa response.text().
    // Si esperas un Blob (para imágenes/archivos), usa response.blob().
    if (!response.ok) { // Verifica si la respuesta fue exitosa (código de estado 200-299)
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // O .text(), .blob(), etc.
  })
  .then(data => {
    // 'data' es el contenido ya parseado de la respuesta (por ejemplo, el objeto JSON)
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores de la red o de la promesa
    console.error('There was a problem with the fetch operation:', error);
  });
  async function loadMySettings() {
  try {
    const response = await fetch('settings.json'); // Hacemos la solicitud para settings.json
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const settingsData = await response.json(); // Parseamos la respuesta como JSON
    console.log('Configuración cargada:', settingsData);
    // Aquí puedes usar settingsData para actualizar tu interfaz de usuario o lógica
  } catch (error) {
    console.error('Hubo un problema al cargar la configuración:', error);
  }
}

// Llama a la función para cargar la configuración cuando sea necesario, por ejemplo, al cargar la página
// document.addEventListener('DOMContentLoaded', loadMySettings);
// Lógica nueva (corregida)
if (input.type === 'checkbox') {
    label.className = 'checkbox-label';
    label.textContent = labelText;
    label.prepend(input); // Pone el checkbox dentro de la etiqueta
    group.appendChild(label); // <-- ESTA LÍNEA ES LA CORRECCIÓN CLAVE
    const labelText = translations[key] || formatKey(key);
}
</script>