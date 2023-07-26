const connDB = require('./conDB');

let startQuerry={}

startQuerry.getAllData = () =>{
    return new Promise((resolve, reject) =>{
        connDB.query('SELECT * FROM user;', (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

startQuerry.getOneRow = (id) =>{
    return new Promise((resolve, reject) =>{
        connDB.query('SELECT * FROM user WHERE id=?;',[id],(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

startQuerry.insertRow = (rawObj) =>{
    const obj =rawObj[0];
    const arrObj =[obj.vorname,obj.nachname, obj.email, obj.passwort]
    
    return new Promise((resolve, reject) =>{
        connDB.query('INSERT INTO `user`( `vorname`, `nachname`, `email`, `passwort`) VALUES (?);',[arrObj],(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve('hat geklappt');
        });
    });
};

startQuerry.upDateRow = (rawObj) =>{
    const obj =rawObj[0];
    const arrObj =[obj.vorname,obj.nachname, obj.email, obj.passwort]
    
    return new Promise((resolve, reject) =>{
        connDB.query('UPDATE `user` SET `vorname`= ? WHERE id = ?',(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve('hat geklappt');
        });
    });
} 

startQuerry.deleteRow = (rawObj) =>{
    const delId = rawObj[0].id
    return new Promise((resolve, reject) =>{
        connDB.query('DELETE FROM `user` WHERE id= ?',[delId],(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve('Eintrag entfernt');
        });
    });
}


module.exports=startQuerry