import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Player } from '../../types';
import PlayerService from '../../services/PlayerService';
import PlayersOverviewTable from './PlayersOverviewTable';


const PlayersOverview: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = async () => {
        const res: AxiosResponse<Player[]> = await PlayerService.getPlayers();
        setPlayers(res.data);
    };

    return (
        <section className="row justify-content-center">
            <PlayersOverviewTable
                players={players}
            />
        </section>
    );
};

export default PlayersOverview;