export function valida_cedula(ced) {  
    var c = ced.replace(/-/g,'');  
    var cedula = c.substr(0, c.length - 1);  
    var verificador = c.substr(c.length - 1, 1);  
    var suma = 0;  
    var cedulaValida;
    if(ced.length < 11) { return false; }  
    for (let i=0; i < cedula.length; i++) {  
        let mod:any;
         if((i % 2) == 0){mod = 1} else {mod = 2}  
         let res:any = cedula.substr(i,1) * mod;  
         if (res > 9) {  
              res = res.toString();  
              let uno = res.substr(0,1);  
              let dos = res.substr(1,1);  
              res = eval(uno) + eval(dos);  
         }  
         suma += eval(res);  
    }  
    let el_numero = (10 - (suma % 10)) % 10;  
    if (el_numero == verificador && cedula.substr(0,3) != "000") {  
      cedulaValida = true;
    }  
    else   {  
     cedulaValida = false;
    }  
    return cedulaValida;
}