

import { MauiProgram } from '../models/maui-program';
import { spawn } from 'child_process';

class MauiProgramService {
  async runProgram(program: MauiProgram): Promise<string> {
    const childProcess = spawn(program.command, program.args, { shell: true });
    let output = '';

    childProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    childProcess.stderr.on('data', (data) => {
      output += data.toString();
    });

    await new Promise((resolve, reject) => {
      childProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Program exited with code ${code}`));
        }
      });
    });

    return output;
  }

  async getProgramOutput(program: MauiProgram): Promise<string> {
    return this.runProgram(program);
  }
}

export default MauiProgramService;