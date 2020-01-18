// each epic returns a single function.
// it returns stream of actions.
import {ajax} from 'rxjs/ajax';
import {tap, ignoreElements } from 'rxjs/operators';

const API =  'https://api.punkapi.com/v2/beers';

export  function fetchBeersEpic() {
  return ajax.getJSON(API).pipe(
    tap(x => console.log(x)),
    ignoreElements()

  )

}