import { success } from "../libs/response-lib";

export async function main(event, context) {
  //let userId = event.requestContext.identity.cognitoIdentityId;
  //let noteId = event.pathParameters.id;
  //let envVarible = process.env.secretKey
  
  let result = [
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
      "title": "Star Wars",
      "status": "processing",
      "duration": "1:24:47",
      "size": 180,
      "date": "Nov 10th 2019"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//amYkOxCwHiVTFKendcIW0rSrRlU.jpg",
      "title": "The Empire Strikes Back",
      "status": "ready",
      "duration": "2:34:09",
      "size": 120,
      "date": "Sep 12th 2018"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//koE7aMeR2ATivI18mCbscLsI0Nm.jpg",
      "title": "Return of the Jedi",
      "status": "processing",
      "duration": "1:24:47",
      "size": 180,
      "date": "Jan 1st 2017"
    },
    {
      "thumbnail": "http://image.tmdb.org/t/p/w500//v6lRzOActebITc9rizhNAdwQR1O.jpg",
      "title": "Star Wars: Episode I - The Phantom Menace",
      "status": "ready",
      "duration": "2:34:09",
      "size": 120,
      "date": "Feb 24th 2019"
    }
  ];
  return success(result);

  //failure({ status: false, error: "Item not found." });
}
