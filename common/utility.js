var {getDistance} = require('geolib');
module.exports = {
    CalculateDistance:(cordinatesfrom,cordinatesto)=>{
        return getDistance(cordinatesfrom,cordinatesto);
    },
    HaversineDistanceFormula:(fromlat,fromlong,tolat,tolong)=>{
        const R = 6371e3; // metres
        const φ1 = fromlat * Math.PI/180; // φ, λ in radians
        const φ2 = tolat * Math.PI/180;
        const Δφ = (tolat-fromlat) * Math.PI/180;
        const Δλ = (tolong-fromlong) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres
        return Math.round(d);
    }

}
