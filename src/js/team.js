import Character from './character';

export default class Team {
  constructor() {
    this.members = [];
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }

  add(character) {
    if (character instanceof Character) {
      this.members.push(character);
      return;
    }
    throw new Error('Illegal argument');
  }

  addAll(characters) {
    if (characters == null) {
      throw new Error('Illegal argument');
    }
    if (!Array.isArray(characters)) {
      throw new Error('Illegal argument');
    }
    characters.forEach((character) => this.add(character));
  }
}
