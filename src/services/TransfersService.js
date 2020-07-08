import ApiService from "./ApiService";

class TransfersService extends ApiService {
  TRANSFERS_RESOURCE = "transfer";

  constructor() {
    super();
  }

  async save(groupId) {
    await this.sendForm(this.TRANSFERS_RESOURCE, { id: groupId });
  }
}

export default new TransfersService();
