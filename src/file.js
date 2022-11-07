// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (filepath, pathCopy, cbError) => {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      cbError(err);
      return;
    }

    fs.writeFile(pathCopy, `${data}`, err => {
      if (err) {
        cbError(err);
        return;
      }

      fs.unlink(filepath, (err) => {
        if (err) {
          cbError(err);
          return;
        }
        cbError(null);
      });
    });
  });
}
// END
