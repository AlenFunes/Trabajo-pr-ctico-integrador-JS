function calcular(operacion)
{
    var cantidad=parseInt(document.getElementById('cantidad').value);
    var categoria=(document.getElementById('categoria').value);

    switch(operacion)
    {
        case 'resumen':
            if(categoria == "Estudiante")
            document.getElementById('result').value='Total a Pagar: $'+(200-(cantidad*200*0.80));
            if(categoria == "Junior")
            document.getElementById('result').value='Total a Pagar: $'+(200-(cantidad*200*0.50));
            if(categoria == "Trainee")
            document.getElementById('result').value='Total a Pagar: $'+(200-(cantidad*200*0.15));
            break;

    }
}