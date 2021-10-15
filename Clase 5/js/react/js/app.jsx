let alumnos={
    nombre:"Lorena",
    edad:18,
    mostrar:()=>{
        return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
    }

};
let saludo=`Hola, ${alumnos.nombre} como estan?`;
ReactDOM.render(
    <div className="row">
        <div className="col6 bg-primary text-white p-4">
        Aqui estamos dentro de react {alumnos.mostrar()}
        </div>
         
    </div>,
    document.getElementById('root')
    
); 