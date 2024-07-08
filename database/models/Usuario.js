module.exports = (sequelize, dataTypes) =>{
    let alias = 'Usuarios'
    let columns = {
        idUsuario: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        edad: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER(15),
            allowNull: false
        },
        viajesPendientes: {
            type: dataTypes.INTEGER(4),
            allowNull: true
        },
        viajesRealizados: {
            type: dataTypes.INTEGER(4),
            allowNull: true
        },
        puntaje: {
            type: dataTypes.INTEGER(4),
            allowNull: true
        },
    }
    let config = {
        tableName: 'usuario',
        timestamps: false  
    }
    const Usuario = sequelize.define(alias, columns, config)
    /*Usuario.associate= function(models){
        Usuario.hasOne(models.vehiculos, {
            as:"vehiculos",
            foreignKey: "idUsuario",
        })
    }
   */
    
    return Usuario
}