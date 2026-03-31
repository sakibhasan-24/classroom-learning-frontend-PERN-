// export const API_URL = "https://api.fake-rest.refine.dev";
import { mockData } from "@/constant/mockData";
// import { mockData } from "@/constant/mockData";
// import {
//   DataProvider,
//   GetListParams,
//   GetListResponse,
//   BaseRecord,
// } from "@refinedev/core";

// export const dataProvider: DataProvider = {
//   getList: async <TData extends BaseRecord = BaseRecord>({
//     resource,
//   }: GetListParams): Promise<GetListResponse<TData>> => {
    
//     // ✅ resource check
//     if (resource !== "subjects") {
//       return {
//         data: [] as TData[],
//         total: 0,
//       };
//     }


//     return {
//       data: mockData as TData[],
//       total: mockData.length,
//     }
   
//   }
//   getOne:async()=>{throw new Error("The function is not present")}
//   create:async ()=>{throw new Error("dsjufdshfbjds")}
//    update:async ()=>{throw new Error("dsjufdshfbjds")}
//     deleteOne:async ()=>{throw new Error("dsjufdshfbjds")}

  
// };


import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
  GetOneParams,
  GetOneResponse,
  CreateParams,
  CreateResponse,
  UpdateParams,
  UpdateResponse,
  DeleteOneParams,
  DeleteOneResponse,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subject") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockData as unknown as TData[],
      total: mockData.length,
    };
  },
  getOne:async ()=>{throw new Error("The function is not present")},
  create:async ()=>{throw new Error("dsjufdshfbjds")},
   update:async ()=>{throw new Error("dsjufdshfbjds")},
    deleteOne:async ()=>{throw new Error("dsjufdshfbjds")},

 getApiUrl:()=>{throw new Error("dsjufdshfbjds")}
  
};