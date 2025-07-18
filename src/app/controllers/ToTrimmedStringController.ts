

class ToTrimmedStringController {
  constructor(private toTrimmedStringService, private logger) {}

  async ToTrimmedString(req, res) {
    try {
      if (!req || !req.body) {
        throw new Error('Invalid request object');
      }
      const result = await this.toTrimmedStringService.ToTrimmedString(req.body);
      if (result === null || result === undefined) {
        throw new Error('Result is null or undefined');
      }
      const response = result.toString();
      res.send(response);
      this.logger.info('ToTrimmedString endpoint successfully handled');
    } catch (error) {
      this.logger.error('Error handling ToTrimmedString endpoint', error);
      res.status(500).send('Internal Server Error');
    }
  }
}