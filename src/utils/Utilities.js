const Utilities = {
  setCopy(data) {
    let tech;
    for (let i = 0; i < data.tech.length; i++) {
      if (i === 0) {
        tech = data.tech[i];
      } else if (i + 1 === data.tech.length) {
        tech = tech.concat(' & ', data.tech[i]);
      } else {
        tech = tech.concat(', ', data.tech[i]);
      }
    }

    return tech;
  }
}

export default Utilities;