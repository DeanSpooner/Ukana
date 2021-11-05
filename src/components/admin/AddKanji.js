import React, { useState } from "react";
import PostKanji from "../../requests/PostKanji.js";

const AddKanji = () => {
  const [kanjiObject, setKanjiObject] = useState([]);
  const [kanji, setKanji] = useState("");
  const [reading, setReading] = useState("");
  const [meaning, setMeaning] = useState("");
  const [examples, setExamples] = useState("");

  const handleRowSubmit = event => {
    event.preventDefault();
    setKanjiObject([
      ...kanjiObject,
      {
        kanji: kanji,
        reading: reading,
        meaning: meaning,
        examples: examples,
      },
    ]);
    setKanji("");
    setReading("");
    setMeaning("");
    setExamples("");
  };

  const handleKanjiChange = event => {
    setKanji(event.target.value);
  };

  const handleReadingChange = event => {
    setReading(event.target.value);
  };

  const handleMeaningChange = event => {
    setMeaning(event.target.value);
  };

  const handleExamplesChange = event => {
    setExamples(event.target.value);
  };

  const handleAllSubmit = event => {
    event.preventDefault();
    PostKanji(kanjiObject);
  };

  return (
    <div className="AddVocab">
      <h2>Add Kanji</h2>
      {kanjiObject.length > 0 && <h3>Waiting to submit:</h3>}
      {kanjiObject.length > 0 &&
        kanjiObject.map(row => (
          <>
            <p>
              Word: {row.kanji}, reading: {row.reading}, meaning: {row.meaning},
              examples: {row.examples}
            </p>
          </>
        ))}
      <form onSubmit={handleRowSubmit}>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th className="addKanjiHead" name="addKanjiKanji">
                Kanji
              </th>
              <th className="addReadingHead" name="addKanjiReading">
                Reading
              </th>
              <th className="addMeaningHead" name="addKanjiMeaning">
                Meaning
              </th>
              <th className="addExamplesHead" name="addKanjiExamples">
                Examples
              </th>
              <th className="addSubmitHead" name="addSubmitHead"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="addKanjiKanji"
                  value={kanji}
                  onChange={handleKanjiChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="addKanjiReading"
                  value={reading}
                  onChange={handleReadingChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="addKanjiMeaning"
                  value={meaning}
                  onChange={handleMeaningChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="addKanjiExamples"
                  value={examples}
                  onChange={handleExamplesChange}
                />
              </td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <button type="button" onClick={handleAllSubmit}>
        Submit All!!!
      </button>
    </div>
  );
};

export default AddKanji;
