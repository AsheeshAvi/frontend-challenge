export const getSearchCharacter = async (characterName) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${characterName}`;
        const response = await fetch(url, {
            method: "GET",
        });
        const result = await response.json();
        return result;
      } catch(error) {
          console.log(error);
          return false;
      };
  }