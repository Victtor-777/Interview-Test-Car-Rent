export interface CarMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface CarMakesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: CarMake[];
}

export interface CarModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface CarModelsResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: CarModel[];
}
