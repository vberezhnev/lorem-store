import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Планшеты' },
      { id: 4, name: 'Ноутбуки' },
      { id: 5, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Xiaomi' },
      { id: 5, name: 'Philips' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'iPhone 12 Pro',
        price: 99999,
        rating: 5,
        img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7398264163a6ada9a49f0dca196a210f/593fe22ee29c6e2a0eca266bbcef3b1505d2c8c3df5828e40db3f98129ca0751.jpg.webp',
      },
      {
        id: 2,
        name: 'iPhone 12 notPro',
        price: 99999,
        rating: 5,
        img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7398264163a6ada9a49f0dca196a210f/593fe22ee29c6e2a0eca266bbcef3b1505d2c8c3df5828e40db3f98129ca0751.jpg.webp',
      },
      {
        id: 3,
        name: 'iPhone 12 super Pro',
        price: 99999,
        rating: 5,
        img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7398264163a6ada9a49f0dca196a210f/593fe22ee29c6e2a0eca266bbcef3b1505d2c8c3df5828e40db3f98129ca0751.jpg.webp',
      },
      {
        id: 4,
        name: 'iPhone 12 super-super Pro',
        price: 99999,
        rating: 5,
        img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7398264163a6ada9a49f0dca196a210f/593fe22ee29c6e2a0eca266bbcef3b1505d2c8c3df5828e40db3f98129ca0751.jpg.webp',
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this); // Теперь MobX будет следить за изменениями этих переменных
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
