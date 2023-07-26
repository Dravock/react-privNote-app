const connDB = require('./conDB');

let userQuerry ={}

userQuerry.getAllData = () =>{
    return new Promise((resolve, reject) =>{
        console.log('ich bin hier')
        connDB.query('SELECT * FROM user;', (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

userQuerry.getOneRow = (id) =>{
    return new Promise((resolve, reject) =>{
        connDB.query('SELECT * FROM user WHERE id=?;',[id],(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

userQuerry.insertRow = (rawObj) =>{
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

userQuerry.upDateRow = (rawObj) =>{
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

userQuerry.deleteRow = (rawObj) =>{
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

module.exports=userQuerry;