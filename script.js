var mensaje = document.getElementById('msj');
  var outputMsj = document.getElementById('outputMsj');
  var output = document.getElementById('output');
  const btnEncrip = document.getElementById('btnEncriptar');
  const btnDesencrip = document.getElementById('btnDesencriptar');
  const placeholder = document.getElementById('placeholder');
  const btnCopy = document.getElementById('btnCopiar');


  function encriptar() {
    var mensaje = msj.value;
    return textoCifrado = mensaje.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
  }

  function desencriptar() {
    var mensaje = msj.value;
    return textoDecifrado = mensaje.replaceAll('enter', "e").replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
  }

  function printEncrip() {
    if (mensaje.value == "") {
      alert("Introduzca su mensaje");
      mensaje.focus();
      return false;
    }
    else {
      if (mensaje.value.match(/^[A-Za-z\s]*$/)) {

        placeholder.classList.add('hide');
        output.classList.add('visible');
        encriptar()
      outputMsj.innerHTML = textoCifrado;
      }
      else {
        alert("Su mensaje no debe contener acentos o caracteres especiales.");
        mensaje.focus();
      }
    }
  }

  function printDesencrip() {
    if (mensaje.value == "") {
      alert("Introduzca su mensaje");
      mensaje.focus();
      return false;
    }
    else {
      if (mensaje.value.match(/^[A-Za-z\s]*$/)) {

        placeholder.classList.add('hide');
        output.classList.add('visible');
        desencriptar();
        outputMsj.innerHTML = textoDecifrado;
      }
      else {
        alert("Su mensaje no debe contener acentos o caracteres especiales.");
        mensaje.focus();
      }
    }
  }

  function copyMsj() {
    outputMsj.focus();
    document.execCommand('SelectAll');
    document.execCommand('copy');
    alert("Mensaje copiadp");
    mensaje.value = "";
    mensaje.focus();
    placeholder.classList.remove('hide');
    output.classList.remove('visible');
  }

  btnDesencrip.addEventListener('click', printDesencrip);
  btnEncrip.addEventListener('click', printEncrip);
  btnCopy.addEventListener('click', copyMsj);