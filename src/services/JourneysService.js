import ApiService from "./ApiService";

class JourneysService extends ApiService {
  JOURNEYS_RESOURCE = "journey";

  constructor() {
    super();
  }

  async save(journey) {
    await this.api.post(this.JOURNEYS_RESOURCE, journey);
  }
}

export default new JourneysService();
