import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Response, StatusMessage } from '../../types';
import classNames from 'classnames';
import PlayerService from '../../services/PlayerService';

const AddPlayer: React.FC = () => {
    const [nameInput, setNameInput] = useState<string>("name");
    const [birthdateInput, setBirthdateInput] = useState<string>("1987-6-24");
    const [birthplaceInput, setBirthplaceInput] = useState<string>("Argentina");
    const [positionInput, setPositionInput] = useState<string>("Attacker");
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const addPlayer = async (name: string, birthplace: string, birthdate: string, position: string) => {
        try {
            await  PlayerService.addPlayer(name, birthplace ? birthplace : "", birthdate ? birthdate : "", position ? position : "");
            setStatusMessages([
                { message: `${name} successfully added.`, type: 'success' },
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
            addPlayer(nameInput, birthplaceInput, birthdateInput, positionInput);
        }
    };

    return (
        <div>
        <section className="row justify-content-center">
            <p className="row justify-content-center">Add a player</p>
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
                    <label>
                        Birthplace:
                        <input
                            className="m-sm-2"
                            type="text"
                            value={birthplaceInput}
                            onChange={(event) => setBirthplaceInput(event.target.value)}
                        />
                    </label>
                    <label>
                        Birthdate:
                        <input
                            className="m-sm-2"
                            type="text"
                            value={birthdateInput}
                            onChange={(event) => setBirthdateInput(event.target.value)}
                        />
                    </label>
                    <label>
                        Position:
                        <input
                            className="m-sm-2"
                            type="text"
                            value={positionInput}
                            onChange={(event) => setPositionInput(event.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    </div>);
};

export default AddPlayer;