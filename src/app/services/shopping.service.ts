import { Injectable } from '@angular/core';
import {Client} from 'elasticsearch';

@Injectable()
export class ShoppingService {
  index = 'shopping';
  type = 'produtos';

  constructor() { }

  private createClient() {
    return new Client({
      host: 'http://192.168.0.48:9200',
      apiVersion: '5.5'
    });
  }

  public getItens(query: string, filtro: string, page: number, rows: number) {
    const client = this.createClient();
    const parameters = {
      index: this.index,
      type: this.type,
      from: page,
      size: rows,
      body: {
        query: {
        },
        aggs: {
          categoria_agg: {
            terms: {
              field: 'breadcrumps.keyword'
            }
          }
        }
      }
    };
    if (!query) {
      parameters['body'].query = {
        bool: {
          must: {
            match_all: {}
          }
        }
      };
    } else {
      parameters['body'].query = {
        bool: {
          must: {
            match_phrase: {
              _all: query
            }
          }
        }
      };
    }
    if (filtro) {
      parameters['body']['query']['bool']['filter'] = {};
      parameters['body']['query']['bool']['filter']['term'] = {};
      parameters['body']['query']['bool']['filter']['term']['breadcrumps.keyword'] = filtro;
    }
    return client.search(parameters);
  }

  public getItem(id) {
    const client = this.createClient();
    return client.get({
      index: this.index,
      type: this.type,
      id: id
    });
  }

  voceQuisDizer(texto) {
    const client = this.createClient();
    const params = {
      index: this.index,
      type: this.type,
      size: 0,
      body: {
        suggest: {
          voceQuisDizer: {
            text: texto,
            phrase: {
              field: 'voceQuisDizer'
            }
          }
        }
      }
    };
    return client.search(params);
  }

  autoComplete(texto) {
    const query = texto + '.*';
    const client = this.createClient();
    const params = {
      index: this.index,
      type: this.type,
      size: 0,
      body: {
        aggs: {
          autocomplete: {
            terms: {
              field: 'autocomplete',
              size: 2,
              include: query
            }
          }
        }
      }
    };
    return client.search(params);
  }
}
