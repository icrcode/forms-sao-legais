// validaDados.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
      const requiredFields = ['nome', 'idade', 'sexo', 'email'];
  
      requiredFields.forEach(function (fieldId) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
          isValid = false;
          field.classList.add('input-error');
        } else {
          field.classList.remove('input-error');
        }
      });
  
      if (!isValid) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios!');
      }
    });
  });
  