
import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://gist.githubusercontent.com/PabloAlexF/fbd44855f2663c956395e217a56a67d1/raw/b55d6a3da5315303e0a6297ed29ff59f37aa6780/db.json",
});