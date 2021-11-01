import React from "react";
import "../styles/GenkiTable.css";

const GenkiKanjiTable = ({ kanji }) => {
  return (
    <div className="GenkiKanjiTable">
      <h2>Kanji</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th className="kanjiKanjiHead" name="kanjiKanji">
              Kanji
            </th>
            <th className="kanjiReadingHead" name="kanjiReading">
              Reading
            </th>
            <th className="kanjiMeaningHead" name="kanjiMeaning">
              Meaning
            </th>
            <th className="kanjiExamplesHead" name="kanjiExamples">
              Examples
            </th>
          </tr>
        </thead>
        <tbody>
          {kanji.map(kanji => (
            <tr className="kanjiRow">
              <td className="kanjiRowKanji">
                <label htmlFor="kanjiKanji">{kanji.kanji}</label>
              </td>
              <td>
                <label htmlFor="kanjiReading">{kanji.reading}</label>
              </td>
              <td>
                <label htmlFor="kanjiMeaning">{kanji.meaning}</label>
              </td>
              <td>
                <label htmlFor="kanjiExamples">{kanji.examples}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenkiKanjiTable;
