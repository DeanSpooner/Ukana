import React, { useState } from "react";
import PostVocab from "../../requests/PostVocab.js";

const AddVocab = () => {
  const [vocab, setVocab] = useState([]);
  const [word, setWord] = useState("");
  const [reading, setReading] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleRowSubmit = event => {
    event.preventDefault();
    setVocab([
      ...vocab,
      {
        word: word,
        reading: reading,
        meaning: meaning,
      },
    ]);
    setWord("");
    setReading("");
    setMeaning("");
  };

  const handleWordChange = event => {
    setWord(event.target.value);
  };

  const handleReadingChange = event => {
    setReading(event.target.value);
  };

  const handleMeaningChange = event => {
    setMeaning(event.target.value);
  };

  const handleAllSubmit = event => {
    event.preventDefault();
    PostVocab(vocab);
  };

  return (
    <div className="AddVocab">
      <h2>Add Vocab</h2>
      {vocab.length > 0 && <h3>Waiting to submit:</h3>}
      {vocab.length > 0 &&
        vocab.map(row => (
          <>
            <p>
              Word: {row.word}, reading: {row.reading}, meaning: {row.meaning}
            </p>
          </>
        ))}
      <form onSubmit={handleRowSubmit}>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th className="addVocabHead" name="addVocabWord">
                Word
              </th>
              <th className="addReadingHead" name="addVocabReading">
                Reading
              </th>
              <th className="addMeaningingHead" name="addVocabMeaning">
                Meaning
              </th>
              <th className="addSubmitHead" name="addSubmitHead"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="addVocabWord"
                  value={word}
                  onChange={handleWordChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="addVocabReading"
                  value={reading}
                  onChange={handleReadingChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="addVocabMeaning"
                  value={meaning}
                  onChange={handleMeaningChange}
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

export default AddVocab;
