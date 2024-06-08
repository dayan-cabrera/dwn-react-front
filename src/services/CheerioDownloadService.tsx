import axios, { AxiosResponse } from "axios";
import * as cheerio from "cheerio";

interface FileSchemma {
  name: string;
  url: string;
}

export class CheerioDownloadService {
  private axios: typeof axios;
  private api: string;
  private url: string;

  constructor(url: string) {
    this.axios = axios;
    this.url = url;
    this.api = "http://127.0.0.1:8081/api/download";
  }

  public async fetchImageNames(): Promise<boolean> {
    try {
      const res = await axios.get(this.api, {
        params: { url: this.url },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const filesNames: FileSchemma[] = res.data.files;
      console.log(filesNames);

      return true;
    } catch (err) {
      console.log(`Error fetching image names: ${err}`);
      return false;
    }
  }
}
