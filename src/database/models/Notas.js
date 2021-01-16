module.exports = function (sequelize,dataTypes){
    let alias = 'Notas';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type: dataTypes.STRING,
            notNull:true
        },
        message:{
            type: dataTypes.STRING,
            notNull:true
        }
    };
    let config = {
        tableName:"notes",
        timestamps:false
    }

    const Notas = sequelize.define(alias,cols,config);
    return Notas;
}