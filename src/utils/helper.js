export const Filter = (restraunt, searchText) => {
    return  restraunt.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
      };