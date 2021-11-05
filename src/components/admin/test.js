const randomSimpsonsCharacter = () => {
  const simpsonsCharacters = [
    {
      name: "Homer Simpson",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Homer_Simpson_2006.png/220px-Homer_Simpson_2006.png",
      quote: "I'm Homer Simpson!",
    },
    {
      name: "Marge Simpson",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Marge_Simpson_2006.png/220px-Marge_Simpson_2006.png",
      quote: "I'm Marge Simpson!",
    },
    {
      name: "Bart Simpson",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Bart_Simpson_2006.png/220px-Bart_Simpson_2006.png",
      quote: "I'm Bart Simpson!",
    },
    {
      name: "Lisa Simpson",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Lisa_Simpson_2006.png/220px-Lisa_Simpson_2006.png",
      quote: "I'm Lisa Simpson!",
    },
    {
      name: "Maggie Simpson",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Maggie_Simpson_2006.png/220px-Maggie_Simpson_2006.png",
      quote: "I'm Maggie Simpson!",
    },
  ];
  const randomIndex = Math.floor(Math.random() * simpsonsCharacters.length);
  return simpsonsCharacters[randomIndex];
};
