import axios from '../axios';
import { Player, Response } from '../types';

const getPlayers = () => axios.get<Player[]>('/players');

const addPlayer = (name: string, birthplace: string, birthdate: string, position: string) => axios.post<Response>('/players', {name: name, birthplace: birthplace, birthdate: birthdate, position: position});

const updatePlayer = (name: string, birthplace: string, birthdate: string, position: string) => axios.put<Response>('/players', {name: name, birthplace: birthplace, birthdate: birthdate, position: position});

const deletePlayer = (name: string) => axios.delete<Response>('/players', {
    data: {
      name: name
    }
  });


const PlayerService = {
    getPlayers,
    addPlayer,
    updatePlayer,
    deletePlayer
};

export default PlayerService;