module.exports = (sequelize, dataTypes) =>{
    let alias = 'Vehiculos'
    let columns = {
        idVehiculo: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        modelo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        patente: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        capacidad: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        },
        
        itv: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        seguro: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        sedula: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
    }
    let config = {
        tableName: 'vehiculo',
        timestamps: false  
    }
    const Vehiculo = sequelize.define(alias, columns, config)
    Vehiculo.associate= function(models){
        Vehiculo.belongsTo(models.Usuarios, {
            as:"usuarios",
            foreignKey: "idUsuario",
        })
    }
    
    return Vehiculo
}