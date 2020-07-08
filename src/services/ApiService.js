import axios from "axios";
import qs from "querystring";
import ApiConstants from "../constants/ApiConstants";
import HttpStatus from "../constants/HttpStatus";

class ApiService {
  API_URL=ApiConstants.URL;

  constructor() {
    this.api=axios.create({ baseURL: this.API_URL });
    this.config={
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    this.setResponseHandlers();
  }

  setResponseHandlers() {
    this.api.interceptors.response.use(
      (response) => this.responseSuccessHandler(response),
      (error) => this.responseErrorHandler(error)
    );
  }

  responseSuccessHandler(response) {
    return response;
  }

  responseErrorHandler(error) {
    if (error.response) {
      if (error.response.status===HttpStatus.BAD_REQUEST) {
        console.log(error.response.data);
        throw new Error("Los datos enviados no son válidos: "+error.response.data.message);
      } else if (error.response.status===HttpStatus.NOT_FOUND) {
        throw new Error("No se ha encontrado la información solicitada");
      } else {
        throw new Error(
          "Ha ocurrido un error inesperado en la respuesta de la petición"
        );
      }
    } else if (error.request) {
      throw new Error(
        "Ha ocurrido un error inesperado en la petición enviada al servidor"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }

  async sendForm(resource, data) {
    const response=await this.api.post(resource, qs.stringify(data), this.config);
    return response.data;
  }
}

export default ApiService;
