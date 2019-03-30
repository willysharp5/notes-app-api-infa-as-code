import { success } from "../libs/response-lib";

export async function main(event, context) {
  
  let result = [
    {
      "label": "Translate Edo 123",
      "language": "English"
    },
    {
      "label": "Lily-cob-Killers-fr",
      "language": "French"
    },
    {
      "label": "Escjs-Hsd-gm",
      "language": "German"
    },
    {
      "label": "Merlin-bdb-yor",
      "language": "Yoruba"
    }
  ];
  return success(result);
}
