class ApiService {
  static INSTANCE: ApiService;

  API_SERVICE_BASE: string;
  HEADERS: Headers;
  API_TIME_OUT: number;
  TOKEN: string;

  static getInstance = () => {
    if (!ApiService.INSTANCE) {
      ApiService.INSTANCE = new ApiService();
    }
    return ApiService.INSTANCE;
  };

  constructor() {
    this.API_SERVICE_BASE = 'xxx';
    this.API_TIME_OUT = 8000;
    this.HEADERS = new Headers({
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });
    this.TOKEN = '';
  }

  async fetchWithTimeout(resource: string, options: any = {}) {
    if (this.TOKEN !== '') {
      this.HEADERS.append('Authorization', `Bearer ${this.TOKEN}`);
    }
    options.timeout = this.API_TIME_OUT;
    options.headers = this.HEADERS;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), options.timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  }

  setAuth(token: string): void {
    this.TOKEN = token;
  }

  get(params: string) {
    const options = { method: 'GET' };
    return this.fetchWithTimeout(`${this.API_SERVICE_BASE}?${params}`, options);
  }

  post(params?: string, body?: object) {
    const options = { method: 'POST', body };
    return this.fetchWithTimeout(`${this.API_SERVICE_BASE}/${params}`, options);
  }

  put(params?: string, body?: object) {
    const options = { method: 'PUT', body };
    return this.fetchWithTimeout(`${this.API_SERVICE_BASE}/${params}`, options);
  }

  patch(params?: string, body?: object) {
    const options = { method: 'PATCH', body };
    return this.fetchWithTimeout(`${this.API_SERVICE_BASE}/${params}`, options);
  }

  delete(params?: string) {
    const options = { method: 'DELETE' };
    return this.fetchWithTimeout(`${this.API_SERVICE_BASE}/${params}`, options);
  }
}

// async function SAMPLE RESOURCE(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

export default ApiService;
