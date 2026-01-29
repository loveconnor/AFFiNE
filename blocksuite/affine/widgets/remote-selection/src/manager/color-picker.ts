class RandomPicker<T> {
  private _copyArray: T[];

  private readonly _originalArray: T[];

  constructor(array: T[]) {
    this._originalArray = [...array];
    this._copyArray = [...array];
  }

  private randomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }

  pick(): T {
    if (this._copyArray.length === 0) {
      this._copyArray = [...this._originalArray];
    }

    const index = this.randomIndex(this._copyArray.length);
    const item = this._copyArray[index];
    this._copyArray.splice(index, 1);
    return item;
  }
}

export const multiPlayersColor = new RandomPicker([
  'var(--lovenotes-multi-players-purple)',
  'var(--lovenotes-multi-players-magenta)',
  'var(--lovenotes-multi-players-red)',
  'var(--lovenotes-multi-players-orange)',
  'var(--lovenotes-multi-players-green)',
  'var(--lovenotes-multi-players-blue)',
  'var(--lovenotes-multi-players-brown)',
  'var(--lovenotes-multi-players-grey)',
]);
