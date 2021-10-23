const kanaArray = [
  {
    romaji: "a",
    hiragana: "あ",
    katakana: "ア",
  },
  {
    romaji: "i",
    hiragana: "い",
    katakana: "イ",
  },
  {
    romaji: "u",
    hiragana: "う",
    katakana: "ウ",
  },
  {
    romaji: "e",
    hiragana: "え",
    katakana: "エ",
  },
  {
    romaji: "o",
    hiragana: "お",
    katakana: "オ",
  },
  {
    romaji: "ka",
    hiragana: "か",
    katakana: "カ",
  },
  {
    romaji: "ki",
    hiragana: "き",
    katakana: "キ",
  },
  {
    romaji: "ku",
    hiragana: "く",
    katakana: "ク",
  },
  {
    romaji: "ke",
    hiragana: "け",
    katakana: "ケ",
  },
  {
    romaji: "ko",
    hiragana: "こ",
    katakana: "コ",
  },
  {
    romaji: "sa",
    hiragana: "さ",
    katakana: "サ",
  },
  {
    romaji: "shi",
    hiragana: "し",
    katakana: "シ",
  },
  {
    romaji: "su",
    hiragana: "す",
    katakana: "ス",
  },
  {
    romaji: "se",
    hiragana: "せ",
    katakana: "セ",
  },
  {
    romaji: "so",
    hiragana: "そ",
    katakana: "ソ",
  },
  {
    romaji: "ta",
    hiragana: "た",
    katakana: "タ",
  },
  {
    romaji: "chi",
    hiragana: "ち",
    katakana: "チ",
  },
  {
    romaji: "tsu",
    hiragana: "つ",
    katakana: "ツ",
  },
  {
    romaji: "te",
    hiragana: "て",
    katakana: "テ",
  },
  {
    romaji: "to",
    hiragana: "と",
    katakana: "ト",
  },
  {
    romaji: "ha",
    hiragana: "な",
    katakana: "ナ",
  },
  {
    romaji: "hi",
    hiragana: "に",
    katakana: "ニ",
  },
  {
    romaji: "fu",
    hiragana: "ぬ",
    katakana: "ヌ",
  },
  {
    romaji: "he",
    hiragana: "ね",
    katakana: "ネ",
  },
  {
    romaji: "ho",
    hiragana: "の",
    katakana: "ノ",
  },
  {
    romaji: "ma",
    hiragana: "は",
    katakana: "ハ",
  },
  {
    romaji: "mi",
    hiragana: "ひ",
    katakana: "ヒ",
  },
  {
    romaji: "mu",
    hiragana: "ふ",
    katakana: "フ",
  },
  {
    romaji: "me",
    hiragana: "へ",
    katakana: "ヘ",
  },
  {
    romaji: "mo",
    hiragana: "ほ",
    katakana: "ホ",
  },
  {
    romaji: "ya",
    hiragana: "ま",
    katakana: "マ",
  },
  {
    romaji: "yu",
    hiragana: "み",
    katakana: "ミ",
  },
  {
    romaji: "yo",
    hiragana: "む",
    katakana: "ム",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "ra",
    hiragana: "め",
    katakana: "メ",
  },
  {
    romaji: "ri",
    hiragana: "も",
    katakana: "モ",
  },
  {
    romaji: "ru",
    hiragana: "や",
    katakana: "ヤ",
  },
  {
    romaji: "re",
    hiragana: "ゆ",
    katakana: "ユ",
  },
  {
    romaji: "ro",
    hiragana: "よ",
    katakana: "ヨ",
  },
  {
    romaji: "wa",
    hiragana: "ら",
    katakana: "ラ",
  },
  {
    romaji: "wo",
    hiragana: "り",
    katakana: "リ",
  },
  {
    romaji: "n",
    hiragana: "る",
    katakana: "ル",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "",
    hiragana: "",
    katakana: "",
  },
  {
    romaji: "ga",
    hiragana: "れ",
    katakana: "レ",
  },
  {
    romaji: "gi",
    hiragana: "ろ",
    katakana: "ロ",
  },
  {
    romaji: "gu",
    hiragana: "わ",
    katakana: "ワ",
  },
  {
    romaji: "ge",
    hiragana: "を",
    katakana: "ヲ",
  },
  {
    romaji: "go",
    hiragana: "ん",
    katakana: "ン",
  },
  {
    romaji: "za",
    hiragana: "が",
    katakana: "ガ",
  },
  {
    romaji: "ji",
    hiragana: "ぎ",
    katakana: "ギ",
  },
  {
    romaji: "zu",
    hiragana: "ぐ",
    katakana: "グ",
  },
  {
    romaji: "ze",
    hiragana: "げ",
    katakana: "ゲ",
  },
  {
    romaji: "zo",
    hiragana: "ご",
    katakana: "ゴ",
  },
  {
    romaji: "da",
    hiragana: "ざ",
    katakana: "ザ",
  },
  {
    romaji: "ji",
    hiragana: "じ",
    katakana: "ジ",
  },
  {
    romaji: "zu",
    hiragana: "ず",
    katakana: "ズ",
  },
  {
    romaji: "de",
    hiragana: "ぜ",
    katakana: "ゼ",
  },
  {
    romaji: "do",
    hiragana: "ぞ",
    katakana: "ゾ",
  },
  {
    romaji: "ba",
    hiragana: "だ",
    katakana: "ダ",
  },
  {
    romaji: "bi",
    hiragana: "ぢ",
    katakana: "ヂ",
  },
  {
    romaji: "bu",
    hiragana: "づ",
    katakana: "ヅ",
  },
  {
    romaji: "be",
    hiragana: "で",
    katakana: "デ",
  },
  {
    romaji: "bo",
    hiragana: "ど",
    katakana: "ド",
  },
  {
    romaji: "pa",
    hiragana: "ば",
    katakana: "バ",
  },
  {
    romaji: "pi",
    hiragana: "び",
    katakana: "ビ",
  },
  {
    romaji: "pu",
    hiragana: "ぶ",
    katakana: "ブ",
  },
  {
    romaji: "pe",
    hiragana: "べ",
    katakana: "ベ",
  },
  {
    romaji: "po",
    hiragana: "ぼ",
    katakana: "ボ",
  },
];

module.exports = { kanaArray };
