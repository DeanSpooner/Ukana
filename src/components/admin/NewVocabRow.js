import React from "react";

const NewVocabRow = () => {
  return (
    <>
      <tr className="kanjiRow">
        <td className="kanjiRowKanji">
          <label htmlFor="kanjiKanji">
            <input type="text" onChange={handleInput}></input>
          </label>
        </td>
        <td>
          <label htmlFor="kanjiReading">
            <input type="text" onChange={handleInput}></input>
          </label>
        </td>
        <td>
          <label htmlFor="kanjiMeaning">
            <input type="text" onChange={handleInput}></input>
          </label>
        </td>
      </tr>
    </>
  );
};

export default NewVocabRow;
