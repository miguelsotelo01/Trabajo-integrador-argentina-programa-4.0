//validacion de los campos del formulario
$(document).ready(function() {
  $('#formulario-contrato').validate({
    rules: {
      nombre: {
        required: true
      },
      tipo: {
        required: true
      },
      presupuesto: {
        required: true,
        number: true
      },
      tiempo: {
        required: true,
      },
      Funcionalidades: {
        required: true
      },
      Integración: {
        required: true
      },
      diseño: {
        required: true
      },
      plataforma: {
        required: true
      },
      requisito:{
        required: true
      }
    },
    messages: {
      nombre: {
        required: 'Por favor, ingrese el nombre de su empresa'
      },
      tipo: {
        required: 'Por favor, ingrese el tipo de aplicación que desea desarrollar'
      },
      presupuesto: {
        required: 'Por favor, ingrese su presupuesto',
        number: 'Por favor, ingrese un número válido'
      },
      tiempo: {
        required: 'Por favor, ingrese el plazo de tiempo que tiene para el desarrollo de la aplicación',
        number: 'Por favor, ingrese un número válido'
      },
      Funcionalidades: {
        required: 'Por favor, ingrese las funcionalidades que desea incluir en la aplicación'
      },
      Integración: {
        required: 'Por favor, ingrese si desea que la aplicación tenga algún tipo de integración con otras plataformas o servicios'
      },
      diseño: {
        required: 'Por favor, ingrese su diseño preferido para la aplicación'
      },
      plataforma: {
        required: 'Por favor, ingrese si desea que la aplicación esté disponible en una plataforma específica'
      },
      requisito:{
        required: 'Por favor, ingrese si desea que la aplicación tenga algún tipo de requisito con otras plataformas o servicios'
      }
    },
    submitHandler: function(form) {
      // Obtener los valores de los campos del formulario
var nombre = $('#nombreContrato').val();
var tipo = $('#tipo').val();
var presupuesto = $('#presupuesto').val();
var tiempo = $('#tiempo').val();
var funcionalidades = $('#funcionalidades').val();
var integracion = $('#Integración').val();
var diseño = $('#diseño').val();
var plataforma = $('#plataforma').val();
var requisitos = $('#requisito').val();

//validaciones de los campos de inputs
if(nombre.length < 2){
  alert("ingrese un nombre valido");
  return false;
}

if(tipo.length < 2){
  alert("ingrese un tipo de aplicacion valido");
  return false;
}

if(presupuesto.length <= 1){
  alert("ingrese un presupuesto valido");
  return false;
}

if(tiempo.length < 2){
  alert("ingrese un plazo de tiempo valido");
  return false;
}

if(funcionalidades.length < 2){
  alert("ingrese una funcionalidad valida");
  return false;
}


if(integracion.length < 2){
  alert("ingrese una integracion valida");
  return false;
}

if(diseño.length < 2){
  alert("ingrese un diseño valido");
  return false;
}

if(plataforma.length < 2){
  alert("ingrese una plataforma valida para su proyecto");
  return false;
}

if(requisitos.length < 2){
  alert("ingrese un requisito valido");
  return false;
}

// Crear el mensaje de resumen
var resumen = '\nRESUMEN: \nNombre de la empresa: ' + nombre + '\n';
resumen += 'Tipo de aplicación que desea encargar: ' + tipo + '\n';
resumen += 'Tiempo disponible para desarrollar la app: ' + tiempo + '\n';
resumen += 'La integración que necesita es: ' + integracion + '\n';
resumen += 'Diseño preferido: ' + diseño + '\n';
resumen += 'Plataforma precisa la app: ' + plataforma + '\n';
resumen += 'Requisitos adicionales: ' + requisitos;

alert(resumen);

// Enviar el formulario
form.submit();;

}
});
});
//funcion para ocultar los paso 2 y 3
$(document).ready(function() {
$('.form-section').hide(); // oculta todas las secciones al cargar la página
$('.current').show();     // muestra la sección actual
$('button[data-target]').click(function() {
  var target = $(this).data('target');
  $('.form-section').hide();
  $(target).show();
});
});
//funcion del PDF
/*$(document).ready(function() {
$('#generarPDF').click(function() {
    generatePDF();
});
});*/
function generatePDF() {
// Obtener valores del formulario
var nombrePDF = $('#nombreContrato').val();
var tipoPDF = $('#tipo').val();
var presupuestoPDF = $('#presupuesto').val();
var tiempoPDF = $('#tiempo').val();
var funcionalidadesPDF = $('#funcionalidades').val();
var integracionPDF = $('#Integración').val();
var disenoPDF = $('#diseño').val();
var plataformaPDF = $('#plataforma').val();
var requisitosPDF = $('#requisito').val();

// Crear contenido para el PDF
var contenido = 'Nombre de la empresa: ' + nombrePDF + '\n' +
                'Tipo de aplicación que desea desarrollar: ' + tipoPDF + '\n' +
                'Presupuesto para el desarrollo de la aplicación: ' + presupuestoPDF + '\n' +
                'Plazo de tiempo para el desarrollo de la aplicación: ' + tiempoPDF + '\n' +
                'Funcionalidades: ' + funcionalidadesPDF + '\n' +
                'Integración con otras plataformas o servicios: ' + integracionPDF + '\n' +
                'Diseño preferido para la aplicación: ' + disenoPDF + '\n' +
                'Plataforma específica (iOS, Android, etc.): ' + plataformaPDF + '\n' +
                'Requisitos adicionales para la plataforma de la aplicación: ' + requisitosPDF;

// Crear PDF
var doc = new jsPDF();
doc.text(contenido, 10, 10);
doc.save('formulario_contrato.pdf');
}