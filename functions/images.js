import { success } from "../libs/response-lib";

export async function main(event, context) {
  
  let result = [
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
      "title": "Star Wars",
      "size": 180,
      "dimension": "1280 X 720",
      "date": "Nov 10th 2019"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//amYkOxCwHiVTFKendcIW0rSrRlU.jpg",
      "title": "The Empire Strikes Back",
      "size": 120,
      "dimension": "1280 X 720",
      "date": "Sep 12th 2018"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//koE7aMeR2ATivI18mCbscLsI0Nm.jpg",
      "title": "Return of the Jedi",
      "size": 180,
      "dimension": "1280 X 720",
      "date": "Jan 1st 2017"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//v6lRzOActebITc9rizhNAdwQR1O.jpg",
      "title": "Star Wars: Episode I - The Phantom Menace",
      "size": 120,
      "dimension": "1280 X 720",
      "date": "Feb 24th 2019"
    }
  ];
  return success(result);
}
