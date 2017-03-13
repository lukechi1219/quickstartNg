import {PipeTransform, Injectable, Pipe} from '@angular/core';
/**
 * Created by Luke.Chi on 2017/3/13.
 */

@Pipe({
  name: 'raceMtrFilter',
  pure: false
})
@Injectable()
export class RaceMtrFilterPipe implements PipeTransform {
  transform(items: any[]): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (items == null) {
      return null;
    }
    return items.filter(item => item.minutesToRun >= 0);
  }
}
