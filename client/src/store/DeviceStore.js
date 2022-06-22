import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];

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
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
