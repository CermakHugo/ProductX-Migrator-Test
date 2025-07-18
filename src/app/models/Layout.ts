

export class Layout {
  private _id: number;
  private _name: string;
  private _description: string;
  private _columns: number;
  private _rows: number;
  private _columnGap: number;
  private _rowGap: number;
  private _padding: number;
  private _margin: number;
  private _backgroundColor: string;
  private _backgroundImage: string;
  private _backgroundSize: string;
  private _backgroundPosition: string;
  private _backgroundRepeat: string;

  constructor(id: number, name: string, description: string, columns: number, rows: number, columnGap: number, rowGap: number, padding: number, margin: number, backgroundColor: string, backgroundImage: string, backgroundSize: string, backgroundPosition: string, backgroundRepeat: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._columns = columns;
    this._rows = rows;
    this._columnGap = columnGap;
    this._rowGap = rowGap;
    this._padding = padding;
    this._margin = margin;
    this._backgroundColor = backgroundColor;
    this._backgroundImage = backgroundImage;
    this._backgroundSize = backgroundSize;
    this._backgroundPosition = backgroundPosition;
    this._backgroundRepeat = backgroundRepeat;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    if (typeof value !== 'number') {
      throw new Error('id must be a number');
    }
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    if (typeof value !== 'string') {
      throw new Error('description must be a string');
    }
    this._description = value;
  }

  get columns(): number {
    return this._columns;
  }

  set columns(value: number) {
    if (typeof value !== 'number') {
      throw new Error('columns must be a number');
    }
    this._columns = value;
  }

  get rows(): number {
    return this._rows;
  }

  set rows(value: number) {
    if (typeof value !== 'number') {
      throw new Error('rows must be a number');
    }
    this._rows = value;
  }

  get columnGap(): number {
    return this._columnGap;
  }

  set columnGap(value: number) {
    if (typeof value !== 'number') {
      throw new Error('columnGap must be a number');
    }
    this._columnGap = value;
  }

  get rowGap(): number {
    return this._rowGap;
  }

  set rowGap(value: number) {
    if (typeof value !== 'number') {
      throw new Error('rowGap must be a number');
    }
    this._rowGap = value;
  }

  get padding(): number {
    return this._padding;
  }

  set padding(value: number) {
    if (typeof value !== 'number') {
      throw new Error('padding must be a number');
    }
    this._padding = value;
  }

  get margin(): number {
    return this._margin;
  }

  set margin(value: number) {
    if (typeof value !== 'number') {
      throw new Error('margin must be a number');
    }
    this._margin = value;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    if (typeof value !== 'string') {
      throw new Error('backgroundColor must be a string');
    }
    this._backgroundColor = value;
  }

  get backgroundImage(): string {
    return this._backgroundImage;
  }

  set backgroundImage(value: string) {
    if (typeof value !== 'string') {
      throw new Error('backgroundImage must be a string');
    }
    this._backgroundImage = value;
  }

  get backgroundSize(): string {
    return this._backgroundSize;
  }

  set backgroundSize(value: string) {
    if (typeof value !== 'string') {
      throw new Error('backgroundSize must be a string');
    }
    this._backgroundSize = value;
  }

  get backgroundPosition(): string {
    return this._backgroundPosition;
  }

  set backgroundPosition(value: string) {
    if (typeof value !== 'string') {
      throw new Error('backgroundPosition must be a string');
    }
    this._backgroundPosition = value;
  }

  get backgroundRepeat(): string {
    return this._backgroundRepeat;
  }

  set backgroundRepeat(value: string) {
    if (typeof value !== 'string') {
      throw new Error('backgroundRepeat must be a string');
    }
    this._backgroundRepeat = value;
  }
}