import React from "react";
import "../styles/GenkiTable.css";

const GenkiVocabTable = ({ vocab }) => {
  return (
    <div className="GenkiVocabTable">
      <h2>Vocabulary</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th className="vocabWordHead" name="vocabWord">
              Word
            </th>
            <th className="vocabReadingHead" name="vocabReading">
              Reading
            </th>
            <th className="vocabMeaningHead" name="vocabMeaning">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody>
          {vocab.map(vocab => (
            <tr className="vocabRow">
              <td>
                <label htmlFor="vocabWord">{vocab.word}</label>
              </td>
              <td>
                <label htmlFor="vocabReading">{vocab.reading}</label>
              </td>
              <td>
                <label htmlFor="vocabMeaning">{vocab.meaning}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenkiVocabTable;
