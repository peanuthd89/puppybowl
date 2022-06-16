// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2202-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
import {renderSinglePlayer} from "./renderHelpers"

export const fetchAllPlayers = async () => {
try{
    const response  = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if(result.error) throw result.error;
    return result.data.players;

} catch (err) {
    console.error('uh oh,trouble fetching players', err);
}
};

export const fetchSinglePlayer = async (playerId) => {
try {
    const response = await fetch(
        `${APIURL}/players/${playerId}`
    );
    const result = await response.json();
    renderSinglePlayer(result.data.player)
    console.log(result);
}catch(err){
    
console.error(err);
    
}
};

export const addNewPlayer = async (playerObj) => {
function addNewPlayer(event){
    log.player = `add new player  ${result.data}`;
}

};

export const removePlayer = async (playerId) => {

};
