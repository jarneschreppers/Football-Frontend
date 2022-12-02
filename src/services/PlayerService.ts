import axios from '../axios';
import { Player, Response } from '../types';

const token = 'eyJ4NXQiOiJOMkpqTWpOaU0yRXhZalJrTnpaalptWTFZVEF4Tm1GbE5qZzRPV1UxWVdRMll6YzFObVk1TlEiLCJraWQiOiJNREpsTmpJeE4yRTFPR1psT0dWbU1HUXhPVEZsTXpCbU5tRmpaalEwWTJZd09HWTBOMkkwWXpFNFl6WmpOalJoWW1SbU1tUTBPRGRpTkRoak1HRXdNQV9SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhZG1pbiIsImF1dCI6IkFQUExJQ0FUSU9OIiwiYXVkIjoiYzFSS3dUOTRaTUd1S3JVSm4zbFNiQUJPVko0YSIsIm5iZiI6MTY2OTQ2OTIxNSwiYXpwIjoiYzFSS3dUOTRaTUd1S3JVSm4zbFNiQUJPVko0YSIsInNjb3BlIjoiZGVmYXVsdCIsImlzcyI6Imh0dHBzOlwvXC9sb2NhbGhvc3Q6OTQ0M1wvb2F1dGgyXC90b2tlbiIsImV4cCI6MTcwNTQ2OTIxNSwiaWF0IjoxNjY5NDY5MjE1LCJqdGkiOiI1OGIzZTgzZi04M2JkLTQwZGQtYTQxOS03NWY5YjJhYjY5OWUifQ.h5FWm2UOXmsZ9dxmhFlmo1K-wOxC9z7nEn7aULd9fFsi55W3zRxIi5RF6vSvznvOSjUfc6VUj_-AfX1x6XEiQOl6pDVMbSwe8SaGHaGtopUAgsettiVwa4ZsCUD-uSC2Sbtdq1vGUGOxKhls9f-CaIBZZ5CXbb2WFla7z7Fdq9myZogmOVDZFCZS7tDAiVpokq74JK8-5yWSJT2k7S7G68C0CuOWfPpyeOVvUf8vABOFZVkaWkNmM2XHqHtZKd4Xrlg-3fMBw7UsnckJpQOmiQ29PASX2lT8iRCW2ROBjN_BTt9uFG7tZhk_eU2nDXYUqrvAj_VCSIHk-xHFaVBdCA';

const config = {
    headers: { Authorization: 'Bearer ' + token}
};

const getPlayers = () => axios.get<Player[]>('/football/v1/players', config);

const addPlayer = (name: string, birthplace: string, birthdate: string, position: string) => axios.post<Response>('/football/v1/players', {name: name, birthplace: birthplace, birthdate: birthdate, position: position}, config);

const updatePlayer = (name: string, birthplace: string, birthdate: string, position: string) => axios.put<Response>('/football/v1/players', {name: name, birthplace: birthplace, birthdate: birthdate, position: position}, config);

const deletePlayer = (name: string) => axios.delete<Response>('/football/v1/players', {
    headers: {
      Authorization: 'Bearer ' + token
    },
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