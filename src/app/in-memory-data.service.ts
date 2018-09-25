import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const communities = [
      { id: 1, name: 'ドローン愛好家' },
      { id: 2, name: 'テニス部' },
      { id: 3, name: 'イタリアン美食家' },
    ];
    return {communities};
  }
}