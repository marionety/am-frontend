import ApiService from "./ApiService";

class AmbulancesService extends ApiService {
  AMBULANCES_RESOURCE="ambulances";

  constructor() {
    super();
  }

  async save(ambulances) {
    await this.api.put(this.AMBULANCES_RESOURCE, ambulances);
  }
}

export default new AmbulancesService();
