
# Hi, I'm Facundo! 👋
Ejercicio de Bootcamp de Fullstack Cilsa
Testear el formulario realizado en Ejercicio 0
https://github.com/facutota/Fullstack-Bootcamp/tree/main/Ejercicio-0


## Detallar pasos para cargar el mismo

1. Puede elegir el primer valor "Nombre" con el mouse o tocando TAB y llena ese valor con numeros o letras.
  
2. Luego puedes elegir el segundo valor "Apellido" con el mouse o tocando TAB y llena ese valor con numeros o letras.
   
3. Luego puedes elegir el tercer valor "Email" con el mouse o tocando TAB y llena ese valor con numeros o letras pero debe ser con el arroba y el .com pero acepta caracteres especiales.

4. Luego puedes elegir el cuarto valor "Fecha" con el mouse o tocando TAB y llena ese valor con numeros o puedes tocar con el mouse el calendario y elegir la fecha.

5. Luego puedes elegir el quinto valor "Pais de Residencia" con el mouse o tocando TAB y al ser un dropdown list con las flechas de arriba o abajo eligis un pais, tambien puede seleccionar de la lista con el mouse.

6. Luego puedes elegir el boton enviar con el mouse o tocando TAB y luego enter para enviarlo.

7. Tambien tienes la opcion de tocar el "Cambiar tono oscuro o claro" usando el mouse o enter.
## Valores validos e invalidos permitidos en el Form
|   Campo |   Tipo    | Valor valido  | Valor invalido | Validaciones |
|---------|-----------|---------------|----------------|--------------|          
| Nombre  | TextField |Cualquier valor|Campo Vacio     |N/A           |
| Apellido| TextField |Cualquier valor|Campo Vacio     |N/A           |
| Email   | TextField |Cualquier valor|Campo Vacio     |Verifica que este el arroba y el dominio valido|
| Fecha   | Calendar  |Date           |Cualquier valor que no sea un numero - campos vacios|N/A|
| Pais Residencia|Dropdown List|Valor seleccionado de la lista|Campo Vacio|N/A|

## Exploracion del Formulario - Verificar que NVDA funcione y que el TAB recorra el formulario.

Como uso el sistema Linux, busque una alternativa al Lector NVDA por la cual utilice el lector de pantalla ORCA, la prueba con este lector dio como resultado que pudo leer todo el formulario, por lo que ha sido validado que el Form cumple con el lector de pantalla. A su vez el TAB recorrio todo el formulario de arriba hacia abajo y con el Shift + TAB se pudo regresar de abajo hacia arriba.
