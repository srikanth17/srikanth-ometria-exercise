import React from 'react';

const Table = ({ characters }) => {
    return (
        <table className="highlight">
            <thead>
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Gender</th>
            </tr>
            </thead>

            <tbody>
            {characters && characters.map((character) => (
                <tr key={character.name}>
                    <td>{character.name}</td>
                    <td>{character.height}</td>
                    <td>{character.gender}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;