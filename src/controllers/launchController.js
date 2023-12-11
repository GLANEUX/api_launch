const Launch = require('../models/launchModel');
const spaceXApiProvider = require('../providers/spaceXApiProvider');

exports.listAllLaunches = async (req,res) => {

    try {
        const launches = await Launch.find();
        res.status(200);
        res.json(launches);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur (list.launch)'})
    }
}


exports.createALaunch = async (req, res) =>{

    try{



        let allLaunches = spaceXApiProvider.getRandomLaunch();
        let response = await allLaunches;

        
        for(let i = 0; i < response.length; i++){        
            let newLaunch = new Launch(response[i]);
            let launch = newLaunch.save();
        }
        res.status(201).json({message: 'ok'});
        
    } catch (error){
        console.error(error);
        res.status(401).json({message: "requette invalide"});
    }
}




