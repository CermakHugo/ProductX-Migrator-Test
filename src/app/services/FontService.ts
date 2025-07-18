

class FontService {
  private fonts = [];

  public addFont(fontFileName: string, fontName: string) {
    this.fonts.push({ fontFileName, fontName });
  }

  public configureFonts() {
    this.addFont('font1.ttf', 'Font 1');
    this.addFont('font2.ttf', 'Font 2');
  }
}