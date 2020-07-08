import ApiService from "./ApiService";

class LocationsService extends ApiService {
  LOCATIONS_RESOURCE = "location";

  constructor() {
    super();
  }

  async findByGroupId(groupId) {
    return await this.sendForm(this.LOCATIONS_RESOURCE, { id: groupId });
  }
}

export default new LocationsService();
