import React, { useState } from 'react';
import { Player } from '../../types';

type Props = {
    players: Player[];
};

const PlayersOverviewTable: React.FC<Props> = ({players}: Props) => {
    return (
        <>
            <div className="w-100 d-none d-md-block" />
            <div className="col-6">
                {players.length != 0 ? (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th className="text-center" scope="col">Birthdate</th>
                                <th className="text-center" scope="col">Birthplace</th>
                                <th className="text-center" scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players &&
                                players
                                    .map((player) => (
                                        <tr>
                                            <td>{player.id}</td>
                                            <td>{player.name}</td>
                                            <td className="text-center">
                                                {player.birthdate}
                                            </td>
                                            <td className="text-center">
                                                {player.birthplace}
                                            </td>
                                            <td className="text-center">
                                                {player.position}
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                ) : (
                    <p>“No players added yet…</p>
                    )}
            </div>
        </>
    );
};

export default PlayersOverviewTable;