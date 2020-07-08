import ApiService from "./ApiService";

class StatusService extends ApiService {
  STATUS_RESOURCE="status";
  STATUS_UP="UP";

  constructor() {
    super();
  }

  async isReady() {
    const response=await this.api.get(this.STATUS_RESOURCE);
    console.log(response.data.status);
    if (response.data.status==this.STATUS_UP) {
      return true;
    }
    return false;
  }
}

export default new StatusService();
