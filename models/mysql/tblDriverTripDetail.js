'use strict';

module.exports = (sequelize, { Model, DataTypes }) => {
    class tblDriverTripDetail extends Model { }

    tblDriverTripDetail.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        trip_id: {
            type: DataTypes.STRING
        },
        rider_id: {
            type: DataTypes.INTEGER
        },
        driver_id: {
            type: DataTypes.INTEGER
        }, 
        vehicle_id: {
            type: DataTypes.INTEGER
        },
        rider_id: {
            type: DataTypes.STRING
        },
        created_time: {
            type: DataTypes.DATE
        },
        client_id: {
            type: DataTypes.INTEGER
        },
        modified_time: {
            type: DataTypes.DATE
        },
        trip_end_time: {
            type: DataTypes.DATE
        },
        trip_status:{
            type: DataTypes.INTEGER
        },
        trip_source:{
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'tbl_driver_trip_detail',
        freezeTableName: true,
        createdAt:false,
        updatedAt:false
    });

    return tblDriverTripDetail;
};
