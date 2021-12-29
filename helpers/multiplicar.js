const fs = require('fs');

const crearArchivo = async ( base, listar, hasta ) => {
    try {
        let salida = '';
        const nombreArchivo = `tabla-${ base }`
        for (let i = 1; i <=hasta; i++) {
            salida += `${ base } x ${ i } = ${ base*i }\n`;
        }
        if (listar) {
            console.log("=====================");
            console.log(`   Tabla del: ${ base }`);
            console.log("=====================");
            console.log(salida);   
        }
        fs.writeFileSync(`./salida/${ nombreArchivo }`, salida);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }

    // fs.writeFile(`${ nombreArchivo }`, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`El archivo: ${ nombreArchivo } fue creado!!`)
    // })
}

module.exports = {
    crearArchivo,
}