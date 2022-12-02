import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Response, StatusMessage } from '../../types';
import classNames from 'classnames';
import PlayerService from '../../services/PlayerService';

const DeletePlayer: React.FC = () => {
    const [nameInput, setNameInput] = useState<string>("name");
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const deletePlayer = async (name: string) => {
        try {
            await  PlayerService.deletePlayer(name);
            setStatusMessages([
                { message: `${name} successfully deleted.`, type: 'success' },
            ]);
            setNameInput("name");
        } catch (error: any) {
            setStatusMessages([
                ...statusMessages,
                { message: "This player already exists", type: 'error' },
            ]);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (nameInput.trim() === '') {
            setStatusMessages([{ message: 'Please fill in a name.', type: 'error' }]);
        } else {
            deletePlayer(nameInput);
        }
    };

    return (
        <div>
        <section className="row justify-content-center">
            <p className="row justify-content-center">Delete a player</p>
            {statusMessages && (
                <ul className="list-unstyled col-4 mb-3">
                    {statusMessages.map(({ message, type }, index) => (
                        <li
                            key={index}
                            className={classNames({
                                'text-danger': type === 'error',
                                'text-success': type === 'success',
                            })}
                        >
                            {message}
                        </li>
                    ))}
                </ul>
            )}
            <div className="w-100 d-none d-md-block" />
            <div className="col-4 mb-3">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            className="m-sm-2"
                            type="text"
                            value={nameInput}
                            onChange={(event) => setNameInput(event.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    </div>);
};

export default DeletePlayer;